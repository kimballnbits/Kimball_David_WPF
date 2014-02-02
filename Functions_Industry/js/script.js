// David Kimball 1-31-14 Functions Industry

//Calculate cost of overhead for the warehouse and budget for new heaters
//create array for cost of gas
var gasCst = [125, 75, 100, 150];
//create array for cost of electric
var elcCst = [75, 75, 100, 150];
//create var for rent
var rntCst = 1900;
//create var to avg gas
var avgGas = (gasCst[0] + gasCst[1] + gasCst[2] + gasCst[3]) / 4;
//create var to avg electric
var avgElc = (elcCst[0] + elcCst[1] + elcCst[2] + elcCst[3]) / 4;
//create function to process costs
function ttlCst(){
    var ttlAmt = rntCst + avgGas + avgElc;
    console.log("We pay an average of $" + ttlAmt + " per month to maintain the warehouse.");
    return ttlAmt;
}
//call function
ttlCst();
//create prompt for cost of new heaters
var heatCst = prompt("How much is it to purchase and install new heaters?");
//create prompt for budget for heaters
var heatBdg = prompt("What is our budget for new heaters?");
//create var for overall cost
var ovrCst = (ttlCst + heatCst);
//create if else else/if for vars
if(heatBdg < heatCst) {
    console.log("We need more quotes before we make a decision!");
}else if(heatBdg < ovrCst) {
    console.log("We need to wait to purchase new heaters.");
}else{
    console.log("We can get purchase new heaters!");
}