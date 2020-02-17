import React from 'react';

const ContactModal = (props) => {
    return (
        <>
            <div className="modal fade" id="contactModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">{props.title}</h4>
                        </div>
                        <div className="modal-body">
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactModal;