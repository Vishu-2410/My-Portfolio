
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experiance from './components/Experiance';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/services';

function App() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Experiance></Experiance>
    <Services></Services>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
