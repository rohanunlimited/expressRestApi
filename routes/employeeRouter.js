const employeeController =  require("../controller/employeeController.js");

const router = require('express').Router();
const Multer = require('multer');


const Storage = Multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
})

const upload = Multer({
    storage:Storage
}).single('file');


router.post('/employee', upload, employeeController.addEmployee);

router.get('/employee', employeeController.getEmployee);

router.get('/getEmployee/:id', employeeController.getOneEmployee);

router.put('/updateEmployee',employeeController.updateEmployee);

router.delete('/deleteEmployee', employeeController.deleteEmployee);



module.exports = router;