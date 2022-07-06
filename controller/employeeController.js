const db = require('../models/index');
const bcrypt = require('bcrypt');
const axios = require('axios');
const sdk = require('api')('@mati/v1.2#dq2deywl0be8wio')
const Employee = db.employees ;




const addEmployee = async (req, res, next)=>{
    const hash = await bcrypt.hash(req.body.password,10);
    
     

    let  info = {
        name: req.body.name,
        email: req.body.email,
        number:req.body.number,
        dob: req.body.dob,
        address: req.body.address, 
        image: req.file.filename,
        password: hash,
    
    }

    const option = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic NjIzYWI4ODQxMzQ1YjEwMDFjOTc2ZmIxOlROTUpNRzVaM0tQN0FUMUU2RzlaQ05KTjFCWFVYUU42'
        },
        body: new URLSearchParams({grant_type: 'client_credentials'})
      };
      
      fetch('https://api.getmati.com/oauth', option)
        .then(response => response.json())
        .then(response => {
            
    const options = {
        method: 'POST',
        headers: {
          Accept: 'text/plain',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${response.access_token}`
        },
        body: JSON.stringify({
          recipient: '918308278386',
          senderName: 'Harshavardhan Bhise',
          callbackUrl: 'https://docs.metamap.com/reference/phone-ownership'
        })
      };
      
      fetch('https://api.getmati.com/safety/v1/checks/phone/otp', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
       
            
        })
        .catch(err => console.error(err));

  const employee = await Employee.create(info);     
  res.status(200).send(employee)
    }
        

    
   
   



const getEmployee = async (req,res)=>{
    let employee = await Employee.findAll({
       
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