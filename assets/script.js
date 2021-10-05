// elements i need to grab 
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#startButton");
startButton.addEventListener("click", startQuiz);

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
    }
]

// start the quiz
function startQuiz() {
    console.log("started")
    currentQuestionIndex = 0;
    timerCount = 10;
    placeQuestionsOnPage(currentQuestionIndex);
    placeAnswersOnPage(currentQuestionIndex);
    startButton.disabled = true;
    startTimer();
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

function checkAnswer(event) {
    const selectAnswer = questions[currentQuestionIndex].correct;
    if (event.target.textContent === selectAnswer) {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            console.log("game over");
        }
        else {
            placeQuestionsOnPage(currentQuestionIndex);
            placeAnswersOnPage(currentQuestionIndex);
        }
    }
};


var selectAnswer = document.querySelector(".answersContainer");
selectAnswer.addEventListener("click", checkAnswer);

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
    //   if (timerCount >= 0) {
    //     // Tests if win condition is met
    //     if (isWin && timerCount > 0) {
    //       // Clears interval and stops timer
    //       clearInterval(timer);
    //       winGame();
    //     }
    //   }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        // loseGame();
      }
    }, 1000);
  };


