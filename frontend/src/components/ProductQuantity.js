import React, { useState } from 'react';
// import { MdArrowCircleDown, MdArrowCircleUp } from 'react-icons/md';
import { FaRegHandPointUp, FaRegHandPointDown } from "react-icons/fa";

function ProductQuantity() {

    const [quantity, setQuantity] = useState(0);

    // console.log(quantity);

    const increaser = () => setQuantity(Math.min(quantity + 1, 10));
    const decreaser = () => setQuantity(Math.max(quantity - 1, 0));

    return (
        <div className="quantityBox">
            <div className="quantity">{quantity}</div>
            <div className="incrementerBox">
                <FaRegHandPointUp
                    className="incrementer"
                    size={30}
                    onClick={increaser} />
                <FaRegHandPointDown
                    className="incrementer"
                    size={30}
                    onClick={decreaser} />
            </div>
        </div>

    );
}

export default ProductQuantity;