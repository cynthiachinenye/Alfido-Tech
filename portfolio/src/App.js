import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Components/Navbar';
import Home from './Pages/Intro';
import About from './Pages/about'
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Hero/>
    <main>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
    </main>
   <Footer/>
   
    </div>
  );
}

export default App;
