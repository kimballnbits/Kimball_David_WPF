//David Kimball 1-25-14 Conditionals Personal

//Calculate whether or not need milk
//create var to show expiration
const todDt = "1-26-14";
//create prompt for amount of milk left
var milkAmt = prompt("How much milk is left? \nPlease enter a percentage. Ex. 25 ");
//create var to show amount of milk left
var milkBuy = 100 - milkAmt ;
//create prompt for expiration date
var expDt = prompt("when does the milk expire? \nEx. 1-28-14");
//create if else
if(todDt > expDt){
    alert("You need to buy milk! Throw that stuff away!");
} else if(milkBuy > 70){
    alert("You should buy milk! You are getting low!");
}else{
    alert("You do not need to buy milk right now!");
}



