import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import ProductRow from '../components/ProductRow.js';
import OrderedRow from '../components/OrderedRow.js';
import products from '../data/products.js';


function Order() {

    const redirect = useNavigate();

    // Top level-state for updating order total when incrementing/decrementing items.
    const [orderTotal, setOrderTotal] = useState(0);
    const [orderItems, setOrderItems] = useState({});

    // Use state for partial rendering on order page.
    const [submitted, setSubmitted] = useState(false);

    // Use state for form data.
    const [formData, setFormData] = useState({});

    // Update form data state object on edit.
    const updateFormData = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    };

    // Currency conversion.
    const convertCurr = (num) => {
        return num.toLocaleString("en-US", { style: "currency", currency: "USD" })
    };

    // Submit POST request with form and order info.
    const onSubmitOrder = (e) => {
        e.preventDefault();

        if (orderTotal == 0) {
            alert("Please select an item to order.");
            return
        }

        // PLACEHOLDER. 
        // CODE FOR SENDING EMAIL AND/OR POSTING TO EXPRESS SERVER HERE.

        // Set submitted state to display thank you/order confirmation.
        setSubmitted(true);
    };

    // Refresh the page when new order link clicked.
    const refreshOrderForm = (e) => {
        e.preventDefault();
        redirect(0);
    };

    return (
        <>
            <h2>Order</h2>
            {submitted && <div>
                <p className="description">Thanks for your order {formData.name}! You will recieve a confirmation email shortly at {formData.email}!</p>
                <p className="description">Your order details are as follows:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(orderItems).map((prod, i) =>
                            <OrderedRow
                                prod={prod}
                                count={orderItems[prod]}
                                key={i}
                                convertCurr={convertCurr}
                            />)}
                    </tbody>
                </table>
                <p className="description">Order Total: {convertCurr(orderTotal)}</p>
                <p className="description">Shipping Address: {formData.shippingAddress}</p>
                <p className="description">Delivery Instructions: {formData.deliveryInstructions}</p>
                <p className="description"><Link onClick={refreshOrderForm}>Click here to place a new order here.</Link></p>
            </div>}
            {!submitted && <p className="description">Please consider placing an order with us! Although our prices may seem astronomically gargantuan, all proceeds go to the Adopt-A-Kitty 🐱 and Make-A-Puppy-Wag-It's-Tail 🐶 society!</p>}
            {!submitted && <article>
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
                                product={product}
                                key={i}
                                orderItems={orderItems}
                                setOrderItems={setOrderItems}
                                setOrderTotal={setOrderTotal}
                                convertCurr={convertCurr}
                            />)}
                    </tbody>
                </table>
                <fieldset>
                    <legend>Your Order</legend>
                    <p>Order Total: {convertCurr(Math.max(0, orderTotal))}</p>
                    <fieldset>
                        <legend>Contact Details</legend>
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            onChange={updateFormData}
                        />

                        <label for="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            onChange={updateFormData}
                        />


                        <label for="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            onChange={updateFormData}
                        />

                        <label for="shippingAddress">Shipping Address</label>
                        <input
                            type="text"
                            id="shippingAddress"
                            onChange={updateFormData}
                        />

                        <label for="deliveryInstructions">Delivery Instructions</label>
                        <input
                            type="text"
                            id="deliveryInstructions"
                            onChange={updateFormData}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Payment Details</legend>
                        <label for="creditCardNumber">Credit Card Number</label>
                        <input
                            type="text"
                            id="creditCardNumber"
                            onChange={updateFormData}
                        />

                        <label for="ccvCode">CCV Code</label>
                        <input
                            type="text"
                            id="ccvCode"
                            onChange={updateFormData}
                        />

                        <label for="postalCode">Postal Code</label>
                        <input
                            type="text"
                            id="postalCode"
                            onChange={updateFormData}
                        />
                    </fieldset>

                    <button onClick={onSubmitOrder}>
                        Submit Order
                    </button>
                </fieldset>
            </article>
            }
        </>
    );
}

export default Order;