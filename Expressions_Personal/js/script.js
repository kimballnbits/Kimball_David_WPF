//David Kimball 1-18-14 Expressions Personal

//amount I spend on the cats
//enter amount spent on each item per cat
var wetFood = 3.25;
//create variable for cost of item
var dryFood = 2.50;
var catLitter = 5.25;
var catTreats = .75;
//enter constant for total amount each week
const totalAmt = wetFood + dryFood + catLitter + catTreats;
// create prompt for number of cats
var noCats = prompt("Please enter the number of cats you have.");
// create variable for number of cats
var totCats = totalAmt * noCats;
//create prompt to gather number of weeks
var noWks = prompt("Please enter the amount of weeks");
//create variable that calculates number of weeks by total amount by number of cats
var calcWks = (totalAmt * noCats) * noWks;
//create alert that shows final calculation
alert("I spend $" + totalAmt + " each week per cat. That is equal to $" + calcWks + " for "+ noWks + " weeks for " + noCats + " cats.");


