
import './App.css';
import NavTab from './Components/NavTab';
import Footer from './Components/Footer';
import Home from './Subcomponents/Home';
import Products from './Subcomponents/Products';
import About from './Subcomponents/About';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <NavTab />
    <Routes>
          <Route path="/Subcomponents/Home" element={<Home />} />
          <Route path="/Subcomponents/About" element={<About />} />
          <Route path="/Subcomponents/Products" element={<Products />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
