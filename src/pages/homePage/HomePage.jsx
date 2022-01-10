import React, { useState } from 'react'
import {FaShoppingCart, FaUserAstronaut} from 'react-icons/fa'
import './homePage.css'

const HomePage = () => {
 return (
  <div className='container'>
   <Navbar/>
    <h1>Home</h1>
  </div>
 )
}

const Navbar = ()=>{
 const [openNav, setOpenNav] = useState(false)
 return (
  <nav  id="nav">
      <span>Logo</span>
      <ul className={openNav ? 'active': null}>
       
         <button className="icon" id="toggle" onClick={()=> setOpenNav(!openNav)}>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
      <div>
        <li><a href="">
         <FaShoppingCart size={18} style={{
          color:'#64ffda'
         }}/>
         </a></li>
        <li><a href="">
         <FaUserAstronaut
         size={18}
         style={{
          color:'#64ffda'
         }}
         />
         </a></li>
        {/* <li><a href="">light</a></li> */}
       </div>
      </ul>
    </nav>
    
 )  
 
 
}



export default HomePage
