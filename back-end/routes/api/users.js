const express = require('express');
const router = express.Router();

// This path is used for authentification
// Register
// Login

// Route: api/users/test
router.get("/test", (err,res) => {
    res.json({msg: "user route works"})
});

// Route: api/users/register
// Description: 
//  If conditions are met, registers the user and send back the JSONified user.
//  Else, send error JSON
// Input: req.body.username, req.body.password, req.body.password2
// Access: Private
router.post("/register", (err, res) => {
    // TODO:
});

// Route: api/users/login
// Description: 
//   If conditions are met, send JWT
//   Else, send error JSON
// Input: req.body.username, req.body.password, req.body.password2
// Access: Private
router.post("/login", (err, res) => {
    // TODO:
});

module.exports = router;