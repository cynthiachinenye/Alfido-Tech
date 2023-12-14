import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/about'

function App() {
  return (
    <div className="App">
    <Hero/>
    <main>
    <Home/>
    <About/>
    </main>
  
   
    </div>
  );
}

export default App;
