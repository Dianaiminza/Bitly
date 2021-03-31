
import './App.css';
import Navbar from './components/Navbar';
import{Switch,Route,}from 'react-router-dom';
import About from './pages/about';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <About/>
    <Switch>
   {/* <Route path='/' exact component={About} /> */}
        
          </Switch>
        
          
    </div>
  );
}

export default App;
