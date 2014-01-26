//David Kimball 1-25-14 Conditionals Personal

//Calculate whether or not need milk
//create var to show expiration
const todDt = "1-26-14";
//create prompt for amount of milk left
var milkAmt = prompt("How much milk is left? \nPlease enter a percentage. Ex. 25");
//create conditional for no info
if(milkAmt === ""){
    var milkAmt2 = prompt("You forgot to enter an amount!");
}else{
    //
}
//create var to show amount of milk left
var milkBuy = 100 - milkAmt;
var milkBuy2 = 100 - milkAmt2;
//create prompt for expiration date
var expDt = prompt("When does the milk expire? \nEx. 1-28-14");
//create conditional for no info
if(expDt === ""){
    var expDt2 = prompt("You did not enter a date!")
}else{
    //
}
//create conditional for buying milk or not
if(todDt > expDt && todDt > expDt2){
    alert("You need to buy milk! Throw that stuff away!");
} else if(milkBuy > 70 || milkBuy2 > 70){
    alert("You should buy milk! You are getting low!");
}else{
    alert("You do not need to buy milk right now!");
}



