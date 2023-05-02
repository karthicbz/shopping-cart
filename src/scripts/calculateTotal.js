const calculateTotal = (products)=>{
    let total = 0;
    products.forEach(product=>{
        total += (parseInt(product.product_price.replace('₹ ', '')));
    })
    return total;
}

export default calculateTotal;