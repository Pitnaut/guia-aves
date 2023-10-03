import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import BirdList from './components/BirdList';
import BirdPage from './pages/BirdPage';
import Home from './pages/Home';


function App() {

  return (
    <Router> 
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/birds' element={<BirdList />} />
          <Route path='/birds/:id' element={<BirdPage />} />
          <Route path='/about' element={<h1>Explicación de la Guía de Aves</h1>} />
        </Routes>
    </Router>
  )
}

export default App
