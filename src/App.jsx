import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Root from './components/Root';


function App() {

  return (
    <Router> 
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/about' element={<h1>Guia de aves de la Comunidad de Madrid</h1>} />
        </Routes>
    </Router>
  )
}

export default App
