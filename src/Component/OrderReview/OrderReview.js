import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/UseProducts';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import {removeFromDb} from'../../utilities/fakedb';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const removeItem = cart.filter(product => product.key !== key);
        setCart(removeItem);
        removeFromDb(key)
    };

    return (
        <div className="shop-container">
            <div className="product">
                {
                    cart.map(product => <ReviewProduct
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewProduct>)
                }
            </div>
            <div>
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default OrderReview;