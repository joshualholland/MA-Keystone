import React from "react";

export default function ProductTable(props) {
  // console.log(props);
  const products = props.products;
  // console.log(products);
  // console.log(products.length);

  function EmptyTable() {
    return (
      <tbody>
        <tr className="productRow">
          <td className="productName" style={{ color: "red" }}>
            You need to add content using the portal located @
            www.morganashleysalon.com/keystone
          </td>
          <td className="productPrice" style={{ color: "red" }}>
            NEEDS CONTENT ADDED THROUGH KEYSTONE!
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <table className="productTable">
      <tbody>
        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <tr key={index} className="productRow">
                <td className="productName">{product.service}</td>
                <td className="productPrice">{product.price}</td>
              </tr>
            );
          })
        ) : (
          <EmptyTable />
        )}
      </tbody>
    </table>
  );
}
