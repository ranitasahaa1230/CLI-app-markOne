const readLineSync = require("readline-sync");
const chalk = require("chalk");
const { seashell } = require("color-name");

console.log(
  chalk.underline.bgGrey("Let's play a game: ") +
    chalk.yellow("How much do you know me? ")
);

let score = 0;
const userName = readLineSync.question("Namaste🤩, What's your name? ");
console.log("Welcome, " + chalk.blue(userName));

function play(question, answer) {
  const userAnswer = readLineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Correct Answer :)"));
    score++;
  } else {
    console.log(chalk.red("Incorrect Answer :("));
    console.log(chalk.green("The Correct answer is : " + answer));
  }
  console.log(" Current Score is: " + score);
  console.log("-----------------------------------");
}

const questions = [
  (q1 = {
    question: "What is my full name? ",
    answer: "Ranita Saha",
  }),
  (q2 = {
    question: "Which city do I live in? ",
    answer: "Kolkata",
  }),
  (q3 = {
    question: "What is my birthdate? ",
    answer: "9",
  }),
  (q4 = {
    question: "What is my sun sign? ",
    answer: "Scorpio",
  }),
  (q5 = {
    question: "What is my Mother Tongue? ",
    answer: "Bengali",
  }),
  (q6 = {
    question: "Who is my favorite superhero? ",
    answer: "Spider-Man",
  }),
  (q7 = {
    question: "What is my age? ",
    answer: "22",
  }),
  (q8 = {
    question: "Where do I work? ",
    answer: "PwC India",
  }),
];

for (var i = 0; i < questions.length; i++) {
  const currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

const highScores = [
  {
    name: "Aishani Seal",
    score: 6,
  },
  {
    name: "Nidhi",
    score: 7,
  },
];

console.log(chalk.white.bgCyan.bold(`Your Final Score is : ${score}`));

for (var i = 0; i < highScores.length; i++) {
  const scores = highScores[i];
  if (score >= scores.score) {
    console.log(chalk.yellow("YAASSS! Congratulations " +
        userName +
        "😍 " +
        ", " +
        "You have beaten the high scorers! Ping me and I'll update it!🎉 "));
  } else {
  console.log(chalk.red("Check out the high scores, you didn't beat any of them!😕")); 
    console.log(scores.name, ":", scores.score);
   
  }

}

