import Home from "./components/home";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Shop from "./components/shop";
import Cart from "./components/cart";
import SideTag from "./components/sideTag";
import { createContext, useContext, useState } from "react";

export const CartCountContext = createContext(0);

function App() {
  const [value, setValue] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function handleClick(){
    setValue((prevValue)=>prevValue+1);
    console.log(document.querySelector('.products'))
  }

  return (
    <BrowserRouter>
      <CartCountContext.Provider value={value}>
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
