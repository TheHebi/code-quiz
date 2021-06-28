// global vars
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// event listener for clear button to clear local storage
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// pulls local storage for highscores list
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
// if scores arent empty
if (allScores !== null) {
    
    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// goback button to go back to index.html to restart quiz
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});