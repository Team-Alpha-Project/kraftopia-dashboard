import React from 'react';
/* import styled from 'styled-components'; */
import Ban from '../components/Ban';
import Dataa from '../components/Dataa';
//import { useAuth } from '../components/context/auth';


const Home = () => {
 // const [auth,setAuth]=useAuth
 const data={
  name:"Admin dashboard"
 }
  return(
   
    <> <Ban myData={data} />;
    <Dataa/>
    
    </>
   
  );
};




export default Home; 