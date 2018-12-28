// Routing Imports
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require("./routes/api/users.js");
const trips = require("./routes/api/trips.js");
const expenses = require("./routes/api/expenses.js");
const db_drive = require("./config/keys.js").mongoURL;



const app = express();

// Parse Request
// Parsed Aviable at req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to Database
mongoose.connect(db_drive, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongoDB Connected!");
});


// Config Passport Authentification Middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/trips', trips);
app.use('/api/expenses', expenses);
const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));





























// var jim = new User({username:"Joe", password:"1234"});
// jim.save((err,jim) => {
//   if(!err){
//     console.log(jim);
//     console.log(jim.id);
//     console.log(jim._id);
//   }else{
//     console.log(err);
//   };
// });



// var brazil = new Trip({tripname:"brazil2019", members:[ "5c235a7f0aac8414be9f86fe", "5c23610dd014471680ae7f2d"]});

// brazil.save((err, brazil) => {
//   if(!err){
//     console.log(brazil);
//   }else{
//     console.log("-----------");
//     console.log(err);
//   }
// });

// Trip.find({tripname:"brazil2019"})
//   .populate('members')
//   .then( trip =>{
//     console.log(trip[0]);
//   }).catch(err => {
//     console.log(err);
//   })



// var drink = new Expense({
//   tripname: "5c236e8435163e19b8eda2bd",
//   charger: "5c235a7f0aac8414be9f86fe",
//   chargeAmount: 50,
//   chargedPerson: "5c23610dd014471680ae7f2d",
//   category: "food"
// });

// drink.save()
//      .then( drink => {
//       console.log(drink);
// })
//     .catch( err => {
//       console.log(err);
//     })

// Expense.findOne({charger:"5c235a7f0aac8414be9f86fe"})
//       .populate("charger")
//       .populate("chargedPerson")
//        .then( res => {
//           console.log(res);
//        })
//       .catch( err => {
//           console.log(err);
//       })










