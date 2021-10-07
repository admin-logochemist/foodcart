import React from 'react'
import VerticalTabs from './pages/DashboardTabs'
import { useHistory } from 'react-router-dom'
import "./Dashboard.css"
import { login,logout } from './features/UserSlice'
import { useDispatch } from 'react-redux';

import { auth } from './firebase';
function Dashboard() {
    const  dispatch = useDispatch();
    const history = useHistory();
    function handleClicked() {
        dispatch(logout);

      }
      const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
            history.push('/SignIn')
        })
       
    }
    return (
        <div>
        <div className="Main-div">
            <div className="headings">
                <h1>Dashboard</h1>
                
            </div>
            
            <div className="btn">
            <button style={{ color: 'white',backgroundColor: '#d70000', border: 'hidden', padding: 15, margin: 2, marginLeft: 300 }} onClick={signOut}>Logout</button>
            </div>
        </div>
        <VerticalTabs />
        </div>
    )
}

export default Dashboard
