import ProductData from '../datas/data';
import { useState } from 'react';
import SnackBar from './snackBar';

const Shop=({onClick})=>{
    const [productsData, setProductsData] = useState(ProductData.data);

    return(
        <>
        <div className='shop-products'>
            <SnackBar />
            {productsData.map(product=>{
                return(
                    <div className='products' key={product.product_name}>
                        <img className='product-image' src={product.product_image} alt='camera'/>
                        <div className='product-details'>
                            <p className='product-name'>{product.product_name}</p>
                            <p className='product-price'>{product.product_price}</p>
                            <button className='add-to-cart' onClick={onClick} data-prod={product.product_name}>Add to cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default Shop;