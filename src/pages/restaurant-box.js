import React,{useState,useEffect} from 'react';

import ReactStars from "react-rating-stars-component";
import "./restaurant-box.css"
import { useSelector } from 'react-redux';
import { selectOpenResturant } from '../features/ResSlice';
import FoodResults from './FoodResults';
import { Image } from 'react-bootstrap';
import {db} from '../firebase'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Restaurantbox (props){  
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      const [value, setValue] = React.useState(0);
  const [food, setFood] = useState([]);
  const getResturants=()=>{
    db.collection('food').onSnapshot(snapshot=>(
     setFood(snapshot.docs.map(doc=>({
       data:doc.data()
     }
     ))) 
    ))
  };
  useEffect(() => {
    getResturants();
    
  }, [])
  const renderFood = () => {
    if (food.length > 0) {
      console.log("food", food);
      async function trying(url) {
        let image = await url.then(async (url) => { return url })
        console.log('image', image)
        return image.toString()
      }
      // console.log('state', img)
      return food.map((item, index) => {
        var detail = []
        console.log("ï", item)
        for (const i in item) {
          detail.push(item[i])
        }
        return detail.map((item) => {
          // const storageRef = projectStorage.ref(`images/${item.id}/`).getDownloadURL();
          return (
  
            <FoodResults
              img={item.postImage}
              category={item.category}
              title={item.title}
              description={item.description}
              price={item.price}
              
            />
          );
        })
      })
    }
  };
     const selectResturant=useSelector(selectOpenResturant)
return (
    <div>
	<div>
    <Image width="100%" height="500px" src={selectResturant.img}/>
        </div>
                {/* Headings Area */}
                <div className="default">
                <div className="headings">
                    <h1>{selectResturant.resname}.</h1>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#FFFF00"
            />
           
            <p>{selectResturant.email}</p>
            <p>{selectResturant.phone}</p>
           {renderFood()}
                </div>
                <div className="next">
                     <h1>Location</h1>
                   
                     
                     <p>{selectResturant.address}</p>
                    
                    
                {/* <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div> */}
                </div>
                </div>
        </div>
);
};

export default Restaurantbox;


