module.exports = (sequelize, DataTypes)=>{
    const Employee = sequelize.define("employee",{
       
        name:{
            type:DataTypes.STRING,
            
        },
        number:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING  
        },
        dob:{
            type:DataTypes.STRING
        },
        address:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        image:{
            type: DataTypes.BLOB('long')
        }
    })

    return Employee;
}