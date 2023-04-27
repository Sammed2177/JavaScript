const user = {
    name : "sammed",
    age : 23,
    ssoUser : true,
    locked : false,

    validateUser : function(ssoUser, locked){
        
        if(ssoUser === true && locked === true)
            return "Valid user --> " + this.name;
        else
            return "Invalid user --> " + this.name;
    }
}

var res = user.validateUser();

console.log(res);

