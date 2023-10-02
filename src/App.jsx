import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import NavBar from './components/NavBar';
import BirdList from './components/BirdList';


function App() {

  return (
    <Router> 
      <NavBar />
        <Routes>
          <Route path='/' element={<BirdList />} />
          <Route path='/about' element={<h1>Explicación de la Guía de Aves</h1>} />
        </Routes>
    </Router>
  )
}

export default App
