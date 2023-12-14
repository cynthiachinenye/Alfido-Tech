import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    <Hero/>
    <main>
    <Home/>
    </main>
  
   
    </div>
  );
}

export default App;
