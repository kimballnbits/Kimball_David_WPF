//David Kimball 2-1-14 Functions Wacky

//calculate total cost of a video game
//create var showing cost of game
var gameCst = 60;
//create function to show cost
function ttlCst(){
    var slsTax = gameCst / 8;
    var ttlCst = gameCst + slsTax;
    console.log("The total cost for a video game is $" + ttlCst + ". We have a budget of $70.");
    return ttlCst;
}
//call function
ttlCst();
//create ternary
(ttlCst() < 70) ? console.log("Buy a game!") : console.log("Wait to buy a game for now!");

