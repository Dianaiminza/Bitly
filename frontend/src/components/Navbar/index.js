import React from 'react';
import image from './logo.png'

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
      <div style={{marginBottom: "10px"}}>
              <img src={image} alt="bitly"  
                style={{width: "50%", height: "auto"}}/>
            </div>
        <Bars />
  
        <NavMenu>
          
          <NavLink to='/about' activeStyle>
            WhyBitly?
           
          </NavLink>
          <NavLink to='/solutions' activeStyle>
            Solutions
          </NavLink>
          <NavLink to='/features' activeStyle>
            Features
          </NavLink>
          <NavLink to='/pricing' activeStyle>
            Pricing
          </NavLink>
          <NavLink to='/resources' activeStyle>
            Resources
          </NavLink>
          <NavLink to='/log-in' activeStyle>
            Login
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            SignUp
          </NavLink>
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/quote'>Get a Quote</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;