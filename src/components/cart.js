import calculateTotal from "../scripts/calculateTotal";
import { Link } from "react-router-dom";

const Cart = ({onClick, items})=>{
    // const cartDetails = useContext(CartCountContext);

    return(
        <div className="cart-products">
            {items.length === 0 ? 
            <p className="empty-text">
                <span className="material-icons empty-cart-icon">shopping_cart</span>
                Cart is Empty!
            </p>:
            <div className="cart-products-section">{ //This div helps to not show scrollbar when cart is empty
                items.map(details=>{
                return(
                    <div className="products" key={details.product_image}>
                        <img className="cart-productImage" src={details.product_image} alt="camera"/>
                        <div className="cart-productDetails">
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
            </div>
            }
            <div className="checkout-section">
                <p className="cart-total">Total: {'₹ '+calculateTotal(items)}</p>
                <Link to={"/order-completed"}><button className="checkout" onClick={onClick} data-prod={null}>Checkout</button></Link>
            </div>
        </div>
    );
}

export default Cart;