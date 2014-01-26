//David Kimball 1-25-14 Conditionals Personal

//Calculate whether or not need milk
//create var to show expiration
var milkExp = "1-30-14";
//create prompt for amount of milk left
var milkAmt = prompt("How much milk is left? \nPlease enter a percentage. Ex. 25 ");
//create var to show amount of milk left
var milkBuy = 100 - milkAmt;
//create prompt for expiration date
var expDt = prompt("when does the milk expire? \nEx. 1-28-14");
//create if else
if(milkExp > expDt){
    alert("You need to buy milk! Throw that stuff away!");
} else if(milkBuy > 30){
    alert("You should buy milk! You are getting low!");
}else


console.log(milkBuy);
