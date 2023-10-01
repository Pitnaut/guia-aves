import './App.css';
import NavBar from './components/NavBar';
import BirdList from './components/BirdList';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className='app'>
       <NavBar />
        <BirdList />
      </div>
    </Router>
  )
}

export default App
