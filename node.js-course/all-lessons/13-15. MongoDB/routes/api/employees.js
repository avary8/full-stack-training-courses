const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');
//const verifyJWT = require('../../middleware/verifyJWT');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
// verifyJWT is middleware. so user will be authorized before being allowed to view all employees. there is another way to do this if yk you want middleware for every route. see server.js
    //.get(verifyJWT, employeesController.getAllEmployees)
    .get(employeesController.getAllEmployees)
    .post(verifyRoles(ROLES_LIST.Admnin, ROLES_LIST.Editor), employeesController.createNewEmployee)
    .put(verifyRoles(ROLES_LIST.Admnin, ROLES_LIST.Editor), employeesController.updateEmployee)
    .delete(verifyRoles(ROLES_LIST.Admnin), employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);


module.exports = router;