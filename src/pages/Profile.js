import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import test1 from '../images/test1.png'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { selectUser } from "../features/UserSlice";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    marginTop: 40,
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  con: {
    fontSize: 18,
  }

}));

const Profile = (props) => {
  const classes = useStyles()
   const user= useSelector(selectUser)
   console.log(user)
  return (
 
    <div className={classes.root}>
      <main className={classes.content} style={{}}>
        <Grid item >
          <div className={classes.iconsize} >
         
          
              
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
              <div>
              <img style={{ borderRadius: '50%', height: 300,marginleft: '-37px' }} src={test1}/>
            </div>
            <div className={classes.con}>
            <h2 style={{ textAlign:'center'}}>{user?.displayName}</h2>
                  
                    <p></p>

                    <p style={{ textAlign:'center'}}>Email:{user?.email}</p>
                   

            </div>
                 
                    {/* <p>Invite Link: <a style={{ fontStyle: 'italic', fontSize: 14 }} href={`http://member.mshoppingworld.com/register/${loggedInUser.user.userCode}`}>http://member.mshoppingworld.com/register/${loggedInUser.user.userCode}</a></p> */}
                  </div>
          
                </div>
              
       

          </div>
        </Grid>
      </main>
      {/* whatsapp icon */}

    </div>

  );
}

export default withRouter(Profile)