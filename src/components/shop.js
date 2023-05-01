import ProductData from '../datas/data';
import SideTag from './sideTag';
import { useState } from 'react';

const Shop=()=>{
    const [productsData, setProductsData] = useState(ProductData.data);
    return(
        <>
        <div className='shop-products'>
            {productsData.map(product=>{
                return(
                    <div className='products'>
                        <img className='product-image' src={product.product_image} alt='camera'/>
                        <div className='product-details'>
                        <p className='product-name'>{product.product_name}</p>
                        <p className='product-price'>{product.product_price}</p>
                        <button className='add-to-cart'>Add to cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default Shop;