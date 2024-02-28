import CTA from './CTA';
import './Header.css';
import HeaderSocial from './HeaderSocials';
import img from '../../assests/img.jpg';

const Header = () => {
    return ( 
        <header>
            <div className="container header_container">
                <h2>Hello I'm</h2>
                <h1>Vishakha Mourya</h1>
                <h2 className='text-light'>FullStack Developer</h2>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>
                <div className='me'>
                    <img src={img} alt=''></img>
                </div>

                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
     );
}
 
export default Header;