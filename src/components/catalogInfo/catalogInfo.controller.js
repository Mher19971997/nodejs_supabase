const express = require('express');
const CatalogInfoService = require('./catalogInfo.service');

const catalogInfoRouter = express.Router();

catalogInfoRouter.get('/', CatalogInfoService.getAll);
catalogInfoRouter.post('/', CatalogInfoService.insert);
catalogInfoRouter.get('/:id', CatalogInfoService.getOne);
catalogInfoRouter.patch('/:id', CatalogInfoService.updateOne);
catalogInfoRouter.delete('/:id', CatalogInfoService.deleteOne);

module.exports = catalogInfoRouter;
