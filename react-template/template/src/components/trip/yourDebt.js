import React from 'react'

export default function yourDebt() {
  return (
    <div>
        <h1 class="border-bottom my-4" id="yourDebt">Your Debt</h1>
        <form class="form-inline my-2">
                <label class=" mr-2" for="expenseFor">Your Debt to</label>
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
                    <td>20</td>
                    <td>Ramen</td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>47</td>
                    <td>Amazon Tour</td>
                    </tr>
                    </tbody>
            </table>
    </div>
  )
}
