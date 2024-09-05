import { useState ,useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Products from './components/products';
import Cart from './components/Cart';

function App() {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProduct(res.data.products))      
      .catch((err) => console.log("error while fetch", err));
  }, []);

    // console.log("at app",products);
    

  return (
  <>
<h1>Shooping kart </h1>
<Cart/>
<div className='grid'>
  {

    products.map((product)=>{
      
     return <Products {...product}/>
    })
  }

</div>
  </>
  )
}

export default App
