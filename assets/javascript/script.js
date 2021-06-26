// 5 questions with 4 answers each, all inside one array. 
// start button will start timer and populate the #questions <p>, and the #choices <ul> with the answer choices as <li>
// wrong answer removes 5s from timer
// if timer reaches 0 quiz is over
// if all questions answered correctly quiz is over
// score is equal to time left when quiz is over
// when quiz is over present user with input for initials, save initials and score to local storage
// highscores page shows top 5 scores
// when reset button on highscores page is clicked delete scores data from local storage

// global vars
let timeLeft = document.getElementById("timer");
// score starts at zero, gets added to timeLeft later on
let score = 0;
let start = document.getElementById("start-quiz");
let question = document.getElementById("question");
let answers = document.getElementById("choices");
let desc = document.getElementById("desc");
let h1 = document.querySelector("h1");
let questionBox = document.getElementById("question-box")
// penalty for incorrect answer
let penalty = 5;
let questionIndex = 0;
// create element
let ulCreate = document.createElement("ul");
// questions array
let questionsArray = [
    {
        question: "Which is NOT a commonly used data type?",
        choices: ["Strings", "Boolean", "Numbers", "Alerts"],
        answer: "Alerts"
    },
    {
        question: "How do you link a JavaScript file to your HTML?",
        choices: ["<js>", "<link>", "<scripting>", "<script>"],
        answer: "<script>"
    },
    {
        question: `How do you write "Hello There" in an alert box`,
        choices: [`msg(Hello There);`, `alertBox("Hello There)`, `confirm("Hello Ther")`, `alert("Hello There");`],
        answer: `alert("Hello There");`
    },
    {
        question: "How do you start an if statement for if 1 is strictly equal to 5",
        choices: ["if(i!=5)", "if(i<5)", "if(i--5)", "if(1===f)"],
        answer: "if(i===5)"
    },
    {
        question: "What is the correct way to write an array?",
        choices: [`let array = "red", "green", "blue`, `let array = ("red", "green", "blue")`, `let array = [red], [green], [blue]`, `let array = ["red", "green", "blue"]`],
        answer: `let array = ["red", "green", "blue"]`
    },
]
console.log(questionsArray)

// timer function
function startTimer(){
    let timer = 60
    let timeInterval = setInterval(function(){
        if(timer>0){
            timer--;
            timeLeft.textContent = timer
        }else{
            timeLeft.textContent = "Times up"
            clearInterval(timeInterval)
            score = timer
        }
    }, 1000);
}

// questions and choices rendered to page
function generate(){
    // clearing the text content for the h1 and description during quiz event 
    // used var instead of let in for statement to let the var be read later
    h1.textContent = "";
    desc.textContent = "";
    for(let i = 0; i<questionsArray.length; i++){
        var userQuestion = questionsArray[questionIndex].question;
        var userChoices = questionsArray[questionIndex].choices;
        question.textContent = userQuestion;
    }
    // appending choices
    userChoices.forEach(function (newItem) {
        let listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionBox.appendChild(ulCreate);
        ulCreate.appendChild(listItem)
        listItem.addEventListener("click", compare)
    })
}


// start button to start timer and quiz
start.addEventListener("click", startTimer)
start.addEventListener("click", generate)