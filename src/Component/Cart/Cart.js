import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;


    let totalQuantity = 0;

    let price = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        price = price + product.price * product.quantity;
        // console.log(product)
        totalQuantity = totalQuantity + product.quantity;
    }

    const tax = price / 20;
    const total = price + tax;

    return (
        // <div className="cart-detail" >
        //     <h1>Ordered: {props.cart.length}</h1>
        //     <br />
        //     <h5 className="price">Price: {price.toFixed(2)}</h5>
        //     <h5 className="tax">Tax: {tax.toFixed(2)}</h5>
        //     <h5 className="total">Total: {total.toFixed(2)}</h5>
        // </div>

        <div>
            <h3 style={{ color: "chocolate" }}>Order Summary </h3>
            <h4>Items Ordered: {totalQuantity}</h4>
            <div className="cart-detail">
                <ul className="price">
                    <li >Price:</li> <li>${price.toFixed(2)}</li>
                </ul>
            </div>
            <div className="cart-detail">
                <ul className="price">
                    <li >Tax:</li> <li>${tax.toFixed(2)}</li>
                </ul>
            </div>
            <div className="cart-detail">
                <ul className="price">
                    <li >Total:</li> <li>${total.toFixed(2)}</li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;