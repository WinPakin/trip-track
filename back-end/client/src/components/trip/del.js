import React from 'react'

export default function del() {
  return (
    <div>
        {/* Delete */}
        <h1 className="border-bottom my-2" id="delete">Delete</h1>
        {/* Delete: Button trigger modal  */}
        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
            DELETE
        </button>
        {/* Delete: Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Delete Trip</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                Once you delete this trip, it will be gone forever!
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Back</button>
                <button type="button" className="btn btn-danger">CONFIRM DELETE</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
