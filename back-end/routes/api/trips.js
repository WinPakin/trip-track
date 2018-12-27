const express = require('express');
const router = express.Router();

// Route: api/trips/test
router.get("/test", (err,res) => {
    res.json({msg: "trips route works"})
});

// Route: api/trips/add-trip
// Description: 
//   1) Check Authentification.
//   2) check if 
//      a) tripname is non-empty.
//      b) tripname contains spaces.
//      c) tripname starts with a letter. 
//   2) Create new trip name by appending random number.
//   3) Add trip
// Input: {tripname:"brazil2019"}
// Output: {success:true}
// Access: Private
router.post("/add-trip", (err, res) => {
    // TODO:
});

// Route: api/trips/join-trip
// Description: 
//   1) Check Authentification.
//   2) check if 
//      a) tripname is non-empty.
//      b) tripname exists.
// Input: {tripname:"brazil2019:8708765"}
// Output: {success:true}
// Access: Private
router.post("/join-trip", (err, res) => {
    // TODO:
});



// Route: api/trips/trips-list
// Description: 
//   1) Check Authentification.
//   2) send back trips for that user.
// Input: None
// Output: ex) {tripList:["Brazil_May_2019:AZ&^65B", Japan_June_2018:HF&%FHA"]}
// Access: Private
router.post("/trips-list", (err, res) => {
    // TODO:
});

// Route: api/trips/delete-trip
// Description: 
// Input: {tripname:"brazil2019:8708765"}
// Output: {success:true}
// Access: Private
router.delete("/delete-trip", (err, res) => {
    // TODO:
});

module.exports = router;