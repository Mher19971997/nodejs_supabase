const express = require('express');
const GroupService = require('./group.service');

const groupRouter = express.Router();

groupRouter.get('/', GroupService.getAll);
groupRouter.post('/', GroupService.insert);
groupRouter.get('/:id', GroupService.getOne);
groupRouter.patch('/:id', GroupService.updateOne);
groupRouter.delete('/:id', GroupService.deleteOne);

module.exports = groupRouter;
