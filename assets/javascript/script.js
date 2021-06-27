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
var timeLeft = document.getElementById("timer");
// score starts at zero, gets added to timeLeft later on
var score = 0;
var start = document.getElementById("start-quiz");
var question = document.getElementById("question");
var answers = document.getElementById("choices");
var desc = document.getElementById("desc");
var h1 = document.querySelector("h1");
var questionBox = document.getElementById("question-box")
// timer
var timer = 61;
// penalty for incorrect answer
var penalty = 5;
var questionIndex = 0;
// create element
var ulCreate = document.createElement("ul");
// questions array
var questionsArray = [
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
        choices: [`var array = "red", "green", "blue`, `var array = ("red", "green", "blue")`, `var array = [red], [green], [blue]`, `var array = ["red", "green", "blue"]`],
        answer: `var array = ["red", "green", "blue"]`
    },
]
console.log(questionsArray)

// timer function
function startTimer(){

    var timeInterval = setInterval(function(){
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
    h1.textContent = "";
    desc.textContent = "";
    ulCreate.textContent = "";
    question.textContent = "";
    for(var i = 0; i<questionsArray.length; i++){
        var userQuestion = questionsArray[questionIndex].question;
        var userChoices = questionsArray[questionIndex].choices;
        question.textContent = userQuestion;
    }
    // appending choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionBox.appendChild(ulCreate);
        ulCreate.appendChild(listItem)
        listItem.addEventListener("click", compare)
    })
}

// compare choice to answer
function compare(event){
    var element = event.target
    if(element.matches("li")){
        var createDiv = document.createElement("div")
        createDiv.setAttribute("id", "createDiv")
        if(element.textContent = questionsArray[questionIndex].answer){
            questionIndex++;
            createDiv.textContent = "Correct";
        }else{
            timeLeft - penalty
            createDiv.textContent = "Incorrect";
        }
    }
    if(questionIndex >= questionsArray.length){
        finished();
        createDiv.textContent = `Quiz finished! You got ${score}/${questionsArray.length} correct!`
    }else{
        generate(questionIndex);
    }
    questionBox.appendChild(createDiv);
}

//will append last page
function finished() {
    ulCreate.textContent = "";
    question.textContent = "";
    // heading
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Quiz Finished!"
    questionBox.appendChild(createH1);
    // paragraph
    var createP = document.createElement("p")
    createP.setAttribute("id", "createP")
    questionBox.appendChild(createP);
    if(timeLeft >= 0){
        var timeRemaining = timeLeft;
        var createP2 = document.createElement("p");
        clearInterval()
        createP2.textContent = `Your final score is ${timeRemaining}`
        questionBox.appendChild(createP2)
    }
    // initial
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials";
    questionBox.appendChild(createLabel);

    // input for intiails
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";
    questionBox.appendChild(createInput);

    // submit button
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "submit");
    createSubmit.textContent = "Submit";
    questionBox.appendChild(createSubmit);

    // event listener for submit button, saves intials and score to local storage
    createSubmit.addEventListener("click", function(){
        var initials = createInput.value;
        if(initials === null){
            console.log("NO INITIALS INPUT")
        }else{
            var finalScore = {
                initials: initials,
                score: timeLeft
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScore")
            if (allScores === null){
                allScores = [];
            }else{
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("./highscores.html")
        }
    });
}
// start button to start timer and quiz
start.addEventListener("click", startTimer)
start.addEventListener("click", generate)