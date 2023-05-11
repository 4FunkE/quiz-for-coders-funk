//click start button

// timer starts

// questions presentation 0,1,2,3,4; wrong answer subtract time&say wrong&next; right answer say correct show next

//all questions answered or time 0 = all finished enter intitails 

var startingMessage = document.querySelector(".starting-message");
var startButton = document.querySelector(".start-button");
var allQuestions = document.querySelector(".all-questions");

//questions 0,1,2,3,4
var questionOne = document.querySelector(".questions-zero");
var allOneChoices = document.querySelector(".questions-zero-answer-choices");
var optionOne0 = docuemnt.querySelector("populate0-option");


var questions = [
    {
        title: "What does API stand for?",
        options: ["Appliance Power Initializer", "Application Problem Insider", "Apple Pineappeles Icecream", "Application Programing Interface"],
        correct: "Application Programing Interface",
    },
    {
        title: "What Does DOM stand for?",
        options: ["Don't Open Mayonnaise", "Document Object Model", "Data Object Monitor", "Definitely Open Mayonnaise"],
        correct: "Document Object Model",
    },
    {
        title: "What can you achieve with DOM traversal?",
        options: ["Use commands on the console.log to work your way down from parents to children.", "Can target element ID's", "an add a class and style.", "All of the Above...Duh"],
        correct: "All of the Above...Duh",
    },
    {
        title: "When setting a timer interval, how many seconds are in 1000 milliseconds?",
        options: ["0.1 second", "1 second", "10 seconds", "1000 seconds"],
        correct: "1 second",
    },
    {
        title: "Which is an example of a Boolean?",
        options: ["a bull type", "23", "true", "A cow with long horns"],
        correct: "true",
    },
]