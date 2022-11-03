import logo from './logo.svg';
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import Button from './Button';
import Feature from './Feature';
import About from './About';
import Services from './Services';
import SecureCards from './SecureCards';
import ProductList from './ProductList';
import Video from './Video';
import History from './History';
import Subscribe from './Subscribe';
import SecureFeature from './SecureFeature';
import Team from './Team';
// import details from "./details";
import ImgSlider from './ImgSlider'
import details from './ImgSlider';
import Follow from './Follow';
import ContactCard from './ContactCard';
import Contact from './Contact';
import { AddressMap } from './AddressMap';
import Footer from './Footer';


function App() {
  var para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo eleifend tortor, quis sollicitudin mauris ipsum a elit. Duis eget tincidunt dui, non auctor mauris."

  return (
  <div className="App">
      <Header/>
      <Banner title="CCTV Cameras" paragraph= {para}/>
     <Feature/>
      <About abouttext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo eleifend tortor, quis sollicitudin mauris ipsum a elit."/>
      <Services/>
      <SecureCards />
      <ProductList/>
      <Video/>
      <History/>
      <Subscribe para="Stay on top of our most"/>
      <SecureFeature featuresdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod temporeum dicant partem scripserit."/>
      <Team/>
      {/* <Slider/> */}
      <ImgSlider />
      <Follow followPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet odio. Aenean eget lorem pellentesque, imperdiet ex convallis, iaculis justo."/>
      <Contact/>
      <AddressMap/>
      <Footer/>
     </div>
  );
}

export default App;
