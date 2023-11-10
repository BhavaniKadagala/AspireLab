{/*import logo from './logo.svg';*/}
import './App.css';
import 'C:/Aspire_infoLabs/start-bootstrap/src/css/styles.css'

//sub components
import Nav from './Components/Nav.js'
import Services from './Components/Services.js';
import Portfolio from './Components/Portfolio.js';
import About from './Components/About.js';
import Team from './Components/Team.js';
import Clients from './Components/Clients.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import PortfolioModel1 from './Components/PortfolioModel1'
import PortfolioModel2 from './Components/PortfolioModel2';
import PortfolioModel3 from './Components/PortfolioModel3';
import PortfolioModel4 from './Components/PortfolioModel4';
import PortfolioModel5 from './Components/PortfolioModel5';
import PortfolioModel6 from './Components/PortfolioModel6';
import Masthead from './Components/Masthead';

function App() {
  return (
    <>
  < Nav />
  <Masthead />
  {/* Services*/}
  <Services/>
  {/* Portfolio Grid*/}
  <Portfolio/>
  {/* About*/}
  <About/>
  {/* Team*/}
  <Team/>
 {/* Clients*/}
  <Clients/>
   {/* Contact*/}
  <Contact/>
  {/* Footer*/}
  <Footer/>
  {/* Portfolio Modals*/}
  {/* Portfolio item 1 modal popup*/}
  <PortfolioModel1/>
  {/* Portfolio item 2 modal popup*/}
  <PortfolioModel2/>
  {/* Portfolio item 3 modal popup*/}
  <PortfolioModel3 />
  {/* Portfolio item 4 modal popup*/}
  <PortfolioModel4/>
  {/* Portfolio item 5 modal popup*/}
  <PortfolioModel5/>
  {/* Portfolio item 6 modal popup*/}
  <PortfolioModel6/>
</>
  );
}

export default App;
