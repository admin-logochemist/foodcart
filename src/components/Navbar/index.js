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
            <NavLogo to="/">
               
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/SignIn" activeStyle>
                    SignIn
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="/SignUp" activeStyle>
                    SignUp
                </NavLink>
                <Avatar onClick={signOut} src={user?.photoUrl}/>
            </NavMenu> 
           </Nav> 
        </>
);
};

export default Navbar;
