import React from 'react'
import { Button } from '../styles/Button'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
  <Wrapper>
    <div className='container'>
    <div>  
    <h2>404</h2>
    <h3>UH OH! You're lost.</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing 
      elit. Dignissimos, dicta doloremque atque commodi 
      quisquam consequuntur maxime expedita labore eum!</p>
      <NavLink to="/">
      <Button>go back to Home page</Button>
      </NavLink>
      </div>
     </div>
     </Wrapper>
  )
}

const Wrapper = styled.section`
.container{
  padding:15rem 0;
  text-align:center;
}
h2{
  font-size:10rem;
}

h3{
  font-size:4.2rem;
}

p{
  margin:2rem 0;
}
`;

export default ErrorPage