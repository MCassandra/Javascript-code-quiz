var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");


var correctCounter = 0;
var wrongCounter = 0;
var isCorrect = false;
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

// The init function is called when the page loads and grabs scores from local storage
function init() {
    getCorrect();
    getWrong();
}

// starts the quiz when start button clicked
function startQuiz() {
    console.log("started");
    isCorrect = false;
    currentQuestionIndex = 0;
    startButton.disabled = true;
    placeQuestionsOnPage(currentQuestionIndex);
    placeAnswersOnPage(currentQuestionIndex);
    timerCount = 60;
    startTimer();
}


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isCorrect && timerCount > 0) {
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

// Updates correct count on screen and sets win count to client storage
function setCorrect() {
    correct.textContent = correctCounter;
    localStorage.setItem("correctCount", correctCounter);
}

// Updates wrong count on screen and sets lose count to client storage
function setWrong() {
    wrong.textContent = wrongCounter;
    localStorage.setItem("wrongCount", wrongCounter);
}


function getCorrect() {
    // Get stored value from client storage, if it exists
    var storedCorrect = localStorage.getItem("correctCount");
    // If stored value doesn't exist, set counter to 0
    if (storedCorrect === null) {
        correctCounter = 0;
    } else {
        // If a value is retrieved from client storage set the correctCounter to that value
        correctCounter = storedCorrect;
    }
    //Render correct count to page
    correct.textContent = correctCounter;
}

function getWrong() {
    var storedWrong = localStorage.getItem("wrongCount");
    if (storedWrong === null) {
        wrongCounter = 0;
    } else {
        wrongCounter = storedWrong;
    }
    wrong.textContent = wrongCounter;
}

function checkAnswer(event) {
    const selectAnswer = questions[currentQuestionIndex].correct;
    if (event.target.textContent === selectAnswer) {
        currentQuestionIndex++;
        placeQuestionsOnPage(currentQuestionIndex);
        placeAnswersOnPage(currentQuestionIndex);
        isWin=true;
        correctCounter++;
        setCorrect();
    } else {
        wrongCounter++;
        setWrong();   
    };

};





// Attach event listener to start button to call startQuiz function on click

startButton.addEventListener("click", startQuiz);

// check answer event listener
var selectAnswer = document.querySelector(".answers-container");
selectAnswer.addEventListener("click", checkAnswer);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetQuiz() {
    // Resets win and loss counts
    correctCounter = 0;
    wrongCounter = 0;
    // Renders win and loss counts and sets them into client storage
    setCorrect()
    setWrong()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetQuiz);
