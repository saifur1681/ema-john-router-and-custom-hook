import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displaySearch, setDisplaySearch] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplaySearch(data);
            }

            )
    }, []);

    useEffect(() => {

        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addededProducts = products.find(product => product.key === key);
                if (addededProducts) {
                    const quantity = savedCart[key];
                    addededProducts.quantity = quantity;
                    storedCart.push(addededProducts);
                }

            }
            setCart(storedCart);
        }
    }, [products]);

    const handleaddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)

        // save to local storage (for now)
        addToDb(product.key)
    };

    const handleChange = event => {
        // const inputValue = event.target.value;
        // const matchedProducts = products.filter(product => product.name.toLowerCase().includes(inputValue.toLowerCase()));
        // console.log(matchedProducts.length)
        // setDisplaySearch(matchedProducts)
        const SearchField = event.target.value;
        const filterProducts = products.filter(product => product.name.toLowerCase().includes(SearchField.toLowerCase()))
        // console.log(filterProducts.length)
        setDisplaySearch(filterProducts)
    }

    return (
        <>
            <div className="Search-container">
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Search Your Product" />
            </div>
            <div className="shop-container">
                <div className="product" >

                    {
                        displaySearch.map(product => <Product
                            key={product.key}
                            product={product}
                            handleaddToCart={handleaddToCart}

                        />)
                    }
                </div>
                <div>
                    <Cart cart={cart}></Cart>

                </div>
            </div>
        </>
    );
};

export default Shop;