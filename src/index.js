// var $=require("jquery");

// //$(selector).html("msg");
// $("#target").html("hello uday!!!!!");

import React from 'react'
import Header from './public/Header';
import Footer from './public/Footer';
import Main from './public/Main';
import { render } from 'react-dom'

import './style.scss'
//creating small component
// const Greeting=()=><h1>Hello from REACT123</h1>

const Index=()=>{
    return (
        <body>
           <Header/>
           <Main/>
           <Footer/>
        </body>
    )
}

render(
    //mounting our component
    <Index />,//componet add to dom
    document.getElementById('target')

)