var quiz_questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "strings"
    },
    {
        question: "The condition in an if/else statement is enclosed within____",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        choices: ["commas", "quotes", "stylesheet", "boolean"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ____.",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];


var startScore = 0;
var noTime = 0;
var timer;

function startQuiz() {
    noTime = 75;
    document.getElementById("noTime").innerHTML = noTime;

    timer = setInterval(function() {
        noTime--;
        document.getElementById("noTime").innerHTML = noTime;
        if (noTime = 0) {
            quizOver();
        }
    }, 1000);
}
