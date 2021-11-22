// elements i need to grab 
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#startButton");
var score = document.querySelector("#score");
var allScores = [];
var initials = document.getElementById("itinitals")
var storedScores = JSON.parse(localStorage.getItem("userData")); 

startButton.addEventListener("click", startQuiz);

var timer;
var timerCount;
var score=0;
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
    },

]
// The init function is called when the page loads 
function init() {
    getScores();
  }


// start the quiz
function startQuiz() {
    console.log("started")
    currentQuestionIndex = 0;
    timerCount = 60;
    score = 0;
    placeQuestionsOnPage(currentQuestionIndex);
    placeAnswersOnPage(currentQuestionIndex);
    startButton.disabled = true;
    startTimer();
    setScore();
}


function placeQuestionsOnPage(index) {
    var questionText = questions[index].questionText;
    var questionEl = document.getElementById("questions")
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

function setScore() {
    scoreEl.textContent = score;

};

function checkAnswer(event) {
    
    const selectAnswer = questions[currentQuestionIndex].correct;
    if (event.target.textContent === selectAnswer) {
        currentQuestionIndex++;

        if (currentQuestionIndex >= questions.length) {
            console.log("congrats! you finished the quiz");
            endQuiz();
        }
        else {
            placeQuestionsOnPage(currentQuestionIndex);
            placeAnswersOnPage(currentQuestionIndex);
        }
    }
};

// Updates score count on screen and sets score to client storage
saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  var storedScores = {
    score: score.value,
    initials: initials.value,
    
  };
  
  localStorage.setItem("storedScores", JSON.stringify(storedScores));
  
  
  });

// The endQuiz function is called when timer reaches 0
function endQuiz() {
    startButton.disabled = false;
    setScore()
  }


var selectAnswer = document.querySelector(".answersContainer");
selectAnswer.addEventListener("click", checkAnswer);

// // The setTimer function starts and stops the timer and triggers startQuiz() and endQuiz()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  };

  // init();

// reset the quiz
// var resetButton = document.querySelector(".reset-button");

//   function resetQuiz() {
//     // Resets win and loss counts
//     score = 0;
//     // Renders win and loss counts and sets them into client storage
//     setScore()
//   }
//   // Attaches event listener to button
  // resetButton.addEventListener("click", resetQuiz);