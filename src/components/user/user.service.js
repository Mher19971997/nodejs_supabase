const User = require('../../../libs/service/src/repository/user/user');

const CommonService = require('../../../libs/shared/src/sequelize/common.service');

class UserService extends CommonService {
  constructor() {
    super({ model: User });
  }

  getAll = async (req, res, next) => {
    try {
      const filter = req.query;
      const users = await this.findAll({
        includeMeta: [
          {
            association: 'roles'
          }
        ],
        ...filter
      });

      return res.json(users);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  insert = async (req, res, next) => {
    try {
      const inputDto = req.body;
      const user = await this.create({
        firstName: inputDto.firstName,
        lastName: inputDto.lastName,
        ...(inputDto.roleId && { roleId: inputDto.roleId })
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
      const oneRole = await this.update({ id }, inputDto);
      return res.json(oneRole);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneUser = await this.findOne({
        id,
        includeMeta: [
          {
            association: 'roles'
          }
        ]
      });
      return res.json(oneUser);
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

module.exports = new UserService();
