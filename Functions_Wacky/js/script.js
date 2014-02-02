//David Kimball 2-1-14 Functions Wacky

//calculate total cost of a video game
//create function showing cost of game
gameCst(60);
//create function to show cost
function ttlCst(c){
    var slsTax = c * .8;
    var ttlCst = c + slsTax;
    console.log("The total cost for a video game is $" + ttlCst + ".");
}
ttlCst();


