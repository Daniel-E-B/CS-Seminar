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

class Oven extends Item{
    constructor(){
        super(1,100);
    }
}

class Farm extends Item{
    constructor(){
        super(8,1300);
        //lol, by this stage I had to write a pyautogui to help me debug :)
        //realized i could just set cookies in console ;p
    }
}

class Mine extends Item{
    constructor(){
        super(47,15000);
    }
}

class Factory extends Item{
    constructor(){
        super(420,180000);
    }
}

class Bank extends Item{
    constructor(){
        super(2500,2000000);
    }
}

class Temple extends Item{
    constructor(){
        super(15000,28000000);
    }
}

class Tower extends Item{
    constructor(){
        super(88000,420000000);
    }
}

class Shipment extends Item{
    constructor(){
        super(540000,6200000000);
    }
}

//im gonna stop now

var updater;
var shipments=0;
var towers=0;
var temples=0;
var banks=0;
var factories=0;
var mines=0;
var farms=0;
var ovens=0;
var helpers=0;

function update(){
    cookies+=CPS;
    document.getElementById('CPS').innerHTML="Per Second: "+CPS.toFixed(1);//show 1dp
    document.getElementById('cookieCounter').innerHTML=Math.floor(cookies)+" cookies";

    //silly way of finding how many of each object
    shipments=0;
    towers=0;
    temples=0;
    banks=0;
    factories=0;
    mines=0;
    farms=0;
    ovens=0;
    helpers=0;
    for (var j=0;j<items.length; j++){
        i=items[j];
        //it didn't work when I did a for..in loop. dont know why
        if(i instanceof Helper){
            helpers++;
        }
        else if(i instanceof Oven){
            ovens++;
        }
        else if(i instanceof Farm){
            farms++;
        }
        else if(i instanceof Mine){
            mines++;
        }
        else if(i instanceof Factory){
            factories++;
        }
        else if(i instanceof Bank){
            banks++;
        }
        else if(i instanceof Temple){
            temples++;
        }
        else if(i instanceof Tower){
            towers++;
        }
        else if(i instanceof Shipment){
            shipments++;
        }
    }

    //update all the freaking stats:
    document.getElementById('numHelpers').innerHTML=helpers+" Helpers";
    document.getElementById('numOvens').innerHTML=ovens+" Ovens";
    document.getElementById('numFarms').innerHTML=farms+" Farms";
    document.getElementById('numMines').innerHTML=mines+" Mines";
    document.getElementById('numFactories').innerHTML=factories+" Factories";
    document.getElementById('numBanks').innerHTML=banks+" Banks";
    document.getElementById('numTemples').innerHTML=temples+" Temples";
    document.getElementById('numTowers').innerHTML=towers+" Towers";
    document.getElementById('numShipments').innerHTML=shipments+" Shipments";
}

var items=[];

window.onload = function(){
    //items.push(new Helper());
    updater = setInterval(update, 1000);
}

