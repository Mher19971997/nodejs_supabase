const express = require('express');
const RoleService = require('./role.service');

const rolesRouter = express.Router();

rolesRouter.get('/', RoleService.getAll);
rolesRouter.post('/', RoleService.insert);
rolesRouter.patch('/:id', RoleService.updateOne);
rolesRouter.get('/:id', RoleService.getOne);
rolesRouter.delete('/:id', RoleService.deleteOne);

module.exports = rolesRouter;
