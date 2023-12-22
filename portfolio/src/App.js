import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Navbar';
import Home from './Pages/Intro';
import About from './Pages/about'
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Hero />
        <Home />
        <Routes>
      
         <Route path='home' element={ <Home />}/>
         <Route path='about' element={ <About />}/>
         <Route path='skill' element={ <Skills />}/>
         <Route path='contact' element={ <Contact />}/>


        
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
