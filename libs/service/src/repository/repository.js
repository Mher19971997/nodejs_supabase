const Catalog = require('./catalog/catalog');
const CatalogInfo = require('./catalogInfo/catalogInfo');
const Categorie = require('./categorie/categorie');
const Currencie = require('./currencie/currencie');
const Group = require('./group/group');
const Image = require('./image/image');
const Rate = require('./rate/rate');
const Role = require('./role/role');
const SubCategorie = require('./subCategorie/subCategorie');
const User = require('./user/user');

Catalog.hasOne(Image);
Image.belongsTo(Catalog, {
  targetKey: 'id',
  foreignKey: 'catalogId',
  as: 'images'
});

Categorie.hasOne(Catalog);
Catalog.belongsTo(Categorie, {
  targetKey: 'id',
  foreignKey: 'categoryId',
  as: 'categories'
});

Catalog.hasMany(CatalogInfo);
CatalogInfo.belongsTo(Catalog, {
  targetKey: 'id',
  foreignKey: 'catalogId',
  as: 'catalogInfos'
});


SubCategorie.hasOne(Catalog);
Catalog.belongsTo(SubCategorie, {
  targetKey: 'id',
  foreignKey: 'subCategoryId',
  as: 'subCategories'
});

Role.hasOne(User);
User.belongsTo(Role, {
  targetKey: 'id',
  foreignKey: 'roleId',
  as: 'roles'
});

Group.hasOne(Role);
Role.belongsTo(Group, {
  targetKey: 'id',
  foreignKey: 'groupId',
  as: 'groups'
});

const repositories = [
  User,
  Rate,
  Group,
  Role,
  Currencie,
  Catalog,
  CatalogInfo,
  Image,
  SubCategorie,
  Categorie
];

module.exports = repositories;
