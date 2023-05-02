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

    if(!e.target.classList.contains('cart-add-quantity') && !e.target.classList.contains('cart-minus-quantity')){
      handleSnackbar();
    }

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
      // console.log(e);
      const isFound = isItemFound(e);
      if(isFound.found === false){
        setCartItems(
          [...cartItems, {product_name:product[0].product_name, product_image:product[0].product_image, quantity:1, product_price: product[0].product_price}]
        );
      }
      else{
          console.log(isFound.index);
          setCartItems(
            [...cartItems.slice(0, isFound.index), 
              (e.target.className !== 'cart-minus-quantity')?{product_name:product[0].product_name, 
                product_image:product[0].product_image, 
                quantity:cartItems[isFound.index].quantity+1, 
                product_price: '₹ '+(parseInt(product[0].product_price.replace('₹ ', ''))*(cartItems[isFound.index].quantity+1)),
              }:{
                product_name:product[0].product_name, 
                product_image:product[0].product_image, 
                quantity:cartItems[isFound.index].quantity-1, 
                product_price: '₹ '+(parseInt(product[0].product_price.replace('₹ ', ''))*(cartItems[isFound.index].quantity-1))
              },
              ...cartItems.slice(isFound.index + 1)
            ]
          )
        }
      }
  }

  useEffect(()=>{
    console.log(cartItems);
    const quantity = document.querySelectorAll('.quantity-value');
    // if(quantity !== null){
    //   if(quantity.textContent === '0'){
    //     setCartItems([...cartItems].filter(item => item.quantity !== 0))
    //   }
    // }
    quantity.forEach(item=>{
      if(item.textContent === '0'){
        setCartItems([...cartItems].filter(cartItem => cartItem.quantity !== 0))
      }
    })
    // setCartItems([...cartItems].filter(item => item.quantity !== 0))
  },[cartItems]);

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
          <Route path="/cart" element={<Cart onClick={handleClick} items={cartItems}/>}/>
        </Routes>
      </CartCountContext.Provider>
    </BrowserRouter>
  );
}

export default App;
