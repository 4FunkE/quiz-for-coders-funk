//variables for classes in header
var highScoreBtn = document.querySelector(".high-score-btn");
var timerCounter = document.querySelector(".timer-counter");
var startingMessage = document.querySelector(".starting-message");
var startButton = document.querySelector(".start-button");
//question variables 0,1,2,3,4
var allQuestions = document.querySelector(".all-questions");
var populatesQuestionsAnswers = document.querySelector(".populate-questions-options");
var correctWrong = document.querySelector("#positive-neg-line");
//The "finished" section variables
var finished = document.querySelector(".finished");
var formInitials = document.querySelector(".enter-initials");
var yourFinalScore = document.querySelector("#your-final-score");
var initialBox = document.querySelector("#initial-box");
//div highscore button link
var highScoresDiv = document.querySelector(".highscores");
var savedInitials = document.querySelector("#pushed-initial-list");
var backBtn = document.querySelector(".Back-to-start");
var clearBtn = document.querySelector(".clear-scores");
//The questions
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

var timeCount = 60;
var finalScore = 0;
var firstQuestion = 0;
var gameEnded = true;

//event listeners for buttons
startButton.addEventListener("click", function() {
    start();
    showQuestion();
})
highScoreBtn.addEventListener("click", function() {
    showHighScores();
});
backBtn.addEventListener("click", function() {
    goBack();
});
clearBtn.addEventListener("click", function() {
    localStorage.removeItem("highScores");
    renderHighScores();
});

//Game start
function gameLoadPage() {
    finished.style.display = "none"; 
    highScoresDiv.style.display = "none";
}
gameLoadPage();

//when click start - Timer starts
function startTimer() {
    var timerInterval = setInterval(function() {
        timeCount--;
        timerCounter.textContent = timeCount + " seconds left!";

        if(gameEnded === true) {
            clearInterval(timerInterval); //stop
            return;
        }
        if(timeLeft < 1) {
            clearInterval(timerInterval); //stop
            endGame();
        }

        timerCounter.textContent = timeCount;

    }, 1000);
    return;
}

//when click start-first question
function start() {
    startingMessage.style.display = "none";
    finished.style.display = "none";
    highScoresDiv.style.display = "none";
    firstQuestion = 0
    startTimer();
};

//make questions
function showQuestion() {
    gameEnded = false;
    var question = questions[firstQuestion];
    allQuestions.textContent = question.title;
  
    // Clear previous answer choices
    populatesQuestionsAnswers.innerHTML = "";
  
    // Create and append new answer choice buttons
    question.options.forEach(function(choice, index) {
      var button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", function() {
        checkAnswer(index);
      });
      populatesQuestionsAnswers.appendChild(button);
      allQuestions.appendChild(populatesQuestionsAnswers);
    });
  }

//When User is incorrect / When User is correct
function checkAnswer(answerIndex) {
    //make it display
    correctWrong.style.display = "block";
    setTimeout(function () {
        correctWrong.style.display = 'none';
    }, 1000);

    // check if its right, if not then oops
    if (questions[firstQuestion].correct == questions[firstQuestion].options[answerIndex]) {
        correctWrong.textContent = "Correct!"; 
        finalScore = finalScore + 1;
    } else {
        timeCount = timeCount - 5;
        correctWrong.textContent = "Oops";
    }

    //Next Question
    if (firstQuestion < questions.length - 1 ) {
        firstQuestion++;
        showQuestion();
    } else {
        endGame();
    }
};

//Show high scores
function showHighScores() {
    startingMessage.style.display = "none";
    allQuestions.style.display = "none";
    finished.style.display = "none";
    highScoresDiv.style.display = "block";
    renderHighScores();
}

//High scores populate from local storage
function renderHighScores() {
    savedInitials.innerHTML = "";
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Create list items to display them
    highScores.forEach(function(score) {
        var listItem = document.createElement("li");
        listItem.textContent = score.initials + " - " + score.score;
        savedInitials.appendChild(listItem);
    });
}

formInitials.addEventListener("submit", function(event) {
    //Stop default setting in browser
    event.preventDefault();
    var initials = initialBox.value.trim();

    if (initials !== "") {
        //store initials in an object
        var storedData = {
            initials: initials,
            score: finalScore
        };

        //highscore in local storage, add to array, sort the scores
        var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        highScores.push(storedData);
        highScores.sort(function(a,b) {
            return b.score - a.score;
        });
        //new scores in local storage
        localStorage.setItem("highScores", JSON.stringify(highScores));
        initialBox.value = "";
        showHighScores();
    }
});

function goBack() {
    finished.style.display = "none";
    startingMessage.style.display = "block";
    allQuestions.style.display = "none";
    highScoresDiv.style.display = "none";

    location.reload();
}

//when all 5 questions done - finished html appears
function endGame() { 
    yourFinalScore.textContent = "Your score is: " + finalScore;
    gameEnded = true;

    //hiding html
    startingMessage.style.display = "none";
    allQuestions.style.display = "none";
    highScoresDiv.style.display = "none";
    finished.style.display = "block";

    return;
}