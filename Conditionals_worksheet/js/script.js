//David Kimball 1-22-14 Conditionals Worksheet

//Last chance for gas!
var carEff = 23;
var gasRead = .28;
var tankCap = 20;
var galAvl = tankCap * gasRead;
var amtGas = galAvl * carEff;
if(amtGas > 200){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have " + galAvl + " gallons of gas in your tank, better get gas now while you can!");
}




