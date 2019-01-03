const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load User model
const User = require('../../models/User');

// Load Input Validation
const validateRegisterInput = require('../../validation/val_register');
const validateLoginInput = require('../../validation/val_login');


// Route: GET api/users/test
router.get("/test", (err,res) => {
  console.log("reached tested");
    res.json({msg: "user route works"});
});

// Route: GET api/users/current
// Description: Test if user is logged in.
// Input: None
// Output: current_user
// Access: Private

router.get(
    '/test-login',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.username
      });
    }
  );

// Route: POST api/users/register
// Description: 
//  If conditions are met, registers the user and send back the JSONified user.
//  Else, send error JSON
// Input: req.body.username, req.body.password, req.body.password2
// Access: Private
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    
    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
          errors.username = 'Username already exists';
          return res.status(400).json(errors);
        } else {
    
          const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            tripnames: []
          });
    
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
        }
      });
});

// Route: POST api/users/login
// Description: 
//   If conditions are met, send JWT
//   Else, send error JSON
// Input: req.body.username, req.body.password, req.body.password2
// Access: Private
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const username = req.body.username;
    const password = req.body.password;
  
    // Find user by username
    User.findOne({ username }).then(user => {
      // Check for user
      if (!user) {
        errors.username = 'User not found';
        return res.status(404).json(errors);
      }
  
      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = { id: user.id, name: user.username}; // Create JWT Payload
  
          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          errors.password = 'Password incorrect';
          return res.status(400).json(errors);
        }
      });
    });

});

module.exports = router;