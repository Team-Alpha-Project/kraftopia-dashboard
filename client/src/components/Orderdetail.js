import React from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';


const Orderdetail = () => {
  return (
    <Wrapper>
         
        <div className="order-container">
            <h1 className="title">total order placed</h1>
            <div className="box-container">
                
               <div className="box">
                <p>user name: <span></span> </p>
                <p>user id: <span> </span> </p>
                <p>placed on: <span> </span> </p>
                <p>number: <span> </span> </p>
                <p>email: <span> </span> </p>
                <p>total price: <span> </span> </p>
                <p>method: <span> </span> </p>
                <p>address: <span> </span> </p>
                <p>total product: <span> </span> </p>
                <form method="post" action="">
                    <input type="hidden" name="order_id" value=" " id=""/>
                    <select name="update_payment" id="">
                        <option disabled selected ></option>
                        <option value="Pending">Pending</option>
                        <option value="complete">complete</option>
                    </select>
                </form>
               
                <Button>Delete</Button>
               
            </div>

            </div>
            </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`


.order-container::before{
    content: '';
    position:absolute;
    top:-5%;
    left:-10px;
    width: 255px;
    height: 650px;
    background-size: 255px;
    background-repeat: no-repeat;
    z-index: 999;

}
.order-container .box {
    margin: 0 4rem;
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;
    padding: 0.5rem;
    
}
.order-container .box-container{
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
}
.box-container .box {
    line-height: 2;

}
.order-container::before{
    background-image:url('') ;
    top: -100px;
  
}
.order-container{
    position: relative;
   
   
}
.order-container .title{
  text-transform: uppercase;
  padding-top: 20rem; 
    text-align: center;
    font-size:3rem;
}



`;

export default Orderdetail