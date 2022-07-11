const sequelize = require('../dataAccess/database')
const { Sequelize,DataTypes }  = require("sequelize");
const bcrypt = require('bcrypt')

const User = sequelize.define('User', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
  name: {
      type:DataTypes.STRING,
      allowNull:false
    },
  password: {
      type:DataTypes.STRING,
      allowNull:false,
      
    },
  age:{
      type:DataTypes.INTEGER,
      allowNull:false
      },
  isDeleted: {
      type:DataTypes.BOOLEAN,
      get(){
          if(!this.getDataValue('isDeleted'))
            return
        return this.getDataValue('isDeleted')
      }
    }
},{
    timestamps:false,
   
});


User.beforeCreate((user,options)=>{
    return bcrypt.hash(user.password,10).then(hash=> user.password = hash).catch(err=>console.log(err))
})
User.sync({}).then(()=>console.log("Table Created")).catch(err=>console.log(err))
module.exports = User;