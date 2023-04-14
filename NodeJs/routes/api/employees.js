const express = require('express');
const router = express.Router()

const getEmployeeController=require('../../controllers/employeesController')

router.route('/')
    .get(getEmployeeController.getAllEmployee)
    .post(getEmployeeController.createEmployee)
    .put(getEmployeeController.updateEmployee)
    .delete(getEmployeeController.deleteEmployee )

router.route('/:id')
    .get(getEmployeeController.getEmployee)

module.exports=router