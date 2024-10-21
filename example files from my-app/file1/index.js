import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"; 
import Header from "./Header";
import Footer from "./Footer";
import MainCont from "../MainCont";



function Myfav() 
{
  return(
    <>
    <Header/>
    <MainCont/>
    <Footer/>
    </>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<Myfav/>)

