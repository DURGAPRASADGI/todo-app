import React from 'react'
import {TbPageBreak} from "react-icons/tb"
const PageNotFound = () => {
  return (
    <div style={{
      width:"400px",
      height:"300px",
      backgroundColor:"#ddd",
      color:"red",
      position:"relative",
      left:"230px",
      top:"20px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
    }}> <h1>Oops! Page Not Found</h1> 
   <span style={{fontSize:"50px"}}> <TbPageBreak/></span>
    </div>
  )
}

export default PageNotFound