const express = require('express');
const router = express.Router();
const passport = require('passport');
const Lodash = require('lodash');
const Expense = require('../../models/Expense');
const Trip = require('../../models/Trip');
const validateAddExpenseInput = require("../../validation/val_add-expense.js");

// Route: api/expenses/test
router.get("/test", (req, res) => {
    res.json([{msg: "expenses route works"},{msg: 'lol'}]);
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
    console.log("create expense");
    console.log(req.body);
    const { errors, isValid } = validateAddExpenseInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
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
//   2) user's expense for the "otherEntity". 
// Input: req.body.otherEntity, req.body.tripname
// Output: ex) {personName:"Mark", amount:50, expenseName:"bus"}
// Access: Private
router.post("/expense-for", passport.authenticate('jwt', { session: false }), (req, res) => {
    if(req.body.otherEntity == "everyone"){
        Expense.find({charger:req.user.username, tripname:req.body.tripname})
        .then(expenses => {
            res.json(expenses.map( x => {return {personName: x.chargedPerson, 
                                         amount: x.chargeAmount, 
                                         expenseName: x.expenseName}
                                        }));
        }).catch(err => console.log(err));     
    }else{
        Expense.find({chargedPerson:req.body.otherEntity, charger:req.user.username, tripname:req.body.tripname})
        .then(expenses => {
            res.json(expenses.map( x => {return {personName: x.chargedPerson, 
                                         amount: x.chargeAmount, 
                                         expenseName: x.expenseName}
                                        }));
        }).catch(err => console.log(err));
    }


});

// Route: api/expenses/debt-to
// Description: 
//   1) Check Authentification.
//   2) user's debt to the "other-entity". 
// Input: req.body.otherEntity, req.body.tripname
// Output: ex)  {personName:"Mark", amount:50, expenseName:"bus"}
// Access: Private
router.post("/debt-to", passport.authenticate('jwt', { session: false }) ,(req, res) => {
    if(req.body.otherEntity == "everyone"){
        Expense.find({chargedPerson:req.user.username, tripname:req.body.tripname})
        .then(expenses => {
            res.json(expenses.map( x => {return {personName: x.charger, 
                                         amount: x.chargeAmount, 
                                         expenseName: x.expenseName}
                                        }));
        }).catch(err => console.log(err));
    }else{
        Expense.find({chargedPerson:req.user.username, charger:req.body.otherEntity, tripname:req.body.tripname})
        .then(expenses => {
            res.json(expenses.map( x => {return {personName: x.charger, 
                                         amount: x.chargeAmount, 
                                         expenseName: x.expenseName}
                                        }));
        }).catch(err => console.log(err));
    }


});


// Route: api/expenses/net-payment
// Description: 
//   1) Check Authentification.
//   2) user's net-payments between other users.
// Input: req.body.tripname
// Output: ex) [{personName:"Mark", yourExpense:450, yourDebt: 300, netPayment: 150}]
// Access: Private
router.post("/net-payment", passport.authenticate('jwt', { session: false }), (req, res) => {
    // TODO:
    // get all expenses where user is the charger
    // object.asign
    // Object.fromEntries
    // async await

    Trip.findOne({tripname:req.body.tripname})
        .then( trip => {
            async function calcLogic() {
                // init nested list
                console.log(trip.members);
                var netPaymentLst = trip.members.map(x => {return [x,{personName:x, yourExpense:0, yourDebt: 0, netPayment:0}];})
                console.log(netPaymentLst);
                // dict with: person name as key
                var netPaymentDic = Lodash.fromPairs(netPaymentLst);
                               
                // // Expenses where the user is the charger.
                var userIsCharger = await Expense.find({charger:req.user.username, tripname:req.body.tripname}).exec();

                for(var i = 0; i < userIsCharger.length; i ++){
                    var ex = userIsCharger[i];
                    var ex_chargedPerson = ex.chargedPerson;
                    netPaymentDic[ex_chargedPerson].yourExpense += ex.chargeAmount;
                    netPaymentDic[ex_chargedPerson].netPayment += ex.chargeAmount;
                }
                // Expenses where the user is charged. 
                var userIsCharged = await Expense.find({chargedPerson:req.user.username, tripname:req.body.tripname}).exec();
                for(var i = 0; i < userIsCharged.length; i ++){
                    var ex = userIsCharged[i];
                    var ex_charger = ex.charger;
                    netPaymentDic[ex_charger].yourDebt += ex.chargeAmount;
                    netPaymentDic[ex_charger].netPayment -= ex.chargeAmount;
                }
                res.json(Object.values(netPaymentDic));

            }
            calcLogic();
      
        })
        .catch(err => {console.log(err);});

    
});

// Route: api/expenses/analytics
// Description: 
//   1) Check Authentification.
//   2) return user's expense by category for that trip.
// Input: req.body.tripname
// Output: ex) {transport:40, lodging:250, food:300, tours:450, others:30}
// Access: Private
router.post("/analytics", passport.authenticate('jwt', { session: false }), (req, res) => {
    // TODO:
    Expense.find({chargedPerson:req.user.username, tripname:req.body.tripname})
           .then(expenses =>{
            //    res.json(expenses);
                var groups = {transport:0, lodging:0, food:0, tours:0, others:0};
                for(var i = 0; i < expenses.length; i ++){
                    switch(expenses[i].category){
                        case "transport":
                            groups.transport += expenses[i].chargeAmount;
                            break;
                        case "lodging":
                            groups.lodging += expenses[i].chargeAmount;
                            break;
                        case "food":
                            groups.food += expenses[i].chargeAmount;
                            break;
                        case "tours":
                            groups.tours += expenses[i].chargeAmount;
                            break;
                        default:
                            groups.others += expenses[i].chargeAmount;
                            break;

                    }
                }
                res.json(groups);
           }).catch( err => { return console.log(err);});
});


module.exports = router;