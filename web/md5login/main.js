function User () {
    this.username = "";
    this.hashedPass="";
    this.userData="";
    this.getData = function() {
        return this.userData;
    };
    this.getUsername=function(){
        return this.username;
    }
    this.getHashedPass=function(){
        return this.hashedPass;
    }
    this.init=function(name,pass,data){
        this.username=name;
        this.hashedPass=pass;
        this.userData=data;
    }
}

var users=[]
var stuffToDisplay="";

users.push(User("Admin","827ccb0eea8a706c4c34a16891f84e7b","Yay, you logged in!"))
//the password is "12345"

function formChanged(){
    var username=document.getElementById("usernameInput").value;
    var password=md5(document.getElementById("passwordInput").value);
    getUser(username,password);
    document.getElementById("userContent").innerHTML=stuffToDisplay;
}

function getUser(username,pass){
    for(user in users){
        if(username==user.getUsername()){
            if(pass==user.getHashedPass()){
                stuffToDisplay=user.getData();
            }
        }
    }
}
