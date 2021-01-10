var startButtonEl = $(".start");
var articleEl = $("article");
var timerEl = $(".timer");

// Click event that starts the quiz.
startButtonEl.on("click", function() {
    start();
    setTime();
});

//Set the Timer
var secondsLeft = 75;
timerEl.text("Time: " + secondsLeft);
function setTime() {
    var interval = setInterval(function(){
    secondsLeft--;
    timerEl.text("Time: " + secondsLeft);
        if(secondsLeft === 0) {
            timerEl.text("Time: 0");
            clearInterval(interval);
        }
    }, 1000);
};    

// Function that changes article content to first question upon clicking the button.
function start() {
    // Empty the Article.
    articleEl.empty();
    // H2
    var h2El = $("<h2>");
    h2El.html("What is the character Michael's last name?");
    h2El.attr("class", "newh2");
    articleEl.append(h2El);
    // Button 1
    var p1 = $("<p>");
    articleEl.append(p1);
    var btnOne = $("<button>");
    btnOne.html("1. Gary");
    btnOne.attr("class", "btn btn-primary new");
    p1.append(btnOne);
    // Advance to next page
    btnOne.on("click", function(){
        secondsLeft -= 10;
        quest2();
    });
    //  Button 2
    var p2 = $("<p>");
    articleEl.append(p2);
    var btnTwo = $("<button>");
    btnTwo.html("2. Scarn");
    btnTwo.attr("class", "btn btn-primary new");
    p2.append(btnTwo);
    // Advance to next page
    btnTwo.on("click", function(){
        secondsLeft -= 10;
        quest2();
    });
    // Button 3
    var p3 = $("<p>");
    articleEl.append(p3);
    var btnThree = $("<button>");
    btnThree.html("3. Beesly");
    btnThree.attr("class", "btn btn-primary new");
    p3.append(btnThree);
    // Advance to next page
    btnThree.on("click", function(){
        secondsLeft -= 10;
        quest2();
    });
    // Button 4
    var p4 = $("<p>");
    articleEl.append(p4);
    var btnFour = $("<button>");
    btnFour.html("4. Scott");
    btnFour.attr("class", "btn btn-primary new");
    p4.append(btnFour);
    // Advance to next page
    btnFour.on("click", function(){
        quest2();
    });
        function quest2() {
            articleEl.empty();
        }
    


    //If the wrong answer is picked, decrement the time and advance to the next page.


};


    