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

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
               
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
               
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
);
};

export default Navbar;
