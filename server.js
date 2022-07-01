const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));


const PORT = 8080;

const router = require('./routes/employeeRouter.js');

app.use('/api/employee', router);

app.listen(PORT,()=> console.log('server is running '))