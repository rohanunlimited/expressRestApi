
const express = require('express')
const routes = require('./route')
const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/getUser',(req,res)=>{
  
   client.query(`Select * from tablenew`,(err,result)=>{
    if(!err){
      res.send(result.rows)
    }
   })
   client.end;
});

app.post('/addUser',(req,res)=>{
 const user = req.body;
 let insertUser = `insert into tablenew(id, lastname) values(${user.id},'${user.lastname}')`
 client.query(insertUser,(err,result)=>{
  if(!err){
    res.send('Insert done')
  }
  else {
    console.log(err.message)
  }
 })
 client.end
})


app.listen(PORT,()=> console.log('q'));

client.connect()