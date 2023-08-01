const Rate = require('../../../libs/service/src/repository/rate/rate');
const CommonService = require('../../../libs/shared/src/sequelize/common.service');

class RoleService extends CommonService {
  constructor() {
    super({ model: Rate });
  }

  getAll = async (req, res, next) => {
    try {
      const filter = req.query;

      const rates = await this.findAll({
        ...filter
      });
      return res.json(rates);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  insert = async (req, res, next) => {
    try {
      const inputDto = req.body;
      const user = await this.create({
        from_currency_code: inputDto.from_currency_code,
        to_currency_code: inputDto.to_currency_code
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

module.exports = new RoleService();
