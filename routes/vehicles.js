const router = require('express').Router();
const passport = require('passport');

router.get('/', function (req, res) {
    //UPDATE THIS ==========================================================================
    // Where do you want to go for the root route (this is localhost:3000)
    // in the student demo this was res.redirect('/movies'), what do you want?
    // This could be a landing page, or just redirect to your main resource page which you'll have an a tag that makes 
    // a request to `/auth/google` route below
    //===============================================================================================
    res.render('vehicles')
});

module.exports = router;