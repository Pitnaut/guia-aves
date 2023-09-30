import './App.css';
import NavBar from './components/Navbar';
import BirdList from './components/BirdList'
import logo from './assets/logo.png';


function App() {

  return (
    <div className='app'>
      <NavBar />
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt='Logotipo de guia de aves' />
        </div>
      </div>
      <BirdList />
    </div>
  )
}

export default App
