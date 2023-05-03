import { useWindowSize } from "@react-hook/window-size"
import Confetti from "react-confetti"
import { Link } from "react-router-dom"

const OrderProcessing = ()=>{
    const {width, height} = useWindowSize()
    return(
        <div className="order-processing-section">
            <Confetti width={width} height={height}/>
        <div className="order-completed-message">
            <p>Thank you for your order</p>
            <p>Your order will be processed soon</p>
            <Link to={"/"}><button className="order-to-home">Home</button></Link>
        </div>
        </div>
    )
}

export default OrderProcessing