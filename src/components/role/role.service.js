const Role = require('../../../libs/service/src/repository/role/role');
const CommonService = require('../../../libs/shared/src/sequelize/common.service');

class RoleService extends CommonService {
  constructor() {
    super({ model: Role });
  }

  getAll = async (req, res, next) => {
    try {
      const filter = req.query;

      const roles = await this.findAll({
        ...filter
      });
      return res.json(roles);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  insert = async (req, res, next) => {
    try {
      const inputDto = req.body;
      const role = await this.create({
        name: inputDto.name,
        startDate: new Date(),
        endDate: new Date(),
        ...(inputDto.groupId && { groupId: inputDto.groupId })
      });
      return res.json(role);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneRole = await this.findOne({ id });
      return res.json(oneRole);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  updateOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const inputDto = req.body;
      console.log(inputDto, 'inputDtoinputDto');
      const oneRole = await this.update({ id }, inputDto);
      return res.json(oneRole);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  deleteOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneRole = await this.remove({ id });
      return res.json(oneRole);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}

module.exports = new RoleService();
