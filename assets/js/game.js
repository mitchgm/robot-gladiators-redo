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
    while (enemyHealth > 0 && playerHealth > 0) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this batttle? Enter 'FIGHT' or 'SKIP' to choose.");
    


         if (promptFight === "skip" || promptFight === "SKIP"){ // big if start
            // confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerMoney = playerMoney - 2;
                console.log("playerMoney", playerMoney);
                break;
            }
            // if no (false), as again by running the fight function
            // else {
            //     fight();
            // }

            
        } // big if end

    // if player chooses to fight, then fight
   // else if (promptFight === "fight" || promptFight === "FIGHT") { // big else if start
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
        break;
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
        break;
    }    

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

} // big else if end




// else {
//     window.alert("You need to choose a valid option. Try again!");
// }
};  // end of big while loop




  for(var i = 0; i < enemyNames.length; i++) { // start of for loop
    if (playerHealth > 0){
         // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
       window.alert("Welcome to Robot Gladiators! Round " + (i + 1)) ;
    
   
    // made a local variable
     // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
     // reset enemyHealth before starting new fight
    enemyHealth = 50;
     // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;
    fight(pickedEnemyName);
    }

    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break; 
    }
   } // end of for loop



