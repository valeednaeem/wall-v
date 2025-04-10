import './App.css'
import Header from './containers/header/Header'
import Services from './containers/services/Services'
import Brand from './components/brand/Brand'
import CTA from './components/cta/CTA'
import Feature from './containers/feature/Feature'
import Footer from './containers/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Skills from './containers/skills/Skills'
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
          <Navbar />
      </div>
      <Header />

      <Skills />
      <Services />
      <Brand />
      <CTA />
      <Feature />
      <Footer />

    </div>
  );
}

export default App;
