import './Footer.css'
import { BsLinkedin } from "react-icons/bs";
import {FaInstagram} from 'react-icons/fa';
import {IoLogoTwitter} from 'react-icons/io';
const Footer = () => {
    return ( 
        <footer>
             <a href="#" className="footer_logo">Portfolio</a>

             <ul className="permalinks">
             <li><a href="#">Home</a></li>
             <li><a href="#about">About</a></li>
             <li><a href="#experiance">Experiance</a></li>
             <li><a href="#services">Services</a></li>
             <li><a href="#portfolio">Portfolio</a></li>
             <li><a href="#contact">Contact</a></li>
             </ul>

             <div className="footer_socials">
                <a  href="www.linkedin.com/in/vishakha-mourya-b9a9a1281">< BsLinkedin/></a>
                <a  href="https://instagram.com"><FaInstagram/></a>
                <a  href="https://twitter.com"><IoLogoTwitter/></a>
             </div>

             <div className="footer_copyright">
               <small>&copy;2024 Designed by Vishakha Mourya</small>
             </div>
        </footer>
     );
}
 
export default Footer;