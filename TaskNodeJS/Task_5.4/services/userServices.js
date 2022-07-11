const User = require('./../model/userModel')

exports.getAllUsers = async function(){
    let users = await User.findAll();
    return users;
}

exports.getUserById = async function(id){
    return await User.findByPk(id);
}

exports.createUser = async function(body){
    const user = await User.create(body)
    return user;
}

exports.updateUser = async function(id,body){
    await User.update(body,{
        where :{id}
    })
    const user = await User.findByPk(id)

    return user;
}

exports.deleteUser = async function(id){
    const user = await User.findByPk(id);
    user.isDeleted= true;
    await user.save();

    return user;
}
exports.getAutoSuggestUsers = function(users,name,limit){
    users= users.filter(function(user){
        if(user.name.startsWith(name)){
            return user;
        }
    })

    limit = limit || users.length;

        if(users.length > 0){
            
            users = users.slice(0, limit);
        }else{
            
            users= 'No users found'
        }

    return users;
}
