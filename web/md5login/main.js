class User {
    constructor(name,pass,data){
        this.username=name;
        this.hashedPass=pass;
        this.userData=data;
    }
}

var users=[];
var socket = io.connect('http://localhost');
users.push(new User("Admin","827ccb0eea8a706c4c34a16891f84e7b","Yay, you logged in!"));
socket.emit('userlist',users);
//the password is "12345"

//make it so that other people can add users. Maybe a different html page?
//have a file to store the hashes of users

function formChanged(){
    var username=document.getElementById("usernameInput").value;
    var password=md5(document.getElementById("passwordInput").value);
    var user = getUser(username, password);
    if (!user)
        return;
    
    document.getElementById("loginStatus").innerHTML=user.userData;
}

function getUser(username,pass){
    for(var i=0; i<users.length; i++){
        var user = users[i];
        if (username !== user.username || pass !== user.hashedPass)
            continue;
        
        return user;
    }
    document.getElementById("loginStatus").innerHTML="Incorrect username or password";
}

function createAccount(){
    var newName=document.getElementById("usernameInput").value;
    var p1=md5(document.getElementById("passwordInput").value);
    var p2=md5(document.getElementById("passwordConfirm").value);
    if(!p2||!p1||!newName){
        document.getElementById("OutputMessage").innerHTML="Please fill out all fields";
        return;
    }else{
        document.getElementById("OutputMessage").innerHTML="";
        //check if the username already exists!
        for(var i=0; i<users.length; i++){
            var user = users[i];
            var nameNotTaken=true;
            if (newName == user.username){
                nameNotTaken=false;
                break;
            }
        }
        if(nameNotTaken==false){
            document.getElementById("OutputMessage").innerHTML="Sorry, that username is already taken";
            return;
        }
        if(p1!=p2){
            document.getElementById("OutputMessage").innerHTML="The passwords are different";
            return;
        }
        users.push(new User(newName,p1,"change this text"));
        socket.emit('userlist',users);
        window.location="index.html";
    }
}
