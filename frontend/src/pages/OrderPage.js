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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        shippingAddress: '',
        deliveryInstructions: '',
        creditCardNumber: '',
        ccvCode: '',
        postalCode: ''
    });

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
    const onSubmitOrder = async (e) => {
        e.preventDefault();

        // Simple form validation.
        if (orderTotal === 0) {
            alert("Please select an item to order.");
            return
        }
        if (formData.name === '') {
            alert("Please enter a name.");
            return
        }
        if (formData.email === '') {
            alert("Please enter an email address.");
            return
        }
        if (formData.phoneNumber === '') {
            alert("Please enter a phome number.");
            return
        }
        if (formData.shippingAddress === '') {
            alert("Please enter a shipping address.");
            return
        }
        if (formData.creditCardNumber === '') {
            alert("Please enter a credit card number.");
            return
        }
        if (formData.ccvCode === '') {
            alert("Please enter a CCV code.");
            return
        }
        if (formData.postalCode === '') {
            alert("Please enter a postal code.");
            return
        }

        // Post the order & form data to the express server for email forwarding/confirmation.
        const data = { formData, orderItems, orderTotal };
        const response = await fetch('/order', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (response.status === 204) {
            console.log('Successfully posted order data.');
        } else {
            console.error('Failed to send order data.');
        }

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
                <p className="description"><Link onClick={refreshOrderForm}>Click here to place a new order here.</Link></p>
                <p className="description">Thanks for your order {formData.name}! You will recieve a confirmation email shortly at {formData.email}!</p>
                <p className="description">Your order details are as follows:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
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
                        <label for="name">Name (Required)</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="First and last name"
                            onChange={updateFormData}
                            required
                        />

                        <label for="email">Email (Required)</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="name@host.com"
                            onChange={updateFormData}
                            required
                        />


                        <label for="phoneNumber">Phone Number (Required)</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            placeholder="555-420-13337"
                            onChange={updateFormData}
                            required
                        />

                        <label for="shippingAddress">Shipping Address (Required)</label>
                        <textarea
                            type="text"
                            id="shippingAddress"
                            placeholder="The Dude (Big Lebowski)&#10;123 Imaginary Lane&#10;Venice, CA 95811"
                            onChange={updateFormData}
                            required
                        />

                        <label for="deliveryInstructions">Delivery Instructions (Optional)</label>
                        <textarea
                            type="text"
                            id="deliveryInstructions"
                            placeholder="Request special delivery instructions."
                            onChange={updateFormData}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Payment Details</legend>
                        <label for="creditCardNumber">Credit Card Number (Required)</label>
                        <input
                            type="text"
                            id="creditCardNumber"
                            placeholder="4921794022636084"
                            onChange={updateFormData}
                            required
                        />

                        <label for="ccvCode">CCV Code (Required)</label>
                        <input
                            type="text"
                            id="ccvCode"
                            placeholder="991"
                            onChange={updateFormData}
                            required
                        />

                        <label for="postalCode">Postal Code (Required)</label>
                        <input
                            type="text"
                            id="postalCode"
                            placeholder="95811"
                            onChange={updateFormData}
                            required
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