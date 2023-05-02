import { useContext, useState } from "react";
import { CartCountContext } from "../App";
import { Link } from "react-router-dom";

const NavigationOptions=({cartCount})=>{

    return(
        <ul className="navigation-options">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/shop"}>Shop</Link></li>
            <li><Link to={"/cart"}>Cart ({cartCount})</Link></li>
        </ul>
    );
}

const Navigation = ()=>{

    // const [itemCount, setItemCount] = useState(0);
    const cartItemCount = useContext(CartCountContext);

    function handleClick(){
        document.querySelector('.navigation-options').classList.toggle('show-navigationOptions');
    }


    return(
        <div className="navigation">
            <p className="navigation-button" onClick={handleClick}><span className="material-icons menu-icon">menu</span></p>
            <NavigationOptions cartCount={cartItemCount}/>
        </div>
    )
}

export default Navigation;