import React from 'react';

const ReviewProduct = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product-container" >
            <div>
                <h3 style={{ color: 'chocolate' }}>{name}</h3>
                <h4>Price: {price}</h4>
                <h5>Quantity: {quantity}</h5>
                <button onClick={() => handleRemove(key)} className="cart-button">Remove</button>
            </div>
        </div>
    );
};

export default ReviewProduct;