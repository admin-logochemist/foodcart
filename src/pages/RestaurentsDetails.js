import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import {useHistory} from 'react-router-dom';
function RestaurentsDetails({ obj }) {
  const history=useHistory()
  function handleClickedd() {
    history.push("/addFood", obj);
  }
  return (
    <div className="A-Box">
      <div className="Box-headings">
        <p>{obj?.resName}</p>
      </div>
   
      <div className="btn-one">
                  <button style={{ color: 'white', backgroundColor: '#d70000', border: 'hidden', padding: 15, margin: 2, marginLeft: 400 }} 
                  onClick={() => { handleClickedd() }}>Add FoodItem</button>
                  {/* <button style={{ color: 'white',backgroundColor: '#d70000', border: 'hidden', padding: 15, margin: 2 }} onClick={()=>{handleClick()}}>Add Restaurents</button> */}
                </div>
    </div>
  )
}

export default RestaurentsDetails
