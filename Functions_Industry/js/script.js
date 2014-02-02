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

}
//call function
ttlCst();
