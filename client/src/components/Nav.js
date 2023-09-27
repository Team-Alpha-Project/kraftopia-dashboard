import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { BsFillPersonFill } from 'react-icons/bs';
import {CgMenu,CgClose} from 'react-icons/cg';
import DropdownMenu from './DropdownMenu';






const Nav = () => {

const [menuIcon,setMenuIcon]=useState();

 const Nav =styled.nav`
  
    .navbar-lists {
      display: flex;
      gap: 2rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.7rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: #22c55e;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }


    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }
    //user icon css
    .navbar-user{
      
        font-size: 3.1rem;
        z-index: 9999;
      }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }
      
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
       
    .user-box{
    position: absolute;
    top: 120%;
    right: 0rem;
    background:#ece9e9f3;
    box-shadow: var(--box-shadow);
    border-radius: .5rem;
    padding: 1rem;
    text-align: center;
    width: 20rem;
    transform: scale(.0);
    transform-origin: top-right;
  }

    }
  `;
 
  return( 
  <Nav>
    <div className={menuIcon ?"navbar active":"navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link home-link"
            onClick={()=>setMenuIcon(false)}>
                Dashboard
            </NavLink>
          </li>
           <li>
            <NavLink to="/products" className="navbar-link "
            onClick={()=>setMenuIcon(false)}>
                Product
            </NavLink>
          </li>
           <li>
            <NavLink to="/orders" className="navbar-link" onClick={()=>setMenuIcon(false)}>
                Order
            </NavLink>
          </li>
         <li>
            <NavLink to="/users" className="navbar-link" 
             onClick={()=>setMenuIcon(false)}>
                User
            </NavLink>
          </li>
           <li>
            <NavLink to="/messages" className="navbar-link" 
            onClick={()=>setMenuIcon(false)}>
                Message
            </NavLink>
          </li>

         <li>
           <div className="navbar-user" >

             <DropdownMenu />
          </div>
      
            
            
            
            
     
         
         </li>
        </ul>

        
            
    {/*   two button for open and close of menu */}
    <div className='mobile-navbar-btn'>
       < CgMenu name="menu-outline" className="mobile-nav-icon"
          onClick={()=>setMenuIcon(true)}/>
        < CgClose name="close-outline" className="mobile-nav-icon close-outline"
        onClick={()=>setMenuIcon(false)}
        />

    </div>
   
    </div>
    
  </Nav>
  
  );
}

export default Nav