import Navbar from './componentes/Navbar'
import Banner from "./componentes/Banner";
import Home from './componentes/secciones/Home';
import Cervezas from './componentes/secciones/Cervezas';
import About from './componentes/secciones/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cervezas" element={<Cervezas />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}


export default App
