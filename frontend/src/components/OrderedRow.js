import products from '../data/products.js';


function OrderedTable({ prod, count, convertCurr }) {

    const findProduct = (prod) => {
        const arr = products.filter((obj) => {
            return obj.product === prod;
        });
        return arr[0]
    }

    return <>
        <tr>
            <td>{prod}</td>
            <td>{convertCurr(findProduct(prod).price)}</td>
            <td>{count}</td>
            <td>{convertCurr(findProduct(prod).price * count)}</td>
        </tr>
    </>
}

export default OrderedTable;