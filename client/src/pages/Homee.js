import React from 'react';
/* import styled from 'styled-components'; */
import Ban from '../components/Ban';
import Dataa from '../components/Dataa';
import { useAuth } from '../components/context/auth';


const Homee = () => {
 const [auth,setAuth]=useAuth()
 const data={
  name:"User Dashboard"
 }
  return(
   
     <> 
    <Ban myData={data} />;
    <Dataa/>
    <pre>{JSON.stringify(auth,null,4)} </pre>
    </>
    
  );
};




export default Homee; 