import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { login, logout } from '../features/UserSlice'
import Box from '@material-ui/core/Box';
import "./DashboardTabs.css";
import test1 from "../images/test1.png"
import { db } from "../firebase"
import Profile from './Profile';
import FoodcartDetails from './Food-cartDetails'
import TableCell from './RestaurantCard'
import BoxSx from './RestaurentsDetails'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';
import { useDispatch } from 'react-redux'
import Orders from './Orders';  

export const Sidebars = () => {
    const history = useHistory();

    function handleClick1() {
      history.push("/dashboard");
    }
    function handleClick2() {
      history.push("/profile");
    }
    function handleClick3() {
      history.push("/restaurants");
    }
    function handleClick4() {
      history.push("/Foodcart");
    }
    function handleClick5() {
      history.push("/Orders");
    }
  
    return (
        <div className="div">
      <div>
        <div className="left-area">
          <div className="center">
            <div className="Avatar">
              <Avatar />
              <h1 className="name">Ryan Garry</h1>
            </div>
            <h1 className="btn-handleClick" onClick={handleClick1}>
              {" "}
              Dashboard{" "}
            </h1>
            <h1 className="btn-handleClick" onClick={handleClick2}>
              {" "}
              Profile{" "}
            </h1>
            <h1 className="btn-handleClick" onClick={handleClick3}>
              {" "}
              Restaurants{" "}
            </h1>
            <h1 className="btn-handleClick" onClick={handleClick4}>
              {" "}
              FoodCart{" "}
            </h1>
            <h1 className="btn-handleClick" onClick={handleClick5}>
              {" "}
              Orders{" "}
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="DashboardTabs">This is a Dashboard</div> */}
    </div>
    )
}
