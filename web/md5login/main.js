class User {
    constructor(name,pass,data){
        this.username=name;
        this.hashedPass=pass;
        this.userData=data;
    }
}

var users=[];

users.push(new User("Admin","827ccb0eea8a706c4c34a16891f84e7b","Yay, you logged in!"))
//the password is "12345"

//make it so that other people can add users. Maybe a different html page?
//have a file to store the hashes of users

function formChanged(){
    var username=document.getElementById("usernameInput").value;
    var password=md5(document.getElementById("passwordInput").value);
    var user = getUser(username, password);
    if (!user)
        return;
    
    document.getElementById("userContent").innerHTML=user.userData;
}

function getUser(username,pass){
    for(i=0; i<users.length; i++){
        var user = users[i];
        if (username !== user.username || pass !== user.hashedPass)
            continue;
        
        return user;
    }
    document.getElementById("userContent").innerHTML="Incorrect username or password";
}
