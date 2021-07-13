function startGame(){

}

function askNextQuestion(){

}

function Response(){
    
}


// teacher demo this code structure in office hours:
var correct=0;
var incorrect=0;
// questions for the quiz
var questions=[
    {
    questionText:"What is a variable?",
    answers:["A keyword assigned a value to hold information", "A vacation", "a suitcase", "a letter"],
    correctAnswerIndex:0,
    },
    {
    questionText:"Which of the following are data types?",
    answers:["String", "Boolean", "Number", "All of the above"],
    correctAnswerIndex:3,
    },
    {
    questionText:"You can store groups of data in a single variable called a/an",
    answers:["method", "array", "console", "css"],
    correctAnswerIndex:1,
    }
]

// Loop through the questions and get user's response
for (var i = 0; i<questions.length; i++){
    var response=showQuestion(questions[i].questionText)
    if (reponse ==questions[i].answers){
        correct++;
        alert("correct");
    }else (reponse !=questions[i].answers){
        incorrect--;
        alert("wrong");
    }
}






var startButton = document.querySelector("#startButton");

startButton.addEventListener("click", function(){
    // if start timer is clicked start quiz and start timer
})