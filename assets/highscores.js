var winnersList = $("#winnersList");
var clearScore = $("#clearScore");


function renderScores() {

    // Render a new li for each winner
    for (var i = 0; i < scores.length; i++) {
    var winner = scores[i];

    var li = document.createElement("li");
    li.textContent = winner;
    li.setAttribute("data-index", i);
    winnersList.append(li);
    console.log(li);
    }
}

function getHighScore() {
    // get scores from local storage
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    // update the array
    if (storedScores !== null) {
        scores = storedScores;
    };

// render the scores to the DOM
renderScores();
};

// add a click event to the clearScore button
$(clearScore).on("click", function (){
    $("#winnersList").empty()
    localStorage.setItem("scores", null);
});

// render data to page on load
getHighScore()

// Save most recent score to local storage
function storeScores() {
    localStorage.setItem("scoresList", JSON.stringify(scores));
}

