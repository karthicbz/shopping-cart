import Home from "./components/home";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Shop from "./components/shop";
import Cart from "./components/cart";
import SideTag from "./components/sideTag";
import { createContext, useState } from "react";
import ProductData from './datas/data';

export const CartCountContext = createContext(0);

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleClick(e){
    // setValue((prevValue)=>prevValue+1);
    // console.log(document.querySelector('.products'));
    const product = ProductData.data.filter(product=>{
      if(product.product_name === e.target.dataset.prod){
        return product;
      }
    });

    setCartItems(
      [...cartItems, {product_name:product[0].product_name, product_image:product[0].product_image, quantity:1, product_price: product[0].product_price}]
      );
  }

  return (
    <BrowserRouter>
      <CartCountContext.Provider value={cartItems}>
        <SideTag />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop onClick={handleClick}/>}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </CartCountContext.Provider>
    </BrowserRouter>
  );
}

export default App;
