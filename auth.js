const register =function(username){
    console.log(`user ${username} has been registered`)
}


const login =function(username){
    console.log(`user ${username} is logged in`)
}




//Mannually Export

// module.exports = register


module.exports = {
    register,
    login
}