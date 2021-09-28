import React from 'react';
import image from '../images/restaurant1.jpg';
import ReactStars from "react-rating-stars-component";
import GoogleMapReact from 'google-map-react';
import "./restaurant-box.css"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Restaurantbox (props){  
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
     
return (
    <div>
	<div style={{
        display: 'flex',
        backgroundImage: `url(${image})`,
        justifyContent: 'center',
        backgroundSize: 'cover',
		height: '60vh',
        width: 1360
    }}> 
        </div>
                {/* Headings Area */}
                <div className="default">
                <div className="headings">
                    <h1>Tree Lounge</h1>
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
            <p>Email@email.com</p>
            <p>+1(205)-122-1221</p>
                </div>
                <div className="next">
                     <h1>Location</h1>
                     <p>This is a location area</p>

                     <h1>Salt Lake County, Utah</h1>
                     <p>3608 Coleman Avenue, Palm Springs, California</p>
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


