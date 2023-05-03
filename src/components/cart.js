import { useContext, useEffect } from "react";
import { CartCountContext } from "../App";
import calculateTotal from "../scripts/calculateTotal";

const Cart = ({onClick, items})=>{
    // const cartDetails = useContext(CartCountContext);

    return(
        <div className="cart-products">
            {items.length === 0 ? 
            <p className="empty-text">
                <span className="material-icons empty-cart-icon">shopping_cart</span>
                Cart is Empty!
            </p>:
            items.map(details=>{
                return(
                    <div className="products" key={details.product_image}>
                        <img src={details.product_image} alt="camera"/>
                        <div>
                            <p className="cart-productname">{details.product_name}</p>
                            <p className="cart-productprice">{details.product_price}</p>
                            <div className="quantity">
                                <button 
                                onClick={onClick} data-prod={details.product_name}
                                className="cart-add-quantity">+</button>
                                <p className="quantity-value">{details.quantity}</p>
                                <button
                                onClick={onClick} data-prod={details.product_name}
                                className="cart-minus-quantity">-</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="checkout-section">
                <p className="cart-total">Total: {'₹ '+calculateTotal(items)}</p>
                <button className="checkout">Checkout</button>
            </div>
        </div>
    );
}

export default Cart;