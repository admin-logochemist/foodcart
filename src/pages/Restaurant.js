import React from 'react'
import { useHistory } from 'react-router';
import { Avatar } from '@material-ui/core';
import { Sidebars } from './Sidebars';
import "./DashboardTabs.css";

const Restaurant = () => {
    return (
        <div className="div">
            <div>
            <Sidebars/>
            </div>
           <div>
           <div classname="Dashboard-box">
                  <h1 style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>Dashboard</h1>
                  <h2 style={{ fontWeight: 'bold' }}>Your Restaurants</h2>
                </div>
                <div className="btn-one">

                  {/* <button style={{ color: 'white',backgroundColor: '#d70000', border: 'hidden', padding: 15, margin: 2 }} onClick={()=>{handleClick()}}>Add Restaurents</button> */}
                </div>
              </div>
              <div style={{ backgroundColor: '#f8f8f8', display: 'flex', justifyContent: 'space-evenly' }}>
              </div>
           </div>
    )
}

export default Restaurant
