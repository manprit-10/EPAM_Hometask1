const express = require('express');
const validator = require('express-joi-validation').createValidator({passError:true});
const validation=require('./../utils/validationSchema')
const userController = require('./../controllers/userController')

const userRouter = express.Router();

userRouter.route('/').get(userController.getAllUser).post(validator.body(validation.bodySchema),userController.createUser)

userRouter.route('/:id').get(userController.getUser).delete(userController.deleteUser).patch(validator.body(validation.updateSchema),userController.updateUser);
module.exports = userRouter;