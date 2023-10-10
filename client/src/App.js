import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Product from "./pages/Products.js";
import Orders from "./pages/Orders.js";
import Users from "./pages/Users.js";
import Messages from "./pages/Messages.js";
import ErrorPage from "./pages/ErrorPage.js";
import { GlobalStyle } from "./GlobalStyle.js";
import { ThemeProvider } from 'styled-components';
import Header from "./components/Header";
import  Register  from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Homee from "./pages/Homee.js"

// import UserDashboard from "./pages/User/UserDashboard.js";
// import PrivateRoute from "./components/Routes/private.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
// import AdminRoute from "./components/Routes/AdminRoute.js";
// import AdminDashboard from "./pages/Admin/AdminDashboard.js";


/* import logo from './logo.svg';
import './App.css'; http://localhost:3000/register */

const App =() => {

  const theme = {
    colors: {
      first: "#22c55e",
      firstLight: "#A9FFC9",
      title: "black",
      bodyColor: "#fff",
      black: "#1E1E1E",
      blackLight: "hsl(0, 0%, 40%)",
      white: "hsl(0, 0%, 95%)",
      text: "hsl(0, 0%, 35%)",
      textLight: "hsl(0, 0%, 64%)",
      container: "hsl(0, 0%, 90%)",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    font: {
      fontFamily: "'Oswald', sans-serif",
      h1: "1.75rem",
      h2: "1.25rem",
      h3: "1.125rem",
      normal: ".938rem",
      small: ".813rem",
      smaller: ".75rem",
      biggest: "2.5rem",
    },

    fontWeight: {
      Regular: "400",
      Medium: "500",
      SemiBold: "600",
      Bold: "700",
    },

    zIndex: {
      zTooltip: "10",
      zFixed: "100",
    },

    shadow: {
      boxShadow: "0 2rem 3rem rgba(0, 0, 0, 0.1)",
    },

    media: {
      mobile: "790px",
      // mobile: "390px",
      tab: "998px",
    },
  };
  //  const renderHeader = () => {
  //   // Get the current path from the window location
  //   const currentPath =window.location.pathname;

  //   // Check if the current path is '/register' or '/login'
  //   if (currentPath === '/register' || currentPath === '/login') {
  //     return null; // Don't render the Header for these routes
  //   }

  //   return <Header />;
  // };
 
  return(  
  <ThemeProvider theme={theme}> 
  <Router>
        
    <GlobalStyle />
  <Header/>
         <Routes>
           <Route path="/"element={<Homee/>}/>
           {/* <Route path="/dashboard" element={<PrivateRoute/>}>
             <Route path=""element={<UserDashboard/>} />
           </Route> */}
           
           {/* this admin dashboard will be added later */}
           
           {/* <Route path="/dashboard" element={<AdminRoute/>}>
           <Route path ="/admin" element={<AdminDashboard/>} />
          </Route> */}
           {/* <Route path="/dashboard" element={<UserDashboard/>}/> */}
         <Route path="/register"element={<Register/>}/> 
         <Route path="/forgot-password"element={<ForgotPassword/>}/> 
         <Route path="/login"element={<Login/>}/> 
         <Route path="/products"element={<Product/>}/>
         <Route path="/orders"element={<Orders/>}/>
         <Route path="/Users"element={<Users/>}/>
         <Route path="/messages"element={<Messages/>}/>
         <Route path="*" element={<ErrorPage/>}/>
         </Routes>
  </Router>
  </ThemeProvider>

  );    
  }
export default App;
