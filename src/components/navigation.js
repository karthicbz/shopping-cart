import { useState } from "react";

const NavigationOptions=({cartCount})=>{

    return(
        <ul className="navigation-options">
            <li>Home</li>
            <li>Shop</li>
            <li>Cart ({cartCount})</li>
        </ul>
    );
}

const Navigation = ()=>{

    // const [itemCount, setItemCount] = useState(0);

    function handleClick(){
        document.querySelector('.navigation-options').classList.toggle('show-navigationOptions');
    }


    return(
        <div className="navigation">
            <p className="navigation-button" onClick={handleClick}><span className="material-icons menu-icon">menu</span></p>
            <NavigationOptions cartCount={0}/>
        </div>
    )
}

export default Navigation;