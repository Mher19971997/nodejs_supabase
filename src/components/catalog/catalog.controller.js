const express = require('express');
const CatalogService = require('./catalog.service');

const catalogRouter = express.Router();

catalogRouter.get('/', CatalogService.getAll);
catalogRouter.post('/', CatalogService.insert);
catalogRouter.get('/:id', CatalogService.getOne);
catalogRouter.patch('/:id', CatalogService.updateOne);
catalogRouter.delete('/:id', CatalogService.deleteOne);

module.exports = catalogRouter;
