// David Kimball 1-31-14 Functions Personal

//Calculate the ability to afford medical insurance
//create prompt for amt of money avl for ins
var amtAvl = prompt("What is the maximum amount of money you can afford for insurance per month?");
//create prompt for amt of ins
var amtIns = prompt("What is the cost for insurance per year?");
//create function to process change from mth to yr
function forYr(){
    var ttlYr = amtAvl * 12;
    console.log("You can afford to spend $" + ttlYr + " per year for insurance.");
}
// call function
forYr();
//create if/else for function calc and availability
if(amtIns < amtAvl){
    console.log("You can afford insurance!");
}else{
    console.log("You must seek government assistance for insurance.");
}
