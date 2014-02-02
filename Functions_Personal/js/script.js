// David Kimball 1-31-14 Functions Personal

//Calculate the ability to afford medical insurance
//create prompt for amt of money avl for ins
var amtAvl = prompt("What is the maximum amount of money you can afford for insurance?");
//create prompt for amt of ins
var amtIns = prompt("What is the cost for insurance?");
//create function to process information
function affIns(){
    var amtAft = amtIns - amtAvl;
    return amtAft;
}
//create if/else for function calc and availability
if(affIns > 0){
    console.log("You can afford insurance!");
}else{
    console.log("You must look seek government assistance for insurance.");
}
