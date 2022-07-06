const express = require('express');



const app = express();

app.use(express.json());




app.use(express.urlencoded({extended: true}));


const PORT = 8080;

const router = require('./routes/employeeRouter.js');

const loginRouter = require('./routes/loginRoutes.js');

app.use('/api/employee', router);
app.use('/api/login', loginRouter);

app.listen(PORT,()=> console.log('server is running '))