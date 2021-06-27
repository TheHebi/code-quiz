// 5 questions with 4 answers each, all inside one array. 
// start button will start timer and populate the #questions <p>, and the #choices <ul> with the answer choices as <li>
// wrong answer removes 5s from timer
// if timer reaches 0 quiz is over
// if all questions answered correctly quiz is over
// score is equal to time left when quiz is over
// when quiz is over present user with input for initials, save initials and score to local storage
// highscores page shows top 5 scores
// when reset button on highscores page is clicked delete scores data from local storage


// questions array
var questions = [
    {
        question: "Which is NOT a commonly used data type?",
        choices: ["Strings", "Alerts", "Boolean", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "How do you link a JavaScript file to your HTML?",
        choices: ["<js>", "<link>","<script>", "<scripting>"],
        answer: "<script>"
    },
    {
        question: `How do you write "Hello There" in an alert box`,
        choices: [`msg(Hello There);`, `alertBox("Hello There)`, `confirm("Hello There")`, `alert("Hello There");`],
        answer: `alert("Hello There");`
    },
    {
        question: "How do you start an if statement for if 1 is strictly equal to 5",
        choices: ["if(1===5)", "if(i!=5)", "if(i<5)", "if(i--5)"],
        answer: "if(i===5)"
    },
    {
        question: "What is the correct way to write an array?",
        choices: [`var array = "red", "green", "blue`, `var array = ("red", "green", "blue")`, `var array = [red], [green], [blue]`, `var array = ["red", "green", "blue"]`],
        answer: `var array = ["red", "green", "blue"]`
    },
]
console.log(questions)

