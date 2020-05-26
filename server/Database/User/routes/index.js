const router = require('express').Router();
const tokenVerify = require('../../../middleware/tokenVerify.middleware');

router.get('/', tokenVerify, (req, res)=> {
    res.send({status: true, name: req.user.userName});
});

module.exports = router;