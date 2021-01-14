var startButtonEl = $(".start");
var articleEl = $("article");
var timerEl = $(".timer");
var mainEl = $("main");

// Click event that starts the quiz.
startButtonEl.on("click", function() {
    startTimer();
    start();
 
});

// Set Timer
var secondsLeft = 75;
var interval;
timerEl.text("Time: " + secondsLeft);
function startTimer() {
    interval = setInterval(function(){
    secondsLeft--;
    timerEl.html("Time: " + secondsLeft);
    if(secondsLeft <= 0) {
        timerEl.text("Out of Time!");
        finalPage();
        }
    }, 1000);
};

// Set Alert Message Time Out
function correctAnswer (){
    correctDiv = $("<div>");
    correctDiv.attr("class", "alert alert-success message");
    correctDiv.html("That's what she said!");
    mainEl.append(correctDiv);
    setTimeout(function (){
        correctDiv.remove() 
    }, 1500);
};
function incorrectAnswer (){
    incorrectDiv = $("<div>");
    incorrectDiv.attr("class", "alert alert-danger message");
    incorrectDiv.html("You have never been more wrong.");
    mainEl.append(incorrectDiv);
    setTimeout(function (){
        incorrectDiv.remove() 
    }, 1500);
};


// var questions = [
//     {
//         question: "What is the character Michael's last name?",
//         btnOne: "Gary",
//         btnTwo: "Scarn",
//         btnThree: "Beesly",
//         btnFour: "Scott",
//         correct: "Scott",
//     },
//     {   question: "Where did Jim    propose to Pam?",
//         btnOne: "On top of the Eiffel Tower.",
//         btnTwo: "In front of a gas station.",
//         btnThree: "At the reception desk.",
//         btnFour: "At the Christmas party.",
//         correct: "In front of a gas station.",
    
//     },
//     {
//         question: "What type of crop does Dwight farm?",
//         btnOne: "Asparagus",
//         btnTwo: "Potatoes",
//         btnThree: "Corn",
//         btnFour: "Beets",
//         correct: "Beets",
//     },
//     {   question: "What department does Meredith work in?",
//         btnOne: "Customer Relations",
//         btnTwo: "Accounting",
//         btnThree: "Sales",
//         btnFour: "Human Resources",
//         correct: "Customer Relations",
    
//     },
//     {   question: "What actor played the role of Robert California?",
//         btnOne: "Norm McDonald",
//         btnTwo: "Will Arnett",
//         btnThree: "James Spader",
//         btnFour: "Will Ferrell",
//         correct: "James Spader",
    
//     },
//     {
//         question: "Who does Dwight marry in the series finally?",
//         btnOne: "Pam",
//         btnTwo: "Angela",
//         btnThree: "Erin",
//         btnFour: "Jan",
//         correct: "Angela",
//     },
//     {   question: "During Season 7, Creed makes a New Year's Resolution. What is it?",
//         btnOne: "To stop smoking... cigarettes.",
//         btnTwo: "To knit a sweater from the hair of his cockerspaniel.",
//         btnThree: "One stunning, gorgeous cartwheel.",
//         btnFour: "To quit his job.",
//         correct: "One stunning, gorgeous cartwheel.",
    
//     },
//     {   question: "In Season 4, Dwight mercy kills Angela's dying cat. What was it's name?",
//         btnOne: "Sprinkles",
//         btnTwo: "Comstock",
//         btnThree: "Butterball",
//         btnFour: "Mr. Bojangles",
//         correct: "Sprinkles",
    
//     },
//     {
//         question: "What is the name of the boom operator in whom Pam confides in the final season?",
//         btnOne: "Anthony",
//         btnTwo: "Brian",
//         btnThree: "David",
//         btnFour: "Ben",
//         correct: "Brian",
//     },
//     {   question: "What state does Michael move to with Holly in Season 7?",
//         btnOne: "Iowa",
//         btnTwo: "Oregon",
//         btnThree: "Colorado",
//         btnFour: "Michigan",
//         correct: "Colorado",
    
//     },
// ];



// // Start Funtion
function start () {
    // Empty the Article.
    articleEl.empty();
    for (i=0; i<question.length; i++) {
    // H2
    var h2El = $("<h2>", {text:''});
    h2El.html(questions[i]["question"]);
    h2El.attr("class", "newh2");
    articleEl.append(h2El);
    // Button 1
    var p1 = $("<p>");
    articleEl.append(p1);
    var first = $("<button>");
    first.html(questions[i][btnOne]);
    first.attr("class", "btn btn-primary quest");
    p1.append(first);
    // Button 2
    var p1 = $("<p>");
    articleEl.append(p1);
    var second = $("<button>");
    second.html(questions[i][btnTwo]);
    second.attr("class", "btn btn-primary quest");
    p1.append(second);
    // Button 3
    var p1 = $("<p>");
    articleEl.append(p1);
    var third = $("<button>");
    third.html(questions[i][btnThree]);
    third.attr("class", "btn btn-primary quest");
    p1.append(third);
    // Button 4
    var p1 = $("<p>");
    articleEl.append(p1);
    var fourth = $("<button>");
    fourth.html(questions[i][btnFour]);
    fourth.attr("class", "btn btn-primary quest");
    p1.append(fourth);
}
};


// //////// FINAL PAGE ////////
// // function finalPage() {
// //     articleEl.empty();
// //     clearInterval(interval);
// //     // H2
// //     var h2El = $("<h2>");
// //     var pEl = $("<p>");
// //         if (secondsLeft > 0) {
// //             h2El.html("Bears! Beets! Battlestar Galactica!");
// //             h2El.attr("class", "finalH2");
// //             pEl.html("I'm shocked, but you have succeeded. You're Score Is: <b>" + secondsLeft + "</b>!");
// //             pEl.attr("class", "finalP");
// //             if ($(".hidden").css("display","none")) {
// //                 $(".hidden").css("display","block")
// //             };
// //         }
// //         else {
// //             h2El.html("You Failed Miserably!");
// //             h2El.attr("class", "finalH2");
// //             pEl.html("You'll never be Regoinal Manager! Womp, womp!")
// //             pEl.attr("class", "finalP"); 
// //         };
// //         articleEl.append(h2El); 
// //         articleEl.append(pEl);
       
    
// //     var userInitials = "";
// //     $("#submit").on("click", function (event){
// //         event.preventDefault();
// //         userInitials = $("input").val();
// //         localStorage.setItem("score", secondsLeft);
// //         localStorage.setItem("initials", userInitials);
    
// //         if (userInitials === "") {
// //             alert("Error! You must enter your initials!");
// //         }
// //         else {
// //             alert("Success! Your initals have been added to the highscores!");
// //             var highscoreDiv = $(".highscores");
// //             var getScore = localStorage.getItem("score");
// //             var getInitials = localStorage.getItem("initials");
// //             function getHighScore () {
// //                 var winner = $("<p>");
// //                 winner.html = (getInitials + ": " + getScore + " points!");
// //                 highscoreDiv.append(winner);
// //                 console.log(winner.html);
// //         }
// //             getHighScore();
// //         }
// //     });
// //     };
    