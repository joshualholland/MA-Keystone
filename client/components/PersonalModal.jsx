import React from "react";

export default function PersonalModal(name, startDate, image, about,key) {
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
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <img className='modalImageFit' src={image}/>
                </div>
                <div className='col-12 col-md-6'>
                  <h5 className='modal-date p-2 mb-5'>{startDate}</h5>
                  <p className='modal-about p-1'>
                    {about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
