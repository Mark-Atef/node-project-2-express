// api routes for user management

const {Router} = require('express');
const router = Router();

// import the getUser function from the user.controller.js file
// const { getUser } = require('./user.controller'); if you want only getUser function
const userController = require('./user.controller'); // if you want all the functions from user.controller.js file

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router; // didn't make {} because we are exporting the whole router object, not just a single function.