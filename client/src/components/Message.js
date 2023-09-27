import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';

const Message = () => {
  return (
   <Wrapper>
        <div className="message-container">
            <h1 className="title">unread message</h1>
            <div className="box-container">
             <div className="box">
                <p>user_id: <span></span> </p>
                <p>name: <span></span> </p>
                <p>email: <span> </span> </p>
                <NavLink>
                    <Button>
                        delete
                    </Button>
                </NavLink>
            </div>
 

        </div>
  </div>
             
   </Wrapper>
  )
}
const Wrapper =styled.section`
.message-container::before
{
    content: '';
    position:absolute;
    background: url('');
    top:-5%;
    left:-10px;
    width: 255px;
    height: 650px;
    background-size: 255px;
    background-repeat: no-repeat;
    z-index: 100;
}

.message-container .title{
  text-transform: uppercase;
  padding-top: 20rem; 
    text-align: center;
    font-size:3rem;
}

.message-container .box-container{
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
}
.message-container::before{
    background-image:url('') ;
    top: -100px;
}
.message-container .box{
  margin: 0 1rem;
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;
    padding: 0.5rem;
    
    
}
`;
export default Message