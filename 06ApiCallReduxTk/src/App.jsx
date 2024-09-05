import './App.css'
import Products from './components/Products';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailedProduct from './components/DetailedProduct';

function App() {

  return (
    <Router>
  <>  
      
  <Navbar/>
      <Routes>
     
        <Route path="/" element={<Products />} />
        <Route path="/productDetail/:id" element={<DetailedProduct />} />
      </Routes>
   
  </>
  </Router>
  )
}

export default App
