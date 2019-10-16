import React from "react";

export default function ProductTable(props) {
  console.log(props);
  const products = props.products;
  console.log(products);
  console.log(products.length);

  return (
    <table className="productTable">
      {products.map((product) => {
        return (
          <tr className='productRow'>
            <td className='productName'>{product.name}</td>
            <td className='productPrice'>{product.price}</td>
          </tr>
        );
      })}
    </table>
  );
}
