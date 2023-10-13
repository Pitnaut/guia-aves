import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BirdList from './components/BirdList';
import BirdPage from './pages/BirdPage';
import BirdOrder from './pages/BirdOrder';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage'


function App() {

  return (
    <Router> 
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/birds' element={<BirdList />} />
          <Route path='/birds/:id' element={<BirdPage />} />
          <Route path='/birds/orden/:orden' element={<BirdOrder />} />
          <Route path='/about' element={<h1>Explicación de la Guía de Aves</h1>} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
    </Router>
  )
}

export default App
