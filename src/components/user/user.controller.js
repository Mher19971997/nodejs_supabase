const express = require('express');
const UserService = require('./user.service');

const userRouter = express.Router();

userRouter.get('/', UserService.getAll);
userRouter.post('/', UserService.insert);
userRouter.get('/:id', UserService.getOne);
userRouter.patch('/:id', UserService.updateOne);
userRouter.delete('/:id', UserService.deleteOne);

module.exports = userRouter;
