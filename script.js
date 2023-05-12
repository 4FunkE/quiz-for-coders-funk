//click start button

// timer starts

// questions presentation 0,1,2,3,4; wrong answer subtract time&say wrong&next; right answer say correct show next

//all questions answered or time 0 = all finished enter intitails var highScore = document.querySelector(".");

//creating variables for classes in header
var highScoreBtn = document.querySelector(".high-score-btn");
var timerCounter = document.querySelector(".timer-counter");
var startingMessage = document.querySelector(".starting-message");
var startButton = document.querySelector(".start-button");
//main
var allMainEl = document.querySelector(".all-main-elements");
//question variables 0,1,2,3,4
var allQuestions = document.querySelector(".all-questions");
var populatesQuestionsAnswers = document.querySelector(".populate-questions-options");
//section finished
var finished = document.querySelector(".finished");
var formInitials = document.querySelector(".enter-initials");
var finalScore = document.querySelector("#your-final-score");
var initialBox = document.querySelector("#initial-box");
//div highscore button link
var highScore = document.querySelector(".highscores");
var savedInitials = document.querySelector("#pushed-initial-list");
var backBtn = document.querySelector(".Back-to-start");
var clearBtn = document.querySelector(".clear-scores");

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
];

//setting game parameters
//timer
var timeCount = 75;
var restTimer = 0;
//score
var finalScore = 0;
var winpoints = 0;
var losepoints = 0;
var isWin = false;
//questions
var firstQuestion = 0;
var typedInitials = "";

//functions following criteria WHEN & THEN

//when click start - Timer starts
function startTimer() {
    var timerInterval = setInterval(function() {
        timeCount--;
        timerCounter.textContent = timeCount + " seconds left!";
        
        if(timeCount === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function finished var finished = document.querySelector(".finished");var formInitials = document.querySelector(".enter-initials");var finalScore = document.querySelector("#your-final-score");var initialBox = document.querySelector("#initial-box");
            FinishedMessage();
          } 
        }, 1000);
}


//when click start-first question
function start() {
    startingMessage.style.display = "none";
    allQuestions.style.display = "block";
    firstQuestion = 0
    startTimer();
    showQuestion(questionNumber);
};

startButton.addEventListener("click", function() {
    startTimer();
})

//when answer question-next question
function showQuestion() {
    allQuestions.textContent = questions[0].title;
    populatesQuestionsAnswers.textContent = questions[0].options[];
};

//when i am incorrect - times will subtract

//when all 5 questions done - finished html appears

//when time reachers 0 - finished html appears

