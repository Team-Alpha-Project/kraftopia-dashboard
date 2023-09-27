import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    // For example, clearing user session or redirecting to the login page
    console.log('Logging out...');
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
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section` 
.dropdown {
  position: relative;
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
  display: block;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content button {
  display: block;
  width: 90%;
  padding: 10px;
  text-align: left;
  background-color: inherit;
  border: none;
  cursor: pointer;
}

.dropdown-content button:hover {
  background-color: #ddd;
}

`;

export default DropdownMenu;
