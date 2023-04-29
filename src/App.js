import Home from "./components/home";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Shop from "./components/shop";
import Cart from "./components/cart";
import SideTag from "./components/sideTag";

function App() {
  return (
    <BrowserRouter>
      <SideTag />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
