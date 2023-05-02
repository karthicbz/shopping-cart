import Home from "./components/home";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Shop from "./components/shop";
import Cart from "./components/cart";
import SideTag from "./components/sideTag";
import { createContext, useState, useEffect } from "react";
import ProductData from './datas/data';
import handleSnackbar from "./scripts/handleSnackbar";

export const CartCountContext = createContext(null);

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleClick(e){

    handleSnackbar();
    
    const product = ProductData.data.filter(product=>{
      if(product.product_name === e.target.dataset.prod){
        return product;
      }
    });

    if(cartItems.length === 0){
      setCartItems(
        [...cartItems, {product_name:product[0].product_name, product_image:product[0].product_image, quantity:1, product_price: product[0].product_price}]
      );
    }else{
      // console.log(isItemFound(e));
      const isFound = isItemFound(e);
      if(isFound.found === false){
        setCartItems(
          [...cartItems, {product_name:product[0].product_name, product_image:product[0].product_image, quantity:1, product_price: product[0].product_price}]
        );
      }else{
          cartItems.map(item=>{
            if(item.product_name === e.target.dataset.prod){
              item.quantity += 1;
              item.product_price = '₹ '+parseInt(product[0].product_price.replace('₹ ', '').replace(',',''))*item.quantity;
            }
          })
      }
    }

  }

  useEffect(()=>{
    console.log(cartItems);
  }, [cartItems]);

  const isItemFound = (e)=>{
    const status = {found:false, index:0};
    cartItems.forEach((item, i=0)=>{
      if(item.product_name === e.target.dataset.prod){
        status.found = true;
        status.index = i;
      }else{
        i += 1;
      }
    })
    return status;
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
