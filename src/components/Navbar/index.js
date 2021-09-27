import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
NavLogo,
} from './NavbarElements';
import { Avatar } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { logout, selectUser } from '../../features/UserSlice';
import { auth } from '../../firebase';
import logo from '../../images/logo.png'
const Navbar = () => {
    const user =useSelector(selectUser);
    const  dispatch = useDispatch();
    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })

    }
    return (
        <>
           <Nav>
            <img src={logo}/>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    HOME
                </NavLink>
                
                <NavLink to="/contact" activeStyle>
                    CONTACT
                </NavLink>
                <NavLink to="/SignIn" activeStyle>
                    LOGIN
                </NavLink>
                <button style={{ backgroundColor: '#d70000',
                 border: 'hidden',
                  color: 'white',
                   padding: 5,
                   fontWeight: 'bold',
                    paddingRight: 20,
                    paddingLeft: 20               
                     }}>BECOME A PARTNER</button>
                {/* <Avatar onClick={signOut} src={user?.photoUrl}/> */}
            </NavMenu> 
           </Nav> 
        </>
);
};

export default Navbar;
