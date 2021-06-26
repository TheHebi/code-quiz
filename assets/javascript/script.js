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
let questionsArray = [
    {
        question: "Which is NOT a commonly used data type?",
        answer1: "Strings",
        answer2: "Boolean",
        answer3: "Numbers",
        correctAnswer: "Alerts"
    },
    {
        question: "How do you link a JavaScript file to your HTML?",
        answer1: "<js>",
        answer2: "<link>",
        answer3: "<scripting>",
        correctAnswer: "<script>"
    },
    {
        question: `How do you write "Hello There" in an alert box`,
        answer1: "msg(Hello There);",
        answer2: `alertBox("Hello There)`,
        answer3: `confirm("Hello Ther")`,
        correctAnswer: `alert("Hello There");`
    },
    {
        question: "How do you start an if statement for if 1 is strictly equal to 5",
        answer1: "if(i!=5)",
        answer2: "if(i<5)",
        answer3: "if(i--5)",
        correctAnswer: "if(i===5)"
    },
    {
        question: "What is the correct way to write an array?",
        answer1: `let array = "red", "green", "blue`,
        answer2: `let array = ("red", "green", "blue")`,
        answer3: `let array = [red], [green], [blue]`,
        correctAnswer: `let array = ["red", "green", "blue"]`
    },
]
console.log(questionsArray)