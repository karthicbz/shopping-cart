
const NavigationOptions=()=>{
    return(
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
        </ul>
    );
}

const Navigation = ()=>{
    return(
        <div className="navigation">
            <button>Click</button>
            <NavigationOptions />
        </div>
    )
}

export default Navigation;