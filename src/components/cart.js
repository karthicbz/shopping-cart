import { useContext } from "react";
import { CartCountContext } from "../App";

const Cart = ()=>{
    const cartDetails = useContext(CartCountContext);

    return(
        <div className="cart-products">
            {cartDetails.map(details=>{
                return(
                    <div className="products">
                        <img src={details.product_image} alt="camera"/>
                        <div>
                            <p className="cart-productname">{details.product_name}</p>
                            <p className="cart-productprice">{details.product_price}</p>
                            <div>
                                <button>+</button>
                                <p>{details.quantity}</p>
                                <button>-</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <button className="checkout">Checkout</button>
        </div>
    );
}

export default Cart;