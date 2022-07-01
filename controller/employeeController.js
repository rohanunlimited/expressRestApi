const db = require('../models/index');
const bcrypt = require('bcrypt');

const Employee = db.employees ;


const addEmployee = async (req, res)=>{
    const hash = await bcrypt.hash(req.body.password,10);
    let  info = {
        emp_name: req.body.emp_name,
        emp_id: req.body.id,
        password: hash
    }
    const employee = await Employee.create(info);

    res.status(200).send(employee)
}


const getEmployee = async (req,res)=>{
    let employee = await Employee.findAll({
        attributes:[
            'emp_name'
        ]
    });

    res.status(200).send(employee)

}


const getOneEmployee = async (req,res)=>{
    let id = req.params.id;
    let employee = await Employee.findOne({where :{emp_id:id}});
    res.status(200).send(employee)
}



const updateEmployee = async (req,res)=>{
    let id = req.params.id;

    const employee = await Employee.update(req.body,{where:{emp_id:id}});

    res.status(200).send(product)
}


const deleteEmployee = async(req,res)=>{

    let id = req.params.id;

    const employee = await Employee.destroy({where:{emp_id:id}})
    res.status(200).send(employee)
}


module.exports = {
    addEmployee,
    getEmployee,
    getOneEmployee,
    updateEmployee,
    deleteEmployee
}