// import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';


function ProductRow({ key, product, orderItems, setOrderItems, setOrderTotal, convertCurr }) {

    return (
        <tr key={key}>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{convertCurr(product.price)}</td>
            <td>{product.quantity}<ProductQuantity
                product={product.product}
                orderItems={orderItems}
                setOrderItems={setOrderItems}
                setOrderTotal={setOrderTotal}
            />
            </td>
        </tr>
    );
}

export default ProductRow;