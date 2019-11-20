import React from "react";
import ProductTable from "../components/ProductTable";

export default function PersonalModal(
  name,
  startDate,
  image,
  about,
  key,
  services,
  prices
) {
  function displayProducts(services, prices) {
    if (typeof services !== "undefined" && typeof prices !== "undefined") {
      if (services.length > 0) {
        let items = [];
        for (let i = 0; i < services.length; i++) {
          items.push(
            <tr className="productRow">
              <td className="productName">{services[i]}</td>
              <td className="productPrice">
                {typeof prices[i] !== undefined ? prices[i] : " "}
              </td>
            </tr>
          );
        }

        return (
          <>
            <h5 className="modalHeader">SPECIALIZED SERVICES</h5>
            <table className="productTable mx-0" id="modalTable">
              <tbody>{items}</tbody>
            </table>
          </>
        );
      }
    }
  }

  return (
    <>
      <div
        className="modal fade"
        id={key}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabelz"
        aria-hidden="true"
      >
        <div className="modal-dialog mx-auto" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalzLabel">
                {name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-md-6">
                  <img className="modalImageFit" src={image} />
                </div>
                <div className="col-12 col-md-6">
                  <h5 className="modal-date p-2 mb-5">{startDate}</h5>
                  <p className="modal-about p-1">{about}</p>
                </div>
              </div>
            </div>
            <div className="mx-5 mb-4">{displayProducts(services, prices)}</div>
          </div>
        </div>
      </div>
    </>
  );
}
