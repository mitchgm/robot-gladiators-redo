// window.alert("This is an alert! JavaScript is running!");

// This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
//var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
//var numberIntegerDataType = 10;
//var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false.
//var booleanDataType = true;



// a funtion always needs parentheses () even if they are empty
// this creates a function named "fight"
function fight() {
    // this says that when the function "fight" is called, the window should show us an alert with the text within the quotes "the fight has begun"
    window.alert("The fight has begun!");
}
// the function will contain everything within the braces {}

// this allows the player response to be stored as a variable, smartly titled playerName
var playerName = window.prompt("What is your robot's name?");

console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);

//fight();