import React from 'react'
import { Sidebars } from './Sidebars';
import "./DashboardTabs.css";

const FoodCart = () => {

    return (
        <div className="div">
            <div>
            <Sidebars/>
            </div>
            <div>
            <div classname="Dashboard-box">
                  <h1 style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>Dashboard</h1>
                  <h2 style={{ fontWeight: 'bold' }}>Your FoodCart</h2>
                </div>
                <div className="btn-one">
                  {/* <button style={{ color: 'white',backgroundColor: '#d70000', border: 'hidden', padding: 15, margin: 2 }} onClick={()=>{handleClick()}}>Add Restaurents</button> */}
                </div>
            </div>
        </div>
    )
}

export default FoodCart
