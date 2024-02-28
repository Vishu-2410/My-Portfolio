import './About.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import img from '../assests/img1.jpeg'
const About = () => {
    return ( 
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={img} alt=''></img>
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'></FaAward>
                            <h5>Experience</h5>
                            <small >1.5+ years of Experiance</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'></FiUsers>
                            <h5>Connections</h5>
                            <small >10+ connectios</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'></VscFolderLibrary>
                            <h5>Projects</h5>
                            <small >10+ Projects</small>
                        </article>
                    </div>

                    <p>
                
As a Full Stack Developer, I have a diverse skill set that enables me to design, develop, and deploy end-to-end
web applications. I am proficient in both frontend and backend technologies, including HTML, CSS, Javascript,
ReactJs and SQL. With a passion for problem-solving and an eye for detail, I am dedicated to delivering highquality, 
user-centric solutions that meet the needs of clients and users alike.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
     );
}
 
export default About;