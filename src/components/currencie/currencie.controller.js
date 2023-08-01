const express = require('express');
const CurrencieService = require('./currencie.service');

const currencieRouter = express.Router();

currencieRouter.get('/', CurrencieService.getAll);
currencieRouter.post('/', CurrencieService.insert);
currencieRouter.get('/:id', CurrencieService.getOne);
currencieRouter.patch('/:id', CurrencieService.updateOne);
currencieRouter.delete('/:id', CurrencieService.deleteOne);

module.exports = currencieRouter;
