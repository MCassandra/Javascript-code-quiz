var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
let currentQuestionIndex


// questions for the quiz
var questions = [
    {
        questionText: "What is a variable?",
        answers: ["A keyword assigned a value to hold information", "A vacation", "a suitcase", "a letter"],
        correct: "A keyword assigned a value to hold information"
    },
    {
        questionText: "Which of the following are data types?",
        answers: ["String", "Boolean", "Number", "All of the above"],
        correct: "All of the above"
    },
    {
        questionText: "You can store groups of data in a single variable called a/an",
        answers: ["method", "array", "console", "css"],
        correct: "array"
    },
    {
        questionText: "True or False: A string is a series of characters and is surrounded by quotes.",
        answers: ["true", "false"],
        correct: "true"
    },
    {
        questionText: "True or False: Booleans have one value",
        answers: ["true: booleans have one value", "false: booleans have true and false values"],
        correct: "false: booleans have true and false values"
    },
    {
        questionText: "What does a modulus operator (%) return?",
        answers: ["remainder between two numbers", "the sum of two numbers", "the difference of two numbers", "console.log value"],
        correct: "remainder between two numbers"
    },
    {
        questionText: "What are strings enlcosed in?",
        answers: ["curly braces", "brackets", "quotes", "colons"],
        correct: "quotes"
    }
]

// The init function is called when the page loads 
function init() {
    getWins();
    getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
    console.log("started");
    isWin = false;
    currentQuestionIndex = 0;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    placeQuestionsOnPage(currentQuestionIndex);
    placeAnswersOnPage(currentQuestionIndex);
    timerCount = 60;
    startTimer();
}

// The winGame function is called when the win condition is met
function winGame() {
    wordBlank.textContent = "finished";
    winCounter++
    startButton.disabled = false;
    setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
    wordBlank.textContent = "TRY AGAIN!";
    loseCounter++
    startButton.disabled = false;
    setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function placeQuestionsOnPage(index) {
    const questionEl = document.getElementById("questions")
    const questionText = questions[index].questionText;
    questionEl.textContent = questionText;

}

function placeAnswersOnPage(index) {
    let answerText = questions[index].answers;
    let answer1 = document.getElementById("btn1");
    let answer2 = document.getElementById("btn2");
    let answer3 = document.getElementById("btn3");
    let answer4 = document.getElementById("btn4");

    answer1.textContent = answerText[0];
    answer2.textContent = answerText[1];
    answer3.textContent = answerText[2];
    answer4.textContent = answerText[3];

};

// Updates win count on screen and sets win count to client storage
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
        winCounter = 0;
    } else {
        // If a value is retrieved from client storage set the winCounter to that value
        winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
}

function getlosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
        loseCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}

function checkAnswer(event) {
    // var selectAnswer = document.querySelector(".answers-container");
    const selectAnswer = questions[currentQuestionIndex].correct;
    if (event.target.textContent === selectAnswer) {
        currentQuestionIndex++;
        placeQuestionsOnPage(currentQuestionIndex);
        placeAnswersOnPage(currentQuestionIndex);
        isWin=true;
    } else {
        (currentQuestionIndex >= questions.length) 
        console.log("congrats! you finished the quiz");
        loseGame();   
    }

};





// Attach event listener to start button to call startGame function on click

startButton.addEventListener("click", startGame);
// check answer

var selectAnswer = document.querySelector(".answers-container");
selectAnswer.addEventListener("click", checkAnswer);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
    // Resets win and loss counts
    winCounter = 0;
    loseCounter = 0;
    // Renders win and loss counts and sets them into client storage
    setWins()
    setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
