let score = 0;
const playerName = prompt ("Enter player name: ");
let wantsToReplay = false;

const questions = [
    {
        question: "1. What keyword is used to declare a constant variable in JavaScript? ", 
        answer: "const"
    },
    { 
      question: "2. What data type is returned by typeof 42? ", 
      answer: "number"
    },
    { 
      question: "3. True or False: JavaScript is the same as Java. ", 
      answer: "false"
    },
    { 
      question: "4. Which operator is used for string concatenation? (+, -, *, /)? ", 
      answer: "+"
    }
]


    score = 0;

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].question).toLowerCase().trim();
    let correctAnswer = questions[i].answer.toLowerCase();


    if (userAnswer === correctAnswer) {
        console.log("Correct!");
        score++;
    } else {
        console.log("Incorrect. The correct answer is: " + questions[i].answer);
        incorrect.push(questions[i].question);
    }
}



console.log(`Quiz complete, ${playerName}!`);
console.log(`Your total score is: ${score}/${questions.length}`);

