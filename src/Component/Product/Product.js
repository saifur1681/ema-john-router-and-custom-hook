import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';


const Product = (props) => {
    const fontLogo = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props)
    const { img, name, seller, price, stock, star } = props.product;
    return (
        <div className="product-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div style={{ marginLeft: '10px' }}>
                <h3 style={{ color: "chocolate" }}>{name}</h3>
                <h5>by: {seller}</h5>
                <h4 >${price}</h4>
                <p>only {stock} left in stock - order soon</p>
                <Rating
                    readonly
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                />
                <br />
                <button onClick={() => props.handleaddToCart(props.product)} className="cart-button" >{fontLogo}add to cart</button>
            </div>
        </div>
    );
};

export default Product;