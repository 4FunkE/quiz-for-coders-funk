//click start button

// timer starts

// questions presentation 0,1,2,3,4; wrong answer subtract time&say wrong&next; right answer say correct show next

//all questions answered or time 0 = all finished enter intitails 

var startingMessage = document.querySelector(".starting-message");
var startButton = document.querySelector(".start-button");
var allQuestions = document.querySelector(".all-questions");

//question 1
var questionOne = document.querySelector(".questions-one");
var allOneChoices = document.querySelector(".questions-one-answer-choices");
var optionOne0 = docuemnt.querySelector("option1.0");
var optionOne1 = docuemnt.querySelector("option1.1");
var optionOne2 = docuemnt.querySelector("option1.2");
var optionOne3 = docuemnt.querySelector("option1.3correct");

//question 2
var questiontwo = document.querySelector(".questions-two");
var alltwoChoices = document.querySelector(".questions-two-answer-choices");
var optiontwo0 = docuemnt.querySelector("option2.0");
var optiontwo1 = docuemnt.querySelector("option2.1correct");
var optiontwo2 = docuemnt.querySelector("option2.2");
var optiontwo3 = docuemnt.querySelector("option2.3");

//question 3
var questionthree = document.querySelector(".questions-three");
var allthreeChoices = document.querySelector(".questions-three-answer-choices");
var optionthree0 = docuemnt.querySelector("option3.0correct");
var optionthree1 = docuemnt.querySelector("option3.1");
var optionthree2 = docuemnt.querySelector("option3.2");
var optionthree3 = docuemnt.querySelector("option3.3");

//question 4
var questionfour = document.querySelector(".questions-four");
var allfourChoices = document.querySelector(".questions-four-answer-choices");
var optionfour0 = docuemnt.querySelector("option4.0");
var optionfour1 = docuemnt.querySelector("option4.1");
var optionfour2 = docuemnt.querySelector("option4.2");
var optionfour3 = docuemnt.querySelector("option4.3correct");

//question 5
var questionfive = document.querySelector(".questions-five");
var allfiveChoices = document.querySelector(".questions-five-answer-choices");
var optionfive0 = docuemnt.querySelector("option5.0");
var optionfive1 = docuemnt.querySelector("option5.1");
var optionfive2 = docuemnt.querySelector("option5.2");
var optionfive3 = docuemnt.querySelector("option5.3correct");