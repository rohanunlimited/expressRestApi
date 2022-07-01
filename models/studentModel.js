module.exports = (sequelize, DataTypes)=>{
    const Employee = sequelize.define("employee",{
        emp_id:{
            type: DataTypes.INTEGER,
            PrimaryKey:true,
            autoIncreament: true
        },
        emp_name:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        }
    })

    return Employee;
}