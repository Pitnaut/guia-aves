import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import BirdList from './components/BirdList';
import BirdDetail from './pages/BirdDetail';
import BirdOrder from './pages/BirdOrder';
import BirdAmenaza from './pages/BirdAmenaza';
import BirdEstacion from './pages/BirdEstacion';
import BirdAvistadas from './pages/BirdAvistadas';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage'
import Footer from './components/Footer';
import Guide from './pages/Guide';



function App() {

  return (
    <Router> 
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/birds' element={<BirdList />} />
          <Route path='/birds/:nombre' element={<BirdDetail />} />
          <Route path='/birds/orden/:orden' element={<BirdOrder />} />
          <Route path='/birds/amenaza/:amenaza' element={<BirdAmenaza />} />
          <Route path='/birds/estacion/:estacion' element={<BirdEstacion />} />
          <Route path='birds/avistadas' element={<BirdAvistadas />}  />
          <Route path='/guide' element={<Guide />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
