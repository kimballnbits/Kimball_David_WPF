//David Kimball 1-17-14 Expressions worksheet
//

//dog years
var dogAge = 3;
    const humYears = 7;
//multiply dogAge and humYears
var humAge = dogAge * humYears;
//print out the human age for Sparky
console.log("Sparky's age in human years is " + humAge);

// slice of pie pt1
var slicePerPiz = 10;
var peepAt = 13;
var pizOrd = 5;
//multiply slice by no. of pizzas, divide by peeps
var slicePerPeep = slicePerPiz * pizOrd / peepAt;
//print out slice per peep
console.log("Each person gets this many slices of pizza " + slicePerPeep);

//slice of pie pt2
var slicePerPiz = 10;
var peepAt = 13;
var pizOrd = 5;
//multiply slice by no. of pizzas, divide by peeps, modulo for Sparky
var slicePerPeep = slicePerPiz * pizOrd / peepAt;
var sparkyPiz = slicePerPeep % 3;
//print out Sparky's slices
console.log("Sparky would get this many pieces of pizza " + sparkyPiz);