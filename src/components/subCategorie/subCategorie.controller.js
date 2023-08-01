const express = require('express');
const SubCategorieService = require('./subCategorie.service');

const subCategorieRouter = express.Router();

subCategorieRouter.get('/', SubCategorieService.getAll);
subCategorieRouter.post('/', SubCategorieService.insert);
subCategorieRouter.get('/:id', SubCategorieService.getOne);
subCategorieRouter.patch('/:id', SubCategorieService.updateOne);
subCategorieRouter.delete('/:id', SubCategorieService.deleteOne);

module.exports = subCategorieRouter;
