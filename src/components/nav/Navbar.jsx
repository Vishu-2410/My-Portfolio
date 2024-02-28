import './Navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
    const [activeNav,setActiveNav]=useState("#");
    return ( 
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==="#"?'active':""}><AiOutlineHome></AiOutlineHome></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==="#about"?'active':""}><AiOutlineUser></AiOutlineUser></a>
            <a href="#experiance" onClick={()=>setActiveNav('#experiance')} className={activeNav==="#experiance"?'active':""}><BiBook></BiBook></a>
            <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==="#services"?'active':""}><RiCustomerService2Line></RiCustomerService2Line></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==="#contact"?'active':""}><FiMessageSquare></FiMessageSquare></a>
        </nav>
     );
}
 
export default Nav;