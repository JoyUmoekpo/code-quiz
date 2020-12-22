var cur = 0;
var correct = 0;
var quiz, current, question, choices, choiceA, choiceB, choiceC, choiceD;
var my_questions = [
    {
        question: "What HTML element do we use for JavaScript?",
        choiceA: "style",
        choiceB: "javascript",
        choiceC: "css",
        choiceD: "coffeescript",
        answer: "javascript"
    },
    {
        question: "Which is commonly prefered, an internal or external stylesheet?",
        choiceA: "an internal stylesheet",
        choiceB: "an external stylesheet",
        choiceC: "neither is preferred",
        choiceD: "Why does it matter?",
        answer: "an external stylesheet"
    },
    {
        question: "How would we display an alert?",
        choiceA: "prompt('')",
        choiceB: "confirm('')",
        choiceC: "text('')",
        choiceD: "alert('')",
        answer: "alert('')"
    },
    {
        question: "Should we try to use semantic HTML whenever we can?",
        choiceA: "Yes",
        choiceB: "No",
        choiceC: "Not sure",
        choiceD: "Why bother?",
        answer: "Yes"
    },
    {
        question: "What should you do when you are frustrated with your code?",
        choiceA: "Smash your computer",
        choiceB: "Take a deep breath or take a break",
        choiceC: "Give up",
        choiceD: "Ask your friend to finish your code for you",
        answer: "Take a deep breath or take a break"
    }
];


function get(x) {
    return document.getElementById(x);
}

function showQuestion() {
    quiz = get("quiz");
    if (cur >= my_questions.length) {
        quiz.innerHTML = "<h2>You got " + correct + " of " + my_questions.length + " questions correct</h2>";
        get("quiz_status").innerHTML = "Quiz completed";
        cur = 0;
        correct = 0;
        return false;
    }

    get("quiz_status").innerHTML = "Question " + (cur + 1) + " of " + my_questions.length;

    question = my_questions[cur].question;
    choiceA = my_questions[cur].choiceA;
    choiceB = my_questions[cur].choiceB;
    choiceC = my_questions[cur].choiceC;
    choiceD = my_questions[cur].choiceD;

    quiz.innerHTML =  question + "</br>";

    quiz.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + choiceA + "</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='B'> " + choiceB + "</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + choiceC + "</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='D'> " + choiceD + "</label><br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button><br>";
}

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }

    if (choice == my_questions[cur].answer) {
        correct++;
    }
    cur++;
    showQuestion();
}

window.addEventListener("load", showQuestion);
