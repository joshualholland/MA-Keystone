import React from "react";

export default function PersonalModal(name, startDate, image, about) {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
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
                  <h5 className='p-5 mb-5'>{startDate}</h5>
                  <p className='p-5'>
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
