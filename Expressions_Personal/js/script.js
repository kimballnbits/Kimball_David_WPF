//David Kimball 1-18-14 Expressions Personal

//amount I spend on the cats
//enter amount spent on each item for cats
var wetFood = 6.00;
var dryFood = 4.50;
var catLitter = 7.00;
var catTreats = 1.75;
//enter constant for total amount each week
const totalAmt = wetFood + dryFood + catLitter + catTreats;
//create prompt to gather number of weeks
var noWks = prompt("Please enter the amount of weeks");
//create variable that calculates number of weeks by total amount
var calcWks = totalAmt * noWks;
//add variable for sales tax
var slsTax = calcWks / 10;
//create variable to show amount with sales tax
//create alert that shows final calculation
alert("I spend $" + totalAmt + " each week for my cats. That is equal to $" + calcWks + " for "+ noWks + " weeks.");
console.log(slsTax);

