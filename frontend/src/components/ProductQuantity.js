import React, { useState } from 'react';
// import { MdArrowCircleDown, MdArrowCircleUp } from 'react-icons/md';
import { FaRegHandPointUp, FaRegHandPointDown } from "react-icons/fa";
import products from '../data/products.js'


function ProductQuantity({ product, orderItems, setOrderItems, setOrderTotal }) {

    // Use state for item quantity.
    const [quantity, setQuantity] = useState(0);

    // Matches product with product name.
    const findProduct = (name) => {
        const arr = products.filter((obj) => { return obj.product === name; });
        return arr[0]
    }

    // Updates product total.
    const updateTotal = () => {
        const keys = Object.keys(orderItems);
        const costs = keys.map((key) => { return orderItems[key] * findProduct(key).price });
        const total = costs.reduce((acc, currentValue) => acc + currentValue, 0);
        return total
    };

    // Quantity incrementer for updating state.
    const increaser = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);

            const key = findProduct(product).product;
            if (isNaN(orderItems[key])) {
                orderItems[key] = 0;
            }
            orderItems[key] += 1

            // Update order item and total states.
            setOrderItems(orderItems);
            setOrderTotal(updateTotal(orderItems));
        }
    };

    // Quantity decrementer for updating state.
    const decreaser = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);

            const key = findProduct(product).product;
            if (isNaN(orderItems[key])) {
                orderItems[key] = 0;
            }
            orderItems[key] -= 1

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