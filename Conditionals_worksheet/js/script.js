//David Kimball 1-22-14 Conditionals Worksheet

//Last chance for gas!
// will car make it 200 miles on gas left
var carEff = 23;
var gasRead = .28;
var tankCap = 20;
//how many gallons are available
var galAvl = tankCap * gasRead;
//how many miles on how much gas is left
var amtGas = galAvl * carEff;
// if amt of gas equals less than 200 miles
if(amtGas > 200){
    console.log("Yes, you can make it without stopping for gas!");
//if not enough gas
}else{
    console.log("You only have " + galAvl + " gallons of gas in your tank, better get gas now while you can!");
}

//Check the login
//check users info
var useName = "dhk122112";
var usePass = "hiccup";
var corUse = "dhk122112";
var corPass = "Hiccup";
// if user info matches 100% correctly
if(useName === corUse && usePass === corPass){
    console.log("Welcome, " + corUse + "!");
//if username does not match
}else if(useName != corUse){
    console.log("User not found. Try again.");
//if username matches, but password does not
}else if(useName === corUse || usePass != corPass){
    console.log("Password does not match our records.");
}

//Tire pressure I
//show amount of air in tires
var tirePsi = [32, 32, 30, 30];
var accPsi = 34;
var specs;
//conditional for amount of psi
(tirePsi < accPsi) ? console.log("The tires pass spec!") : console.log("Get your tires checked out!");






