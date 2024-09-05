import { useState, useEffect } from "react";
import axios from "axios";
import "./../App.css";

function MainBody() {
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);

  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProduct(res.data.products))      
      .catch((err) => console.log("error while fetch", err));
  }, [input]);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products")
  //     .then((res) => {
  //       if (!input)
  //         return
  //       const filteredData=res.data.products.filter((data)=>data.title.toLowerCase().includes("ey"))
        
  //       // const filteredData= res.data.products.filter((data)=>{
  //       // return res.data.title.includes(input)
  //     // })
  //       setProduct(filteredData)
  //     })      
  //     .catch((err) => console.log("error while fetch", err));
  // }, [input]); 


const data=products;
  
// console.log(products);

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type to serach .."
        name="search"
        value={input}
        onChange={(e) => {
          const inputVal=e.target.value.toLocaleLowerCase()
          
          setInput(inputVal);
          console.log("setval", input);
        //   const filteredData=data.filter((data)=>{
        //     // console.log("inside filter",data.title.toLowerCase.includes(input));
            
        //       return data.title.includes(input)
        //   });
        //  console.log(products);150 660 2200 30200
        //   data=products; 800 1450 2800 190000
        }
      }
      />
        
        
      {/* {console.log("at main", data)} */}
      <div className="grid">
      {/* {data.slice(page * 6 - 6, page * 6).filter((product)=>{ */}
        {data.filter((product)=>{
          return input.toLocaleLowerCase()=== '' ? product : product.title.toLocaleLowerCase().includes(input)
        }).map((product) => {
          const { id, brand, title, category, price, images } = product;
  
          return (
            <div className="card">
              <img
                className="IMG"
                src={images}
                height="200px"
                width="200px"
                alt=""
              />
              <h2>
                {brand} ({category})
              </h2>
              <p className="price">{title}</p>
              <p>{price}</p>
              <p>
                <button>Add to Cart</button>
              </p>
              <div></div>
            </div>
          );
        })}
        {data.length > 0 && (
          <div className="pagination">
            <span onClick={() => selectPageHandler(page - 1)}>⬅️</span>
            {[...Array(data.length / 6)].map((_, i) => {
              return (
                <span onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
              );
            })}
            <span onClick={() => selectPageHandler(page + 1)}>➡️</span>
          </div>
        )}
      </div>
    </>
  );
}

export default MainBody;
