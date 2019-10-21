import React from "react";

export default function PersonalModal(name, startDate, image, about,key) {
  return (
    <>
      <div
        class="modal fade"
        id={key}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabelz"
        aria-hidden="true"
      >
        <div class="modal-dialog mx-auto" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalzLabel">
                {name}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
