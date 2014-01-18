//David Kimball 1-18-14 Expressions Personal

//amount of money spent on each cat per week
//enter amount spent on each item per cat
var wetFood = 3.25;
//create variable for cost of item
var dryFood = 2.50;
//create variable for cost of item
var catLitter = 5.25;
//create variable for cost of item
var catTreats = .75;
// create variable for cost of item
var catToy = 1.00;
//enter constant for total amount each week
const totalAmt = wetFood + dryFood + catLitter + catTreats + catToy;
// create prompt for number of cats
var noCats = prompt("Please enter the number of cats you have.");
// create variable for number of cats
var totCats = totalAmt * noCats;
//create prompt to gather number of weeks
var noWks = prompt("Please enter the amount of weeks");
//create variable that calculates number of weeks by total amount by number of cats
var calcWks = (totalAmt * noCats) * noWks;
//create alert that shows final calculation
alert("I spend $" + totalAmt + " each week per cat. That is $" + totCats + " for each cat. That is equal to $" + calcWks + " for "+ noWks + " weeks for " + noCats + " cats.");



