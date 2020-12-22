function startQuiz() {    
    noTime = 100;
    document.getElementById("starter").innerHTML = noTime;

    time = setInterval(function() {
        noTime--;
        document.getElementById("starter").innerHTML = noTime;
        if (noTime <= 0) {
            clearInterval(time);
            quizOver();
        }
    }, 1000);
    showQuestion();
};

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
    },
];

var cur = 0;
var correct = 0;

function get(x) {
    return document.getElementById(x);
}

function Question() {
    quiz = get("quiz");
    if (cur >= my_questions.length) {
        quiz.innerHTML =  question + "</br>";
        quiz.innerHTML = "<h2>You are done!</h2>";
        return false;
    }

    question = my_questions[cur].question;
    choiceA = my_questions[cur].choiceA;
    choiceB = my_questions[cur].choiceB;
    choiceC = my_questions[cur].choiceC;
    choiceD = my_questions[cur].choiceD;
    answer = my_questions[cur].answer;

    quiz.innerHTML =  question + "</br>";

    quiz.innerHTML += "<label> <input value='A' name='choices' type='radio' required> " + choiceA + "</label><br>";
    quiz.innerHTML += "<label> <input value='B' name='choices' type='radio' required> " + choiceB + "</label><br>";
    quiz.innerHTML += "<label> <input value='C' name='choices' type='radio' required> " + choiceC + "</label><br>";
    quiz.innerHTML += "<label> <input value='D' name='choices' type='radio' required> " + choiceD + "</label><br><br>";
    quiz.innerHTML += "<button onclick='review()'>Submit Answer</button><br>";
}

function review() {
    options = document.getElementsByName("choices");
    for (var i = 0; i < options.length; i++) {
        if (options[i]) {;
        }
    }

 
    cur++;
    Question();
}

window.addEventListener("load", Question);
