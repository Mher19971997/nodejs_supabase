const userRouter = require('./components/user/user.controller');
const rolesRouter = require('./components/role/role.controller');
const groupRouter = require('./components/group/group.controller');
const currencieRouter = require('./components/currencie/currencie.controller');
const rateRouter = require('./components/rate/rate.controller');
const catalogRouter = require('./components/catalog/catalog.controller');
const catalogInfoRouter = require('./components/catalogInfo/catalogInfo.controller');
const imagesRouter = require('./components/image/image.controller');
const subCategorieRouter = require('./components/subCategorie/subCategorie.controller');
const categorieRouter = require('./components/categorie/categorie.controller');

module.exports = (app) => {
  app.use('/users', userRouter);
  app.use('/roles', rolesRouter);
  app.use('/groups', groupRouter);
  app.use('/currencies', currencieRouter);
  app.use('/rates', rateRouter);
  app.use('/catalogs', catalogRouter);
  app.use('/catalogInfos', catalogInfoRouter);
  app.use('/images', imagesRouter);
  app.use('/subCategories', subCategorieRouter);
  app.use('/categories', categorieRouter);
};
