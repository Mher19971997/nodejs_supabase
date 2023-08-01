const express = require('express');
const CategorieService = require('./categorie.service');

const categorieRouter = express.Router();

categorieRouter.get('/', CategorieService.getAll);
categorieRouter.post('/', CategorieService.insert);
categorieRouter.get('/:id', CategorieService.getOne);
categorieRouter.patch('/:id', CategorieService.updateOne);
categorieRouter.delete('/:id', CategorieService.deleteOne);

module.exports = categorieRouter;
