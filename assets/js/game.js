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

// function to generate random numbers
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}
// math floor makes the number round down, math random gives us a decimal numnber. Then multiplies by 21 and adds 40 to give each roboto a random health number at minimum of 40. Maximum of 60.



var fight = function(enemy) {
    
   
        // start of big while loop
    while (enemy.health > 0 && playerInfo.health > 0) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this batttle? Enter 'FIGHT' or 'SKIP' to choose.");
    


         if (promptFight === "skip" || promptFight === "SKIP"){ // big if start
            // confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerInfo.money = Math.max(0, playerInfo.money - 2);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
            // if no (false), as again by running the fight function
            // else {
            //     fight();
            // }

            
        } // big if end

    // if player chooses to fight, then fight
   // else if (promptFight === "fight" || promptFight === "FIGHT") { // big else if start
        // remove enemy's health by subtracting the amount set in playerInfo.attack

    

    // Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

  // Log a resulting message to the console so we know that it worked.
     console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

    // check enemy's healtth
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        break;
    }   
    
    else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

  // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
  var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

  // Log a resulting message to the console so we know that it worked.
    console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

    // check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
    }    

    else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }

} // end of while loop

}; // end of fight function


// else {
//     window.alert("You need to choose a valid option. Try again!");
// }
  // end of big while loop

  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health : 100,
    attack : 10,
    money :10,

    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, 

    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }
        },

        upgradeAttack: function() {
            if (this.money >= 7) {
              window.alert("Upgrading player's attack by 6 for 7 dollars.");
              this.attack += 6;
              this.money -= 7;
            } 
            else {
              window.alert("You don't have enough money!");
            }
        }
};

// you can log multiple variabls at once
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10,14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10,14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10,14)
    }
];

    // function starting a new game
    var startGame = function() {

        // reset player stats
        playerInfo.reset();


        for (var i = 0; i < enemyInfo.length; i++) {
            // if player is still alive, keep fighting
            if (playerInfo.health > 0) {
              // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
              window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
          
              // pick new enemy to fight based on the index of the enemy.names array
              var pickedEnemyObj = enemyInfo[i];
          
              // reset enemy.health before starting new fight
                 
              pickedEnemyObj.health = randomNumber(40, 60);
          
              // use debugger to pause script from running and check what's going on at that moment in the code
              // debugger;
          
              // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
              fight(pickedEnemyObj);

              

             // if player is still alive and we're not at the last enemy in the array
                if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                    // ask player if they want to enter the store 
                    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                    // if yes, call the store function
                    if (storeConfirm) {
                        shop(); 
                    }
                   
                }
            }
            // if player isn't alive, stop the game
            else {
              window.alert('You have lost your robot in battle! Game Over!');
              break;
            }
          } // end of for loop

   // play again
   endGame();
    }; // end of start game function

    // function to end the game
    var endGame = function() {
        // if player is still alive, player wins!
        if (playerInfo.health > 0) {
          window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
        } 
        else {
          window.alert("You've lost your robot in battle.");
        }

        // ask player if they'd like to play again
            var playAgainConfirm = window.confirm("Would you like to play again?");

            if (playAgainConfirm) {
            // restart the game
            startGame();
            } 
            else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
            }
      };

      // Adding the shop
      var shop = function() {
        // ask the player what they would like to do

        var shopOptionPrompt = window.prompt (
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
        );
        // use switch to carry out action
        switch (shopOptionPrompt) {
            case "refill" :
                case "REFILL":
                playerInfo.refillHealth();
           
            break;


            case "upgrade":
                case "UPGRADE":
               playerInfo.upgradeAttack();
                break;



                case "leave":
                    window.alert("Leaving the store.");

                    // do nothing, end function
                    break;
                    default:
                        window.alert("You did not pick a valid option. Try again.")

                         // call shop() again to force player to pick a valid option
                            shop();
                            break;
        }
      }



    // start the game when the page loads
    startGame();



