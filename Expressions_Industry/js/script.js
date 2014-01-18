//David Kimball 1-18-14 Expressions_Industry

//average amount of orders processed per month
//create array to show calculate number of orders
var amtOrd = [8, 12, 6, 23, 11];
//create variable to calculate total amount
var totOrd = amtOrd[0] + amtOrd[1] + amtOrd[2] + amtOrd[3] + amtOrd[4];
//create constant for avg orders per week
const avgOrd = totOrd / 5;
//create prompt for number of weeks
var noWks = prompt("Please enter the number of weeks");
console.log(totOrd);
