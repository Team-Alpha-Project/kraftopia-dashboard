import axios  from "axios";
import { createContext,useContext,useEffect } from "react";

 const AppContext = createContext();
 
 const API=" ";   //write api link here

 const AppProvider = ({ children})=>{

    const getProducts  = async(url)=>{
       const res = await axios.get(url);
       console.log("~file:productcontex.js ~ line 10 ~getProducts ~res ",res)
       //const products= await res.data;
    }

     useEffect(()=>
     {
       getProducts(API);
     },[]);

    return(<AppContext.Provider value={{myName:"dharti"}}>
        {children} 
    </AppContext.Provider>);
 };

//custom hooks

const useProductContext=()=>{
    return useContext(AppContext);
}

 export{AppProvider,AppContext,useProductContext};