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
import { Link, useHistory } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Home from '../../pages/home';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Navbar = () => {
    const user =useSelector(selectUser);
    const [itemCount, setItemCount] = React.useState(0);
    const history=useHistory();
    const  dispatch = useDispatch();
    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }
    function handleClick() {
        history.push("/");
      }
      function handletheClick() {
        history.push("/signup");
      }
    return (
        <>
           <Nav style={{ cursor: 'pointer' }}>
            <img src={logo} onClick={() => handleClick()}/>
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
                     }} onClick={() => handletheClick()}>BECOME A PARTNER</button>
                    <Badge color="secondary" badgeContent={itemCount}>
                        <div style={{ color: '#d70000', marginLeft: 10 }}>
                        <ShoppingCartIcon />{" "}
                        </div>
                    </Badge>
                {/* <Avatar onClick={signOut} src={user?.photoUrl}/> */}
            </NavMenu> 
           </Nav> 
        </>
);
};

export default Navbar;
