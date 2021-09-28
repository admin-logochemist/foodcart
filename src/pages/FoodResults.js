import React from 'react'
import "./FoodResults.css"


import burger from './pic1.jpg';
function FoodResults({
    img,foodtype,title,description,star,price,total
}) {
    return (
        <div className="eventResults">
            <img src={img} alt=""/>
            
            <div class="eventr__info">
                <div class="event__infoTop">
                    <p>{foodtype}</p>
                    <h3>{title}</h3>
                    <p>------</p>
                    <p>{description}</p>

        

                </div>
                <div class="event__infoBottom">
                    <div class="event__stars">
                        
                    <p>
                       
                    </p>
                    </div>
                    <div class="event__price">
                        <h3> 
                           $ {price}
                        </h3>
                     
                    </div>


                </div>
                </div>     
              </div>
    )
}

export default FoodResults