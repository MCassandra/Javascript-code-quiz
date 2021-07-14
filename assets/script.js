var startButton = document.querySelector("#startButton");
 
var answerButtons = document.querySelectorAll ("button")

startButton.addEventListener("click", startQuiz)

let currentQuestionIndex   

// teacher demo this code structure in office hours:
var score=0;
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



console.log(questions[0].questionText)

function startQuiz(){
    console.log ("started")
    currentQuestionIndex=0
    placeQuestionsOnPage(currentQuestionIndex)

}
function placeQuestionsOnPage(index){
    var questionText = questions[index].questionText;
    // var answers= questions.answers[index];
    var correctAnswerIndex= questions.correctAnswerIndex;

    var questionEl=document.getElementById("questions")
    questionEl.innerHTML=questionText
    // var answersEl=document.querySelector("buttons")
    // answersEl.innerHTML=answers
}

// function chooseAnswer(){

// }

// Loop through the questions and get user's response
for (let i = 0; i<questions.length; i++){
    var response=placeQuestionsOnPage(questions[i].questionText)
    if (reponse === questions.correctAnswerIndex){
        score++;
        alert("correct");
    }else (reponse !=questions[i].answers)
        score--;
        alert("wrong");
    }


