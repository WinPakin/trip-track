import React from 'react'

export default function yourExpenses() {
  return (
    <div>
        <h1 class="border-bottom my-4" id="yourPayments">Your Payments</h1>
        <form class="form-inline my-2">
            <label class="my-1 mr-2" for="expenseFor">Your Expense for</label>
            <select class="custom-select" id="expenseFor">
                <option selected>Everyone</option>
                <option value="1">John Doe</option>
                <option value="2">Emily Newman</option>
                <option value="3">Kim Lee</option>
            </select>
        </form>
        <table class="table table-striped my-2">
                <thead>
                    <tr>
                    <th scope="col">Person Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Expense Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>70</td>
                    <td>NYC Bus</td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>70</td>
                    <td>NYC Bus</td>
                    </tr>
                    <tr>
                    <td>Mark</td>
                    <td>875</td>
                    <td>Brazil Plane</td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}
