//David Kimball 1-18-14 Expressions_Industry

//average amount of orders processed per day, week, month and year
//create array to show number of orders per day
var amtOrd = [8, 12, 6, 23, 11];
//create variable to calculate total amount of orders per day
var totOrd = amtOrd[0] + amtOrd[1] + amtOrd[2] + amtOrd[3] + amtOrd[4];
//create variable for avg orders per day
var avgOrd = totOrd / 5;
//create variable for avg orders per week
var avgWk = avgOrd * 7;
//create var for avg orders per month
var calMth = 365 / 12;
var avgMth = avgOrd * calMth;
//create variable for avg amount of orders per year
var avgYr = avgOrd * 365;
//create prompt for days
var reqDay = prompt("Please enter the number of days to be calculated.");
//create variable to calculate days
var reqAvgOrd = avgOrd * reqDay;
//create prompt for weeks
var reqWks = prompt("Please enter the number of weeks to be calculated.");
//create variable to calculate avg per weeks
var reqAvgWk = reqWks * avgWk;
//create prompt to request months
var reqMth = prompt("Please enter the number of months to be calculated");
//create variable to calculate avg per months
var reqAvgMth = reqMth * avgMth;
//create alert to display gathered data
alert("The average amount of orders done per day is " + avgOrd + ". You asked how many on average are processed in " + reqDay + " days. This is an average of " + reqAvgOrd + " in total. The average per weeks would be " + reqAvgWk + " orders. The average in months is " + reqAvgMth + "orders.");

