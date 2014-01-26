//David Kimball 1-26-14 Conditionals Industry

//do we buy a forklift?
//create var for cost of forklift
var forkCost = 15000;
//create var for amount of money budgeted
var forkBud = 12000;
//create prompt trade in of old forklift
var forkTrd = prompt("How much will we get for a trade?");
//create cond for no info
if(forkTrd ===""){
    var forkTrd2 = "You did not offer us any money!";
}else{
    //
}
//create cond to see if we can afford forklift
if(forkCost < forkBud + forkTrd || forkCost < forkBud + forkTrd2){
    alert("We can buy a forklift");
}else{
    alert("We need to wait for now!")
}

