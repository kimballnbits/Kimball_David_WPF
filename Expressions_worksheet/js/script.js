//David Kimball 1-17-14 Expressions worksheet
//

//dog years
var dogAge = 3;
    const humYears = 7;
//multiply dogAge and humYears
var humAge = dogAge * humYears;
//print out the human age for Sparky
console.log("Sparky is " + humAge + " human years old which is " + dogAge + " in dog years");

// slice of pie pt1
var slicePerPiz = 10;
var peepAt = 13;
var pizOrd = 5;
//multiply slice by no. of pizzas, divide by peeps
var slicePerPeep = slicePerPiz * pizOrd / peepAt;
//print out slice per peep
console.log("Each person ate " + slicePerPeep + " slices of pizza at the party");

//slice of pie pt2
var slicePerPiz = 10;
var peepAt = 13;
var pizOrd = 5;
//multiply slice by no. of pizzas, divide by peeps, modulo for Sparky
var slicePerPeep = slicePerPiz * pizOrd / peepAt;
var sparkyPiz = slicePerPeep % 3;
//print out Sparky's slices
console.log("Sparky got " + sparkyPiz + " slices of pizza");

//average shopping bill
var groc = [61 , 55 , 43 , 38 , 67];
//total amount spent add weekly amounts
var total = groc[0] + groc[1] + groc[2] + groc[3] + groc[4];
//average amount divide total by no. weeks
var avgWeek = total / 5;
//print out avg week
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + avgWeek + " per week");

//
