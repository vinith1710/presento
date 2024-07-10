import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/mediaquery.css';
// Components
import Header from './Components/Header';
import Home from './Components/Home';
import Carousel from './Components/Carousel';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Faq from './Components/Faq';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
//Pages
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Carousel/>
      <Aboutus/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Faq/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
