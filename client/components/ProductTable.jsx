import React from "react";

export default function ProductTable(props) {
  console.log(props)
  console.log(props.products[0].name)

  function productFactory(props) {
    const products = props.products;
    const items = [];
    for (let i; i < products.length; i++) {
      console.log(products[i].name);
      items.push(
        <tr className="productRow">
          <td className="product">{products[i].name}</td>
          <td className="price">{products[i].price}</td>
        </tr>
      );
    }
    return items;
  }

  return (
    <table className="productTable">
      <tbody>{productFactory(props)}</tbody>
    </table>
  );
}
