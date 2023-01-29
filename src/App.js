import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Pacote importado para manipulação das rotas
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Aulas from './pages/Aulas';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/empresa' element={<Empresa/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
        <Route path='/aulas' element={<Aulas/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
