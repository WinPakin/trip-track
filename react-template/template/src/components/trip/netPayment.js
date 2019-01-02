import React from 'react'

export default function netPayment() {
  return (
    <div>
        <h1 class="border-bottom my-4" id="netPayment">Net Payment</h1>
        <table class="table table-striped my-2">
            <thead>
                <tr>
                <th scope="col">Person Name</th>
                <th scope="col">Your Expense</th>
                <th scope="col">Your Debt</th>
                <th scope="col">Net Payment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark</td>
                <td>20</td>
                <td>70</td>
                <td>-50</td>
                </tr>
                <tr>
                <td>Jacob</td>
                <td>780</td>
                <td>560</td>
                <td>220</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
