const employeeController =  require("../controller/employeeController.js");

const router = require('express').Router();

router.post('/addEmployee', employeeController.addEmployee);

router.get('/getEmployee', employeeController.getEmployee);

router.get('/getEmployee/:id', employeeController.getOneEmployee);

router.put('/updateEmployee',employeeController.updateEmployee);

router.delete('/deleteEmployee', employeeController.deleteEmployee);

module.exports = router;