const express = require('express');
const passport = require('passport');
const router = express.Router();
const validateAddTripInput = require("../../validation/val_add-trip");
const validateJoinTripInput = require("../../validation/val_join-trip");
const Trip = require("../../models/Trip");
const User = require('../../models/User');
// Route: api/trips/test
router.get("/test", (err,res) => {
    res.json({msg: "trips route works"});
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
// Input: {tripname:"brazil2019", tripDesc: "blah..."}
// Output: {success:true}
// Access: Private
router.post("/add-trip", passport.authenticate('jwt', { session: false }), (req, res) => {
    // TODO:
    const { errors, isValid } = validateAddTripInput(req.body);
    // Check Validation
    console.log("Add Trip");
    console.log(errors);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    // Random
    const r = Math.random().toString(36).substring(3);
    const new_tripname = req.body.tripname + ":" + r;
    
    const newTrip = new Trip({
        tripname: new_tripname,
        tripDesc: req.body.tripDesc,
        members: [req.user.username]
    });    
    newTrip.save()
           .then( 
                trip => {
                User.findOne({username:req.user.username})
                .then( user => {
                    user.tripnames.push(trip.tripname);
                    user.save()
                        .then(res.json({success: true}));
                })
               }
               )
           .catch(err => console.log(err));


});

// Route: api/trips/join-trip
// Description: 
//   1) Check Authentification.
//   2) check if 
//      a) tripname is non-empty.
//      b) tripname exists.
// Input: {tripname:"china:nucupi04a"}
// Output: {success:true}
// Access: Private
router.post("/join-trip", passport.authenticate('jwt', { session: false }), (req, res) => {
    // TODO:
    const { errors, isValid } = validateJoinTripInput(req.body);
    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    Trip.findOne({ tripname:req.body.tripname}).then(trip => {
        // Trip Exists? 
        // Already joined? 
        // Join
        if(trip){
            if(trip.members.includes(req.user.username)){
                errors.tripname = "You are already a member of this trip"
                return res.status(400).json(errors);
            }else{
                trip.members.push(req.user.username);
                trip.save()
                    .then(trip => {
                        User.findOne({username:req.user.username})
                        .then( user => {
                            user.tripnames.push(trip.tripname);
                            user.save()
                                .then(res.json({success: true}));
                        })
                       })
                    .catch(err => console.log(err));
            }

        }else{
            errors.tripname = "The tripname does not exsist"
            return res.status(400).json(errors);
        }
    });
});



// Route: api/trips/trips-list
// Description: 
//   1) Check Authentification.
//   2) send back trips for that user.
// Input: None
// Output: ex) {tripList:["Brazil_May_2019:AZ&^65B", Japan_June_2018:HF&%FHA"]}
// Access: Private
router.post("/trips-list", passport.authenticate('jwt', { session: false }), (req, res) => {
    // TODO:
    User.findOne({username:req.user.username})
        .then( user => {
            res.json({tripList: user.tripnames});
        }
        ).catch( err => {console.log(err)}); 
});

// Route: api/trips/delete-trip
// Description: 
// Input: {tripname:"brazil2019:8708765"}
// Output: {success:true}
// Access: Private
router.delete("/delete-trip", passport.authenticate('jwt', { session: false }), (req, res) => {
    // TODO:
    Trip.findOne({tripname:req.body.tripname})
        .then( trip => {
            trip.members.splice(trip.members.indexOf(req.user.username), 1);
            trip.save()
                .then( trip => {
                    User.findOne({username:req.user.username})
                    .then( user => {
                        user.tripnames.splice(user.tripnames.indexOf(req.body.tripname),1);
                        user.save()
                            .then( user => {
                                return res.json({success: true});
                            } 
                            )       
                    }
                    ).catch(err => {
                        console.log(err);
                    })
                })
        });
});

module.exports = router;