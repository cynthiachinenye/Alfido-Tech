import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Components/Navbar';
import Home from './Pages/Intro';
import About from './Pages/about'
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

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
  
   
    </div>
  );
}

export default App;
