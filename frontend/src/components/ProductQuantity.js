import React, { useState } from 'react';
// import { MdArrowCircleDown, MdArrowCircleUp } from 'react-icons/md';
import { FaRegHandPointUp, FaRegHandPointDown } from "react-icons/fa";
import products from '../data/products.js'


function ProductQuantity({ product, orderItems, setOrderItems, setOrderTotal }) {

    // Use state for item quantity.
    const [quantity, setQuantity] = useState(0);

    // Matches product with product name.
    const findProduct = () => {
        const prod = products.filter((obj) => {
            return obj.product === product;
        });
        return prod[0]
    }

    // Updates product total.
    const updateTotal = () => {
        let total = 0;
        for (let prod of Object.keys(orderItems)) {
            let quantity = orderItems[prod];
            let price = findProduct(prod).price;
            total += quantity * price;
        }
        return total
    };

    // Quantity incrementer for updating state.
    const increaser = () => {
        if (quantity + 1 < 11) {
            setQuantity(quantity + 1);

            const product = findProduct().product;
            if (isNaN(orderItems[product])) {
                orderItems[product] = 0;
            }
            orderItems[product] += 1

            // Update order item and total states.
            setOrderItems(orderItems);
            setOrderTotal(updateTotal(orderItems));
        }
    };

    // Quantity decrementer for updating state.
    const decreaser = () => {
        if (quantity - 1 > -1) {
            setQuantity(quantity - 1);

            const product = findProduct().product;
            if (isNaN(orderItems[product])) {
                orderItems[product] = 0;
            }
            orderItems[product] -= 1

            // Update order item and total states.
            setOrderItems(orderItems);
            setOrderTotal(updateTotal(orderItems));
        }
    };

    return (
        <div className="quantityBox">
            <div className="quantity">{quantity}</div>
            <div className="incrementerBox">
                <FaRegHandPointUp
                    className="incrementer"
                    size={30}
                    onClick={increaser}
                    on
                />
                <FaRegHandPointDown
                    className="incrementer"
                    size={30}
                    onClick={decreaser} />
            </div>
        </div>

    );
}

export default ProductQuantity;