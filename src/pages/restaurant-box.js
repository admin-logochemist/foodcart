import React from 'react';
import image from '../images/restaurant1.jpg';
import ReactStars from "react-rating-stars-component";
import GoogleMapReact from 'google-map-react';
import "./restaurant-box.css"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-map-react'
import { useSelector } from 'react-redux';

import { selectOpenResturant } from '../features/ResSlice';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Restaurantbox (props){  
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
     const selectResturant=useSelector(selectOpenResturant)
return (
    <div>
	<div>
    <img width="100%" height="500px" src={selectResturant.img}/>
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
            <p>112 Reviews</p>
            <p>{selectResturant.email}</p>
            <p>{selectResturant.phone}</p>
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


