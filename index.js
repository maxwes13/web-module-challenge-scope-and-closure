// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *  counter1 has the variable inside the function.  This means it is within a private scope and 
 *  cannot be called from outside the function.  counter2 has a global variable meaning it will be called
 *  by the function because it looks outside to grab it.  It can also be recalled globally or outside of the function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses closure.  The count variable is inside the function and is called by the counter function nested
 *  inside the counterMaker function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter1 would be useful if you don't want the count resetting when it finishes the function and starts a new one.
 * counter2 would be useful to repeat the function and have a continuous count that doesn't reset when the function
 * is called.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let points = Math.floor(Math.random() * 3);
  return points;

}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, innNum){
  var score = {
    "Tigers": 0,
    "Yankees": 0
  }
  for (let i = 0; i < innNum; i++) {
      score.Tigers += inning();
      score.Yankees += inning();
  }
  return score;
}

console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, innNum2 ) {
      var score = {
      "Tigers": 0,
      "Yankees": 0
    }
    for (let i = 1; i <= innNum2; i++) {
        score.Tigers += inning();
        score.Yankees += inning();
        console.log(`Inning ${i}: ${score.Tigers} - ${score.Yankees}`)
    }
  return console.log(`Final Score: ${score.Tigers} - ${score.Yankees}`)


}

scoreboard(inning, 9)