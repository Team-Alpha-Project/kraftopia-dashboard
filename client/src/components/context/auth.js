import {useState,useContext,createContext}from 'react'
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider =({Children})=>{
const [auth,setAuth]=useState({
    user:null,
    token:""
});

//default axios
axios.defaults.headers.common ['Authorization']= auth?.token;




return 
(
    <AuthContext.Provider value={[auth,setAuth]}>
        {Children}
    </AuthContext.Provider>
)
}

//custom hook 
const useAuth =()=>useContext(AuthContext)

export {useAuth,AuthProvider};