const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const url = require('url');
const keys = require('../keys');

router.get('/google',
  passport.authenticate('google', { scope: 
      [ 'profile', 'email' ] }
));

router.get(
    '/google/redirect',
    passport.authenticate('google'),
    (req, res) => {
      const tokenPayload = {
        userName: res.req.user.displayName
      }
      const token = jwt.sign(tokenPayload, keys.JWT.TOKEN_SECRET, {expiresIn: '60m'} );
      const tokenData = {
        token: token,
        name: tokenPayload.userName
      }
      res.redirect(url.format({
        pathname: 'http://localhost:3000/dashboard',
        query: tokenData
      }));
    }
  );

router.get('/logout', (req, res)=>{
    req.logOut();
    res.send('Logged Out Successfully');
});

module.exports = router;