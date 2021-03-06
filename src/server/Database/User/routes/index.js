const router = require('express').Router();
const tokenVerify = require('../../../middleware/tokenVerify.middleware');
const userController = require('../userController');
const uploadImage = require('../../../middleware/multer');

router.get('/', tokenVerify, (req, res)=> {
    res.send({status: true, name: req.user.userName, email: req.user.email});
});
router.post('/login', userController.loginUser);

router.get('/user/:email', userController.getUserDetails);
router.patch('/user/:userID', uploadImage, userController.updateProfile);

router.post('/user', userController.addUser);
router.get('/users/:userID', userController.getAllUsersDetails);
router.delete('/user/:userID', userController.deleteUser);

router.get('/admins/:department', userController.getAdmins);
router.get('/recovery/:email', userController.checkUser);
router.patch('/updatePassword', userController.updatePassword);


module.exports = router;