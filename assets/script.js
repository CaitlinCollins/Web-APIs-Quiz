var startButtonEl = document.querySelector("#start");
var timerEl = document.querySelector(".timer");
var h1El = document.querySelector("h1");
var h2El = document.querySelector("h2");
var articleEl = document.querySelector("article");
var truffled = document.querySelector("#truffled");
var problem = document.querySelector("problem");
var gary = document.createElement("button");
    gary.innerHTML = "Gary";
var scarn = document.createElement("button");
    scarn.innerHTML = "Scarn";
var beesley = document.createElement("button");
    beesley.innerHTML = "Beesly";
var scott = document.createElement("button");
    scott.innerHTML = "Scott";

// Click event that starts the quiz.
startButtonEl.addEventListener("click", function() {
    firstQ();
});
gary.addEventListener("click", gotProblem);
scarn.addEventListener("click", gotProblem);
beesley.addEventListener("click", gotProblem);
scott.addEventListener("click", getTruffled);

// Function that changes article content to first question upon clicking the button .
function firstQ() {
    startButtonEl.remove();
    h1El.innerHTML = "Question 1";
    h2El.innerHTML = "What is the character Michael's last name?"
    articleEl.appendChild(gary);
    articleEl.appendChild(scarn);
    articleEl.appendChild(beesley);
    articleEl.appendChild(scott);
};

    
function getTruffled() {
    truffled.audioPlay();
}

function gotProblem() {
    problem.audioPlay();
}