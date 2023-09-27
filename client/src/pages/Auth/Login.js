import React,{ useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { Button } from '../../styles/Button';
import toast from "react-hot-toast";
import Layout from '../../components/Layout';
import axios from 'axios';

const Login = () => {
 
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate;

 //from function
  // const handleSubmit = async(e) =>{
  //   e.preventDefault()
  //   // console.log(name,email,password,address)
  //   // toast.success("Register Successfull")

  //   try{
  //      const res =await axios.post('/api/v1/auth/login',
  //      {email,
  //       password}
  //      );
    
  //   if(res && res.data.success){
  //     toast.success(res.data && res.data.message);
  //     navigate("/");
  //   }else{
  //     toast.error(res.data.message)
  //   }
  //   }
  //   catch(error){
  //     console.log(error)
  //     toast.error('something went wrong')
  //   }
  // }
   const handleSubmit=async(e) =>{
    e.preventDefault()
    // console.log(name,email,password,address)
    // toast.success("Register Successfull")

    try{
       const res =await axios.post('/api/v1/auth/login',
       {email,password}
       );
    
     if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
    }
    else{
      toast.error(res.data.message)
    }
    }catch(error){
      console.log(error)
      toast.error('something went wrong')
    }
  }
  return (
     <Layout title="Register-kraftopia">
    <Wrapper>
 <div className ="form-container">
        <form onSubmit={handleSubmit} method="post">
            <h1>Login Now</h1>
            <div className="input-field">
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your mail" required/>
            </div>
            <div class="input-field">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter your password" required/>
            </div>
            {/* <!-- <a href="admin_header.html"> --> */}
           <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
            {/* <!-- </a> --> */}
            <p>do not have an account ?
                <NavLink to="/register">register now</NavLink>
                </p>
                
        </form>
    </div>
    </Wrapper>
    </Layout>
  )
}
const Wrapper= styled.section`
.form-container{
    background: ;
    width: 100%;
    min-height: 100vh;
    padding: 11rem 0;
    position: relative;
   
    
}

.form-container::before{

    position:absolute;
    bottom: 0;
    right: 0;
    top:-5%;
    left:-10px;
    width: 255px;
    height: 650px;
    background-size: 256px;
    background-repeat: no-repeat;
    z-index: 100;
}

.form-container::after{ 
    position:absolute;
    bottom: 0;
    right: 0;
    /* top:-5%; */
    left:-10px;
    width: 255px;
    height: 220px;
    background-size: 255px;
    background-repeat: no-repeat;
    z-index: 100;

}

.form-container h1{
    /* font-size:2rem;
    padding: 2rem 15rem; */
    text-transform: uppercase;
    margin: 2rem 0;
    font-size: 2.3rem;
    text-align: center;
}

.form-container form{
    width: 60%;
    margin: 1rem auto;
    background: rgba(234, 234, 234, 0.968);
    box-shadow: var(--box-shadow);
    padding: 6rem;
    position: relative;
    border-radius: 4px;
}

.form-container form input{
    outline:none;
    border: 1px solid #63626244;
    background: transparent;
    width: 100%;
    padding: 1.2rem 1.3rem;
    border-radius: 10px;
    margin: 1rem;
}


 
  .form-container form button{
    width: 200px;
    padding:1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin :1rem;
    background-color:#22c55e;
    display:flex;
    justify-content: center;
    align-items: center;

}

.form-container form button:hover{
    background: #48c576;
}


.form-container form label{
    text-transform: uppercase;
    width: 100%;

}


`;


export default Login