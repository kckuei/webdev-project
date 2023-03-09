// import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';
import products from '../data/products.js'


function Order() {

    return (
        <>
            <h2>Order</h2>
            <p className="description">Please consider placing an order with us! All proceeds go to the Adopt-A-Kitty 🐱 and Make-A-Puppy-Wag-It's-Tail 🐶 society!</p>
            <article>
                <table className="orderTable">
                    <caption>
                        Products
                    </caption>
                    <thead>
                        <tr>
                            <td>Company</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) =>
                            <ProductRow
                                company={product.company}
                                product={product.product}
                                price={product.price}
                                key={i} />)}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default Order;