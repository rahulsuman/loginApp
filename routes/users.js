var express = require('express');
var router = express.Router();

// Sign up user //
router.post('/signup', function(req, res, next) {
    if (req.body.subscribe === '' || req.body.subscribe === null || req.body.subscribe === undefined) {
        res.json('Hello ' + req.body.firstName + ' ' + req.body.lastName + '. Thank you for signing up. Your account is now created')
    } else {
        res.json('Hello ' + req.body.firstName + ' ' + req.body.lastName + '. Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email:' + req.body.email)
    }
});


module.exports = router;