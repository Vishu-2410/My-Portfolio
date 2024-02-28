import './Portfolio.css'
import img from '../assests/destop1.jpg';
import img2 from '../assests/expenseTracker.jpg';
import img1 from '../assests/todolist.jpg';
import img3 from '../assests/weatherapp.jpg';
import img4 from '../assests/tic-tac-toe1.jpg';
import img5 from '../assests/councelling.webp';

const Portfolio = () => {
    return (  
        <section>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio_container'>
                <article className="portfolio_item">
                    <div className='portfolio_item-img'>
                        <img src={img2} alt=''></img>
                    </div>
                    <h3>Expense Tracker App</h3>
                    <div className='cta'>
                    <a href='' className='btn' target='_blank'>GitHub</a>
                    <a href='' className='btn btn-primary' target='_blank'>Live demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className='portfolio_item-img'>
                    <img src={img1} alt=''></img>
                    </div>
                    <h3>TodoList App</h3>
                    <div className='cta'>
                    <a href='' className='btn' target='_blank'>GitHub</a>
                    <a href='' className='btn btn-primary' target='_blank'>Live demo</a>
                    </div>
                </article>
                
                <article className="portfolio_item">
                    <div className='portfolio_item-img'>
                    <img src={img3} alt=''></img>
                    </div>
                    <h3>Weather App</h3>
                    <div className='cta'>
                    <a href='' className='btn' target='_blank'>GitHub</a>
                    <a href='' className='btn btn-primary' target='_blank'>Live demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className='portfolio_item-img'>
                    <img src={img4} alt=''></img>
                    </div>
                    <h3>Tic-Tak-Toe Game</h3>
                    <div className='cta'>
                    <a href='' className='btn' target='_blank'>GitHub</a>
                    <a href='' className='btn btn-primary' target='_blank'>Live demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className='portfolio_item-img'>
                    <img src={img} alt=''></img>
                    </div>
                    <h3>Education Website</h3>
                    <div className='cta'>
                    <a href='' className='btn' target='_blank'>GitHub</a>
                    <a href='' className='btn btn-primary' target='_blank'>Live demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className='portfolio_item-img'>
                    <img src={img5} alt=''></img>
                    </div>
                    <h3>Counselling Website for particular institute</h3>
                    <div className='cta'>
                    <a href='' className='btn' target='_blank'>GitHub</a>
                    <a href='' className='btn btn-primary' target='_blank'>Live demo</a>
                    </div>
                </article>
                
            </div>
        </section>
    );
}
 
export default Portfolio;