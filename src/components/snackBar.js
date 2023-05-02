import { Link } from "react-router-dom"

const SnackBar = ()=>{
    return(
        <div className="snack-bar">
            <p className="snack-bar-para">Product Added to Cart</p>
            <Link to={'/cart'}>View Cart</Link>
        </div>
    )
}

export default SnackBar;