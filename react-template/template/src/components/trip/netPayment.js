import React from 'react'
// {personName:"Mark", yourExpense:450, yourDebt: 300, netPayment: 150}

export default function netPayment() {
    const netLst = [{personName:"Mark", yourExpense:450, yourDebt: 300, netPayment: 150},
    {personName:"Jim", yourExpense:200, yourDebt: 400, netPayment: -200}]
    const NetLst = netLst.map( net => 
        <tr key={JSON.stringify(net)}>
            <td>{net.personName}</td>
            <td>{net.yourExpense}</td>
            <td>{net.yourDebt}</td>
            <td>{net.netPayment}</td>
        </tr>);


  return (
    <div>
        <h1 className="border-bottom my-4" id="netPayment">Net Payment</h1>
        <table className="table table-striped my-2">
            <thead>
                <tr>
                <th scope="col">Person Name</th>
                <th scope="col">Your Expense</th>
                <th scope="col">Your Debt</th>
                <th scope="col">Net Payment</th>
                </tr>
            </thead>
            <tbody>
                {NetLst}
            </tbody>
        </table>
    </div>
  )
}
