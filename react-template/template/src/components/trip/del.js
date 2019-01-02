import React from 'react'

export default function del() {
  return (
    <div>
        {/* Delete */}
        <h1 class="border-bottom my-2" id="delete">Delete</h1>
        {/* Delete: Button trigger modal  */}
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
            DELETE
        </button>
        {/* Delete: Modal */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Delete Trip</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                Once you delete this trip, it will be gone forever!
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
                <button type="button" class="btn btn-danger">CONFIRM DELETE</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
