const express = require('express');
const router = express.Router();

// This path is used for authentification
// Register
// Login

// Route: api/expenses/test
router.get("/test", (err,res) => {
    res.json({msg: "expenses route works"})
});

// Route: api/expenses/add-expense
// Description: 
//   1) Check Authentification.
//   2) Check if 
//      a) chargeAmount is non-empty, positive 
//      b) chargedPersons is non-empty
//      c) ExpenseName is non-empty
//   3) Add Expense.
// Input: req.body =
//      {
//      tripname: "5c236e8435163e19b8eda2bd",
//      charger: "5c235a7f0aac8414be9f86fe",
//      chargeAmount: 50,
//      chargeType: "perPerson",
//      chargedPersons: ["5c23610dd01", "716393"],
//      category: "food",
//      ExpenseName: "Ramen"
//      }
// Output: {success:true}
// Access: Private
router.post("/add-expense", (err, res) => {
    // TODO:
});

// Route: api/expenses/expense-for
// Description: 
//   1) Check Authentification.
//   2) user's expense for the "other-entity". 
// Input: req.body.other-entity, req.body.tripname
// Output: ex) {personName:"Mark", amount:50, expenseName:"bus"}
// Access: Private
router.post("/expense-for", (err, res) => {
    // TODO:
});

// Route: api/expenses/debt-to
// Description: 
//   1) Check Authentification.
//   2) user's debt to the "other-entity". 
// Input: req.body.other-entity, req.body.tripname
// Output: ex)  {personName:"Mark", amount:50, expenseName:"bus"}
// Access: Private
router.post("/debt-to", (err, res) => {
    // TODO:
});

// Route: api/expenses/net-payment
// Description: 
//   1) Check Authentification.
//   2) user's net-payments between other users.
// Input: req.body.tripname
// Output: ex) {net-payments:[{personName:"Mark", yourExpense:450, yourDebt: 300, netPayment: 150}]}
// Access: Private
router.post("/net-payment", (err, res) => {
    // TODO:
});

// Route: api/expenses/analytics
// Description: 
//   1) Check Authentification.
//   2) return user's expense by category for that trip.
// Input: req.body.tripname
// Output: ex) {transport:40, lodging:250, food:300, tours:450, others:30}
// Access: Private
router.post("/analytics", (err, res) => {
    // TODO:
});


module.exports = router;