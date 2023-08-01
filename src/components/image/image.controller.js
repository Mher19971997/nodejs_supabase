const express = require('express');
const ImageService = require('./image.service');

const imageInfoRouter = express.Router();

imageInfoRouter.get('/', ImageService.getAll);
imageInfoRouter.post('/', ImageService.insert);
imageInfoRouter.get('/:id', ImageService.getOne);
imageInfoRouter.patch('/:id', ImageService.updateOne);
imageInfoRouter.delete('/:id', ImageService.deleteOne);

module.exports = imageInfoRouter;
