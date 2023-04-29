
const NavigationOptions=()=>{
    return(
        <ul className="navigation-options">
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
        </ul>
    );
}

const Navigation = ()=>{

    function handleClick(){
        document.querySelector('.navigation-options').classList.toggle('show-navigationOptions');
    }


    return(
        <div className="navigation">
            <p className="navigation-button" onClick={handleClick}><span className="material-icons menu-icon">menu</span></p>
            <NavigationOptions />
        </div>
    )
}

export default Navigation;