var cookies=0;
var frames=0;
var CPF;

function item(){
    this.cost=0;
    this.CPFboost=0;
}

function friend (){}
friend.prototype=Object.create(item);
friend.cost=15;//make it increment?
friend.CPFboost=0.02;
//friend "extends" item

/*var items=[];
items.push(new item());*/

function update(){
    //cookies+=CPF;
    document.getElementById('numCookies').innerHTML=cookies;
    //it cant find numCookies, probably b/c it hasnt been created
}

while(true){
    update();
}