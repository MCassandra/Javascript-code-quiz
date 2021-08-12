// elements i need to grab 
var startButton = document.querySelector("#startButton");
var answerButtons = document.querySelectorAll ("button")
// var score=0;
// var timeleft=0;
startButton.addEventListener("click", startQuiz)

let currentQuestionIndex   

// questions for the quiz
var questions=[
    {
    questionText:"What is a variable?",
    answers:["A keyword assigned a value to hold information", "A vacation", "a suitcase", "a letter"],
    correct:"A keyword assigned a value to hold information"
    },
    {
    questionText:"Which of the following are data types?",
    answers:["String", "Boolean", "Number", "All of the above"],
    correct:"All of the above"
    },
    {
    questionText:"You can store groups of data in a single variable called a/an",
    answers:["method", "array", "console", "css"],
    correct:"array"
    }
]





function startQuiz(){
    console.log ("started")
    currentQuestionIndex=0
    placeQuestionsOnPage(currentQuestionIndex);
    placeAnswersOnPage(currentQuestionIndex);


}
function placeQuestionsOnPage(index){
    var questionText = questions[index].questionText;
    // var answers= questions.answers[index];
    // var correctAnswerIndex= questions.correctAnswerIndex;

    var questionEl=document.getElementById("questions")
    questionEl.innerHTML=questionText
    // var answersEl=document.querySelector("buttons")
    // answersEl.innerHTML=answers
}

function placeAnswersOnPage(index){
    var answerText = questions[index].answers;
    var answer1 = document.getElementById("btn1");
    var answer2 = document.getElementById("btn2");
    var answer3 = document.getElementById("btn3");
    var answer4 = document.getElementById("btn4");

    answer1.textContent = answerText[0];
    answer2.textContent = answerText[1];
    answer3.textContent = answerText[2];
    answer4.textContent = answerText[3];

};

// }

// part of teacher demo: Loop through the questions and get user's response
for (let i = 0; i<questions.length; i++){
    var response=placeQuestionsOnPage(questions[i].questionText)
    if (reponse === questions[i].correct){
        // score++;
        alert("correct");
    }else (reponse !=questions[i].answers)
        // score--;
        alert("wrong");
    }


