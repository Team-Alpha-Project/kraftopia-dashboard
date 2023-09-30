import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
import { useAuth } from './context/auth';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [auth,setAuth]=useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth, user:null, token:''
    })
    localStorage.removeItem('auth')
    toast.success("Logout Succefully");
  };

  return (
     
    <Wrapper>

    <div className="dropdown">
      {/* <button className="dropdown-button" onClick={toggleDropdown}>
        Menu
      </button> */}

           <BsFillPersonFill className="user" onClick={toggleDropdown} />
           
      
      {isOpen && (
        <div className="dropdown-content">
          <NavLink onClick={handleLogout} to="/login" className='button' activeClassName="active">Logout</NavLink>
        </div>
      )}
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section` 
.dropdown {
  position:relative;
  display: inline-block;
  cursor: pointer;
}

.dropdown-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.dropdown-content {
  display:block ;
  position:absolute;
  background-color: #f1f1f1;
  min-width: 16px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right:0.1rem;

}

  .button {
    display: block;
    width: 90%;
    padding: 10px;
    text-align: left;
    background-color: inherit;
    border: none;
    cursor: pointer;
  }

  .button:hover {
    background-color: #ddd;
  }

  


// .dropdown-content NavLink .button {
//   display: block;
//   width: 90%;
//   padding: 10px;
//   text-align: left;
//   background-color: inherit;
//   border: none;
//   cursor: pointer;
// }

// .dropdown-content  .button:hover {
//   background-color: #ddd;
// }

`;

export default DropdownMenu;
