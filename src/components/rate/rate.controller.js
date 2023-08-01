const express = require('express');
const RateService = require('./rate.service');

const rateRouter = express.Router();

rateRouter.get('/', RateService.getAll);
rateRouter.post('/', RateService.insert);
rateRouter.get('/:id', RateService.getOne);
rateRouter.patch('/:id', RateService.updateOne);
rateRouter.delete('/:id', RateService.deleteOne);

module.exports = rateRouter;
