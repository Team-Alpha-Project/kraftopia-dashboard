import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import Nav from "./Nav";

const Header = () => {
  return (
   <MainHeader>
    <NavLink to="/">
        <img src="./images/perfect_logo.png" alt=" " />
    </NavLink>
    <Nav>

    </Nav>
   </MainHeader>
  )
}

const MainHeader = styled.header`
 padding: 0 4.5rem;
 height: 10rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content:space-between;
 align-items:center;
 position:relative;
 position:fixed;
 width:100%;
 z-index:999;
 .logo{
    height:5rem;
 }

 .MainHeader{
  backdrop-filter:blur(20px);
  box-shodow: 0 5px 20px 0.1px rgba(0,0,0,0.1);
  display:fixed;
 }
`;

export default Header;