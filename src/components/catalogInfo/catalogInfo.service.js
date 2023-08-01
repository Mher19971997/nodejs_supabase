const CatalogInfo = require('../../../libs/service/src/repository/catalogInfo/catalogInfo');
const CommonService = require('../../../libs/shared/src/sequelize/common.service');

class CatalogInfoService extends CommonService {
  constructor() {
    super({ model: CatalogInfo });
  }

  getAll = async (req, res, next) => {
    try {
      const currencies = await this.findAll({
        queryMeta: {
          columns: true
        }
      });
      return res.json(currencies);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  insert = async (req, res, next) => {
    try {
      const inputDto = req.body;
      const user = await this.create({
        title: inputDto.title,
        description: inputDto.description,
        ...(inputDto.catalogId && { catalogId: inputDto.catalogId })
      });
      return res.json(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  updateOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const inputDto = req.body;
      const oneGroup = await this.update({ id }, inputDto);
      return res.json(oneGroup);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneGroup = await this.findOne({ id });
      return res.json(oneGroup);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  deleteOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneUser = await this.remove({ id });
      return res.json(oneUser);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}

module.exports = new CatalogInfoService();
