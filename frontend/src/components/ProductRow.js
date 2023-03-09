// import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';


function ProductRow(props, key) {

    function convertCurr(num) {
        return num.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    return (
        <tr key={key}>
            <td>{props.company}</td>
            <td>{props.product}</td>
            <td>{convertCurr(props.price)}</td>
            <td>{props.quantity}<ProductQuantity /></td>
        </tr>
    );
}

export default ProductRow;