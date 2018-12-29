const express = require('express');
const router = express.Router();
const passport = require('passport');
const Expense = require('../../models/Expense');
const validateAddExpenseInput = require("../../validation/val_add-expense.js");

// Route: api/expenses/test
router.get("/test", (req, res) => {
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
//      tripname: "china:b3y4ufgckd",
//      chargeAmount: 50,
//      chargeType: "perPerson",
//      chargedPersons: emily&joe, # & is the divider
//      category: "food",
//      expenseName: "Ramen"
//      }
// Output: {success:true}
// Access: Private
router.post("/add-expense", passport.authenticate('jwt', { session: false }), (req, res) => {
    // TODO:
    const { errors, isValid } = validateAddExpenseInput(req.body);
    if(!isValid){
        res.status(400).json(errors);
    }

    chargedList = req.body.chargedPersons.split('&');
    var chargeAmount;
    if(req.body.chargeType == "perPerson"){
        console.log("perPerson");
        chargeAmount = req.body.chargeAmount;
    }else{
        console.log("divided");
        chargeAmount = req.body.chargeAmount / chargedList.length;
        console.log(chargeAmount);
    }
    // charges everyone in chargedList
    for(var i = 0; i < chargedList.length; i ++){
        var newExpense = new Expense(
            {
            tripname: req.body.tripname,
            chargeAmount: chargeAmount,
            chargedPerson: chargedList[i],
            category: req.body.category,
            expenseName: req.body.expenseName,
            charger: req.user.username
            });
            newExpense.save()
                      .catch(err => {console.log(err);});
    }
    res.json({success:true});
 
    
});

// Route: api/expenses/expense-for
// Description: 
//   1) Check Authentification.
//   2) user's expense for the "other-entity". 
// Input: req.body.other-entity, req.body.tripname
// Output: ex) {personName:"Mark", amount:50, expenseName:"bus"}
// Access: Private
router.post("/expense-for", (req, res) => {
    // TODO:
});

// Route: api/expenses/debt-to
// Description: 
//   1) Check Authentification.
//   2) user's debt to the "other-entity". 
// Input: req.body.other-entity, req.body.tripname
// Output: ex)  {personName:"Mark", amount:50, expenseName:"bus"}
// Access: Private
router.post("/debt-to", (req, res) => {
    // TODO:
});

// Route: api/expenses/net-payment
// Description: 
//   1) Check Authentification.
//   2) user's net-payments between other users.
// Input: req.body.tripname
// Output: ex) {net-payments:[{personName:"Mark", yourExpense:450, yourDebt: 300, netPayment: 150}]}
// Access: Private
router.post("/net-payment", (req, res) => {
    // TODO:
});

// Route: api/expenses/analytics
// Description: 
//   1) Check Authentification.
//   2) return user's expense by category for that trip.
// Input: req.body.tripname
// Output: ex) {transport:40, lodging:250, food:300, tours:450, others:30}
// Access: Private
router.post("/analytics", (req, res) => {
    // TODO:
});


module.exports = router;