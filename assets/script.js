// elements i need to grab 
var startButton = document.querySelector("#startButton");
var answerButtons = document.querySelectorAll ("button")
var score=0;
var timeleft=0;
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
    placeQuestionsOnPage(currentQuestionIndex)

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

// function chooseAnswer(){

// }

// part of teacher demo: Loop through the questions and get user's response
for (let i = 0; i<questions.length; i++){
    var response=placeQuestionsOnPage(questions[i].questionText)
    if (reponse === questions.correctAnswerIndex){
        score++;
        alert("correct");
    }else (reponse !=questions[i].answers)
        score--;
        alert("wrong");
    }


