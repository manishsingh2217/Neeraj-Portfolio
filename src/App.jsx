import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contect from "./components/Contect";
import {Toaster} from "react-hot-toast"
export default function App() {
  return (
    
    <>
   <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experiance/>
    <Contect/>
    <Footer/> 
   </div>
   <Toaster />
    </>
    
  )
}