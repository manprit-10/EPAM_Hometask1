
const res = require('express/lib/response');
const User = require('./../model/userModel')
const userServices = require('./../services/userServices')


exports.getAllUser = async function(req,res){
    try{
        let users = await userServices.getAllUsers();
        if(req.query.name){
            
            let {name,limit} = req.query;
            users = userServices.getAutoSuggestUsers(users,name,limit);
            
        }
    
        res.status(200).json({
            status:"success",
            results: typeof users === 'object' ?users.length : 0,
            users

            
        });
    }
    catch(err){
        res.status(404).json({
            status:'Fail',
            message:err.message
        })
    }
}

exports.getUser = async function(req,res){
    const id = req.params.id;
    try{
    const user = await userServices.getUserById(id);
    if(user){
        res.status(200).json({
            status:"success",
            user

        
        })
    }else{
        res.status(404).json({
            status:"Fail",
            message:`User with id : ${id} does not exist`

        
        })
    }
}catch(err){
    res.status(404).json({
        status:'Fail',
        message:err.message
    })
}
}

exports.createUser = async function(req,res){
    
    try{
   
        const  user = await userServices.createUser(req.body)
        
        res.status(201).json({
            status:"success",
            message:"User added successfully",
            user
    
    })
}catch(err){
    console.log(err)
    res.status(500).json({
        status:"Fail",
        message:'Can not create a new User. Please try again' 
    })
}
}

exports.updateUser = async function(req,res){
    const id = req.params.id;
    try{
         
        const user = await userServices.updateUser(id,req.body)
        
        if(user){
            res.status(200).json({
                status:"User updated successfully",
                user
            })
        }else{
            res.status(404).json({
                status:"Fail",
                message:`User with id : ${id} does not exist`
            
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            status:"Fail",
            message:'Could not update the user. Please try again' 
        })
    }
}
exports.deleteUser = async function(req,res){

    try{
    const id = req.params.id;
    
    const user = await userServices.deleteUser(id)
    
    if(user){
        res.status(200).json({
            status:"Success",
            message:'User deleted successfully',
            user
        
        })
    }else{
        res.status(404).json({
            status:"Fail",
            message:`User with id : ${id} does not exist`
        
        })
    }
}catch(err){
    console.log(err)
    res.status(500).json({
        status:"Fail",
        message:'Could not delete the user. Please try again' 
    })
}
}








