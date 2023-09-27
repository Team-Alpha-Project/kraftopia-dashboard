import React,{useContext} from 'react'
import Ban from '../components/Ban';
import Addproduct from '../components/Addproduct';
import { AppContext } from '../components/context/productcontext';


const Products = () => {

const {myName}= useContext(AppContext);

 const data={
  name:"Admin Products",
 };

  return (
  <>
  {myName}
  <Ban myData={data} />
   <Addproduct />
  </>
  );
}

export default Products;