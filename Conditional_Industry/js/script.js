//David Kimball 1-26-14 Conditionals Industry

//do we buy a forklift?
//create var for cost of forklift
var forkCost = 15000;
//create var for amount of money budgeted
var forkBud = 10000;
//create prompt trade in of old forklift
var forkTrd = prompt("How much will we get for a trade?");
//create cond for no info
if(forkTrd === ""){
    var forkTrd2 = prompt("You did not offer us any money!");
}else{
    //
}
//create prompt for bank loan
var bnkLoan = prompt("How much will the bank loan us?");
//create cond for no info
if(bnkLoan === ""){
    bnkLoan2 = prompt("You need to enter an amount.");
}else{
    //

}
// create var for figures
var bnkTrd = (bnkLoan + forkTrd) || (bnkLoan2 + forkTrd2);
var bnkTrd2 = (bnkLoan + forkTrd2) || (bnkLoan2 + forkTrd);
//create cond to see if we can afford forklift
if((forkCost < bnkTrd + forkBud) || (forkCost < bnkTrd2 + forkBud)){
    alert("We can buy a forklift!");
}else{
    alert("We need to wait to buy a forklift!");
}

