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
/* function fight() {
    // this says that when the function "fight" is called, the window should show us an alert with the text within the quotes "the fight has begun"
    window.alert("The fight has begun!");
} */
// the function will contain everything within the braces {}



// start of game code

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can log multiple variabls at once
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {

        // start of big while loop
    while (enemyHealth > 0) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this batttle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight)

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") { // big if start
        // remove enemy's health by subtracting the amount set in playerAttack

    

    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth =  enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
     console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

    // check enemy's healtth
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

    }   
    
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }    

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

} // big if end


else if (promptFight === "skip" || promptFight === "SKIP"){ // big else if start
    // confirm the player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money
        playerMoney = playerMoney - 2;
    }
    // if no (false), as again by running the fight function
    else {
        fight();
    }

    
} // big else if end

else {
    window.alert("You need to choose a valid option. Try again!");
}
};

} // end of big while loop


for(var i = 0; i < enemyNames.length; i++) {
  
    // made a local variable
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
  }



