var readlinesync = require("readline-sync");
var Score = 0;
var userName = readlinesync.question("What's your name?");
console.log("Welcome "+ userName + " Are you a fan of Marvel. lets play a quiz game on Marvel");



function play(question, answer){
  var userAnswer= readlinesync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right Answer");
    Score = Score+1;
  }else{
    console.log("Wrong Answer")

    Score = Score-1;

  }
  console.log("Current Score is:",Score)
}


var questions = [{
  question: "Which organ of Tony stark is damaged? ",
  answer: "Heart"
}, {
  question: "What was the first film in the Marvel Cinematic Universe? ",
  answer: "Iron Man"
}, {
  question: "Where is Avengers Tower located? ",
  answer: "Newyork"
}, {
  question: "Where is black widow from? ",
  answer: "Russia"
},
{
  question: "Were is Black Panther from? ",
  answer: "Wakanda"
}];

for(var i=0; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,
  currentQuestion.answer)
}

console.log("Your final score is:",Score)




