import './App.css';
import NavBar from './components/Navbar';
import BirdList from './components/BirdList'
import logo from './assets/logo.png';


function App() {

  return (
    <div className='app'>
      <NavBar />
      <BirdList />
    </div>
  )
}

export default App
