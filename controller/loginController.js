const db = require('../models/index');
const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');


const Employee = db.employees;

const login = async (req,res)=>{
   const {name, password} = req.body;
  const employee = await Employee.findOne({where:{name: name}});
 try{
    bcrypt.compare(password, employee.password);
    const token = jwt.sign({
        empName: employee.name
    },'neo',{
        expiresIn:"24"
    })
   res.json({token})
 }
 catch(e){
       console.log(e)
 }
}


module.exports ={
    login
}