import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocial = () => {
    return (  
        <div className="header_socials">
            <a href="www.linkedin.com/in/vishakha-mourya-b9a9a1281" ><BsLinkedin className="icon"></BsLinkedin></a>
            <a href="https://github.com/Vishu-2410" ><FaGithub className="icon"></FaGithub></a>
        </div>
    );
}
 
export default HeaderSocial;
