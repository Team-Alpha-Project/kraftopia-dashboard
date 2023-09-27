import React from 'react'
import Header from './Header';
import {Helmet} from "react-helmet"

import 'react-toastify/dist/ReactToastify.css';
import {Toaster} from 'react-hot-toast'


const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content={author}/>
            <title>title</title>

        </Helmet>
    <Header/>
    <main style={{}}>
         <Toaster/>{children}</main>
   
    </div>
  )
}

Layout.defaultProps={
    title:'Kraftopia-dashboard',
    description:'mern stack project',
    keywords:'mern,react,node,mongodb',
    author:"team alpha",
}
export default Layout