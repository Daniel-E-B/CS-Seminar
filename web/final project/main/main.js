var cookies=0;
var frames=0;
var CPS=0;

class Item{
    constructor(CPSBoost, cost){
        this.CPSBoost=CPSBoost;
        this.cost=cost;
        if(cookies>=this.cost){
            cookies-=this.cost;
            CPS+=this.CPSBoost;
        }
    }
}

class Helper extends Item{
    constructor(){
        super(0.1,15);
    }
}

var updater;

function update(){
    cookies+=CPS;
    document.getElementById('CPS').innerHTML="Per Second: "+CPS;
    document.getElementById('cookieCounter').innerHTML=Math.floor(cookies)+" cookies";
    //it cant find numCookies, probably b/c it hasnt been created
}

var items=[];

window.onload = function(){
    //items.push(new Helper());
    updater = setInterval(update, 1000);
}

