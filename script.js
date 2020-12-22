var quiz_questions = [
    {
        question: "What HTML element do we use for JavaScript?",
        options: {
            A: "<style>", 
            B: "<javascript>", 
            C: "<css>", 
            D: "<coffeescript>"
        },
        answer: "<javascript>"
    },
    {
        question: "Which is commonly prefered, an internal or external stylesheet?",
        options: {
            A: "an internal stylesheet", 
            B: "an external stylesheet", 
            C: "neither is preferred", 
            D: "Why does it matter?"},
        answer: "an external stylesheet"
    },
    {
        question: "How would we display an alert?",
        options: {
            A:"prompt("")", 
            B: "confirm("")", 
            C: "text("")", 
            D: "alert("")"},
        answer: "alert("")"
    },
    {
        question: "Should we try to use semantic HTML whenever we can?",
        options: {
            A: "Yes", 
            B: "No", 
            C: "Not sure", 
            D: "Why bother?"},
        answer: "Yes"
    },
    {        
        question: "What should you do when you are frustrated with your code?",
        choices: {
            A: "Smash your computer", 
            B: "Take a deep breath or take a break", 
            C: "Give up", 
            D: "Ask your friend to finish your code for you"},
        answer: "Take a deep breath or take a break"         
    }
];


var startScore = 0;
var noTime = 0;
var currentQuestion = 0;
var timer;

function startQuiz() {    
    noTime = 100;
    document.getElementById("starter").innerHTML = noTime;

    timer = setInterval(function() {
        noTime--;
        document.getElementById("starter").innerHTML = noTime;
        if (noTime <= 0) {
            clearInterval(timer);
            quizOver();
        }
    }, 1000);
    showQuestion();
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function showQuestion() {
    const output = [];
    quiz_questions.forEach(
        ()
    )
}
function showResults() {}
showQuestions();

submitButton.addEventListener('click', showResults);