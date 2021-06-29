// 5 questions with 4 answers each, all inside one array. 
// start button will start timer and populate the #questions <p>, and the #choices <ul> with the answer choices as <li>
// wrong answer removes 10s from timer
// if timer reaches 0 quiz is over
// if all questions answered correctly quiz is over
// score is equal to time left when quiz is over
// when quiz is over present user with input for initials, save initials and score to local storage
// highscores page shows top scores
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
        choices: ["if(i===5)", "if(i!=5)", "if(i<5)", "if(i==5)"],
        answer: "if(i===5)"
    },
    {
        question: "What is the correct way to write an array?",
        choices: [`var array = "red", "green", "blue`, `var array = ("red", "green", "blue")`, `var array = [red], [green], [blue]`, `var array = ["red", "green", "blue"]`],
        answer: `var array = ["red", "green", "blue"]`
    },
]
console.log(questions)

// global vars
var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var quizQuestions = document.querySelector("#quizQuestions");
var wrapper = document.querySelector("#wrapper");

// 15 seconds per question:
var secondsLeft = 75;
// interval time
var holdInterval = 0;
// time lost for answering question incorrect
var penalty = 10;
// Creates new element (ul)
var ulCreate = document.createElement("ul");

// renders questions and choices to the page
function generate(questionIndex){
    quizQuestions.textContent = "";
    ulCreate.textContent = "";
    for(var i = 0; i < questions.length; i++){
        // grabs the question based on index value
        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].choices;
        quizQuestions.textContent = userQuestion;
    }
    // appends choices
    userChoices.forEach(function(newItem){
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quizQuestions.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        // runs compare function when answer is clicked on
        listItem.addEventListener("click", (compare));
    })
}

// compares choice to answer
function compare(event){
    var element = event.target;
    if(element.matches("li")){
        // creating div for response to answer
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv")
        // if correct
        if(element.textContent == questions[questionIndex].answer){
            score++;
            createDiv.textContent = "Correct"
        //if incorrect 
        }else{
            // penalty kicks in. 10 seconds lost
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = `Incorrect, the answer is ${questions[questionIndex].answer}`;
        }
    }
    // advance question index to generate next question
    questionIndex++;
    // if last question answered will apend last page with user stats
    if(questionIndex >= questions.length){
        finished();
        createDiv.textContent = `Quiz finished, you got ${score} / ${questions.length} correct.`;
    }else{
        generate(questionIndex);
    }
    quizQuestions.appendChild(createDiv);
}

// adds p tag with core info and appends submit form
function finished(){
    quizQuestions.textContent = "";
    timer.textContent = "";

    // quiz finished heading
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Quiz Finished";
    quizQuestions.appendChild(createH1);

    // appends p tag
    var createP = document.createElement('P');
    createP.setAttribute("id", "createP");
    quizQuestions.appendChild(createP);

    // converts time left into score for scoreboard
    if(secondsLeft >= 0){
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = `Your final score is ${timeRemaining}`;
        quizQuestions.appendChild(createP2);
    }

    // append label for input
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials";
    quizQuestions.appendChild(createLabel);

    // input field for initials
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "createInput");
    createInput.textContent = "";
    quizQuestions.appendChild(createInput);

    // submit button for input
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "createSubmit");
    createSubmit.textContent = "Submit";
    quizQuestions.appendChild(createSubmit);

    // clicking on submit will send initials and score to local storage
    createSubmit.addEventListener("click", function(){
        var initials = createInput.value;
        if(initials === null){
            console.log("no initials submitted")
        }else{
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null){
                allScores = [];
            }else{
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // change page to highscores.html
            window.location.replace("./highscores.html");
        }
    });
}

// starts timer and quiz when button is clicked
timer.addEventListener("click", function(){
    // checking against zero because thats the initial interval time, prevents future clicks during quiz
    if(holdInterval === 0){
        holdInterval = setInterval(function(){
            secondsLeft--;
            currentTime.textContent = `Time left: ${secondsLeft}`
            if(secondsLeft <= 0){
                clearInterval(holdInterval);
                finished();
                currentTime.textContent = "Times up."
            }
        },1000)
    }
    generate(questionIndex)
});