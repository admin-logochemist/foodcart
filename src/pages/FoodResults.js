import React from 'react'
import "./FoodResults.css"


import logo from '../images/logo.png';
function FoodResults({
    img,location,title,description,star,price,total
}) {
    return (
        <div className="eventResults">
            <img src={logo} alt=""/>
            
            <div class="eventr__info">
                <div class="event__infoTop">
                    <p>Gulshan</p>
                    <h3>Burger </h3>
                    <p>------</p>
                    <p>Chicken Double Decker</p>

        

                </div>
                <div class="event__infoBottom">
                    <div class="event__stars">
                        
                    <p>
                       
                    </p>
                    </div>
                    <div class="event__price">
                        <h4>
                            345
                        </h4>
                     
                    </div>


                </div>
                </div>     
              </div>
    )
}

export default FoodResults