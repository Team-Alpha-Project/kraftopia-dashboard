import {useState,useContext,create, Children}from 'react'
import { createContext } from 'vm'

const AuthContext = createContext()

const AuthProvider =({Children})=>{
const [auth,setAuth]=useState({
    user:null,
    token:""
})
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