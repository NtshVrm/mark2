var readLineSync = require('readline-sync');

var score = 0
var userName = readLineSync.question('Enter Your Name? ')

console.log('Hey! ' + userName + ', HOW WELL DO YOU KNOW FORMULA 1?!' );

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer) {
    console.log('Yay,Right Answer!')
    score += 1;
  } else {
    console.log('Oops,Wrong Answer!');
    // score = 0;
  }

  console.log("Your Score is: " +score);
  console.log('---------------');
}

var highScores = [{
  name: 'Max',
  score: 7},
  {name: 'Jack',
  score: 6}
]

var questions = [{
  question: `Which of these drivers has won 7 World Championships?
  A: Lewis Hamilton
  B: Max Verstappen
  C: Sebastian Vettel `,
  answer: 'A'},
  {question: `F1 follows a one shot qualifing format.
  A: True
  B: False
 `,
  answer: 'B'},
  {question: `Which team has the most Constructors Championships?
  A: Williams
  B: Ferrari
  C: Mercedes `,
  answer: 'B'},
  {question: `Which team did Nico Rosberg debut with?
  A: Williams
  B: Sauber
  C: Mercedes `,
  answer: 'A'},
  {question: `Which is the longest circuit on the F1 calender?
  A: Mexico
  B: USA
  C: Belgium `,
  answer: 'C'},
  {question: `Who is the youngest ever race winner?
  A: Sebastian Vettel
  B: Pierre Gasly
  C: Max Verstappen `,
  answer: 'C'},
  {question: `When was the first World Championship held?
  A: 1955
  B: 1965
  C: 1950 `,
  answer: 'C'},
  {question: `Which track hold the record for highest average speed?
  A: Suzuka
  B: Monza
  C: Silverstone `,
  answer: 'B'
}]

for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer);
}
console.log('The Winners are: ');
for(var i=0; i<highScores.length;i++) {
  var currentScore = highScores[i];
  if(score < currentScore.score) {
    console.log(currentScore.name);
  }else {
    console.log(userName);
    console.log('Congrats on Winning!');
  }
}