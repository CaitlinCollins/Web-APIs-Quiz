var startButtonEl = $(".start");
var articleEl = $("article");
var timerEl = $(".timer");
var mainEl = $("main");

// Audio Elements
var shesaid = $("#shesaid");
$(shesaid).trigger("load");
var problem = $("#problem");
$(problem).trigger("load");
    
// Hides the Form
$(".hidden").hide();

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
    $(shesaid).trigger("play");
    setTimeout(function (){
        correctDiv.remove() 
    }, 1500);
};
function incorrectAnswer (){
    incorrectDiv = $("<div>");
    incorrectDiv.attr("class", "alert alert-danger message");
    incorrectDiv.html("What is your problem?");
    mainEl.append(incorrectDiv);
    $(problem).trigger("play");
    setTimeout(function (){
        incorrectDiv.remove() 
    }, 1500);
};

//////// Start the Quiz! ////////
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
    btnOne.attr("class", "btn btn-primary quest");
    p1.append(btnOne);
    // Advance to next page
    btnOne.on("click", function(){
        incorrectAnswer();
        secondsLeft -= 10;
        quest2();
    });
    //  Button 2
    var p2 = $("<p>");
    articleEl.append(p2);
    var btnTwo = $("<button>");
    btnTwo.html("2. Scarn");
    btnTwo.attr("class", "btn btn-primary quest");
    p2.append(btnTwo);
    // Advance to next page
    btnTwo.on("click", function(){
        incorrectAnswer();
        secondsLeft -= 10;
        quest2();
    });
    // Button 3
    var p3 = $("<p>");
    articleEl.append(p3);
    var btnThree = $("<button>");
    btnThree.html("3. Beesly");
    btnThree.attr("class", "btn btn-primary quest");
    p3.append(btnThree);
    // Advance to next page
    btnThree.on("click", function(){
        incorrectAnswer();
        secondsLeft -= 10;
        quest2();
    });
    // Button 4
    var p4 = $("<p>");
    articleEl.append(p4);
    var btnFour = $("<button>");
    btnFour.html("4. Scott");
    btnFour.attr("class", "btn btn-primary quest");
    p4.append(btnFour);
    // Advance to next page
    btnFour.on("click", function(){
        correctAnswer();
        quest2();
    });
};
//////// QUESTION 2 //////// 
    function quest2() {
        articleEl.empty();

        // H2
        var h2El = $("<h2>");
        h2El.html("Where did Jim propose to Pam?");
        h2El.attr("class", "newh2");
        articleEl.append(h2El);
        // Button 1
        var p1 = $("<p>");
        articleEl.append(p1);
        var btnOne = $("<button>");
        btnOne.html("1. On top of the Eiffel Tower.");
        btnOne.attr("class", "btn btn-primary quest");
        p1.append(btnOne);
        // Advance to next page
        btnOne.on("click", function(){
            incorrectAnswer();
            secondsLeft -= 10;
            quest3();
        });
        //  Button 2
        var p2 = $("<p>");
        articleEl.append(p2);
        var btnTwo = $("<button>");
        btnTwo.html("2. In front of a gas station.");
        btnTwo.attr("class", "btn btn-primary quest");
        p2.append(btnTwo);
        // Advance to next page
        btnTwo.on("click", function(){
            correctAnswer();
            quest3();
        });
        // Button 3
        var p3 = $("<p>");
        articleEl.append(p3);
        var btnThree = $("<button>");
        btnThree.html("3. At the reception desk.");
        btnThree.attr("class", "btn btn-primary quest");
        p3.append(btnThree);
        // Advance to next page
        btnThree.on("click", function(){
            incorrectAnswer();
            secondsLeft -= 10;
            quest3();
        });
        // Button 4
        var p4 = $("<p>");
        articleEl.append(p4);
        var btnFour = $("<button>");
        btnFour.html("4. At the Christmas party.");
        btnFour.attr("class", "btn btn-primary quest");
        p4.append(btnFour);
        // Advance to next page
        btnFour.on("click", function(){
            incorrectAnswer();
            secondsLeft -= 10;
            quest3();
        });
    };
        //////// QUESTION 3 ////////
        function quest3() {
            articleEl.empty();
            // H2
            var h2El = $("<h2>");
            h2El.html("What type of crop does Dwight farm?");
            h2El.attr("class", "newh2");
            articleEl.append(h2El);
            // Button 1
            var p1 = $("<p>");
            articleEl.append(p1);
            var btnOne = $("<button>");
            btnOne.html("1. Asparagus");
            btnOne.attr("class", "btn btn-primary quest");
            p1.append(btnOne);
            // Advance to next page
            btnOne.on("click", function(){
                incorrectAnswer();
                secondsLeft -= 10;
                quest4();
            });
            //  Button 2
            var p2 = $("<p>");
            articleEl.append(p2);
            var btnTwo = $("<button>");
            btnTwo.html("2. Potatoes");
            btnTwo.attr("class", "btn btn-primary quest");
            p2.append(btnTwo);
            // Advance to next page
            btnTwo.on("click", function(){
                incorrectAnswer();
                secondsLeft -= 10;
                quest4();
            });
            // Button 3
            var p3 = $("<p>");
            articleEl.append(p3);
            var btnThree = $("<button>");
            btnThree.html("3. Corn");
            btnThree.attr("class", "btn btn-primary quest");
            p3.append(btnThree);
            // Advance to next page
            btnThree.on("click", function(){
                incorrectAnswer();
                secondsLeft -= 10;
                quest4();
            });
            // Button 4
            var p4 = $("<p>");
            articleEl.append(p4);
            var btnFour = $("<button>");
            btnFour.html("4. Beets");
            btnFour.attr("class", "btn btn-primary quest");
            p4.append(btnFour);
            // Advance to next page
            btnFour.on("click", function(){
                correctAnswer();
                quest4();
            });
        };
            //////// QUESTION 4 ////////
            function quest4() {
                articleEl.empty();
                // H2
                var h2El = $("<h2>");
                h2El.html("What department does Meredith work in?");
                h2El.attr("class", "newh2");
                articleEl.append(h2El);
                // Button 1
                var p1 = $("<p>");
                articleEl.append(p1);
                var btnOne = $("<button>");
                btnOne.html("1. Customer Relations");
                btnOne.attr("class", "btn btn-primary quest");
                p1.append(btnOne);
                // Advance to next page
                btnOne.on("click", function(){
                    correctAnswer();
                    quest5();
                });
                //  Button 2
                var p2 = $("<p>");
                articleEl.append(p2);
                var btnTwo = $("<button>");
                btnTwo.html("2. Accounting");
                btnTwo.attr("class", "btn btn-primary quest");
                p2.append(btnTwo);
                // Advance to next page
                btnTwo.on("click", function(){
                    incorrectAnswer();
                    secondsLeft -= 10;
                    quest5();
                });
                // Button 3
                var p3 = $("<p>");
                articleEl.append(p3);
                var btnThree = $("<button>");
                btnThree.html("3. Sales");
                btnThree.attr("class", "btn btn-primary quest");
                p3.append(btnThree);
                // Advance to next page
                btnThree.on("click", function(){
                    incorrectAnswer();
                    secondsLeft -= 10;
                    quest5();
                });
                // Button 4
                var p4 = $("<p>");
                articleEl.append(p4);
                var btnFour = $("<button>");
                btnFour.html("4. Human Resources");
                btnFour.attr("class", "btn btn-primary quest");
                p4.append(btnFour);
                // Advance to next page
                btnFour.on("click", function(){
                    incorrectAnswer();
                    secondsLeft -= 10;
                    quest5();
                });
            };
                //////// QUESSTION 5 ////////
                function quest5() {
                    articleEl.empty();
                    // H2
                    var h2El = $("<h2>");
                    h2El.html("What actor played the role of Robert California?");
                    h2El.attr("class", "newh2");
                    articleEl.append(h2El);
                    // Button 1
                    var p1 = $("<p>");
                    articleEl.append(p1);
                    var btnOne = $("<button>");
                    btnOne.html("1. Norm McDonald");
                    btnOne.attr("class", "btn btn-primary quest");
                    p1.append(btnOne);
                    // Advance to next page
                    btnOne.on("click", function(){
                        incorrectAnswer();
                        secondsLeft -= 10;
                        quest6();
                    });
                    //  Button 2
                    var p2 = $("<p>");
                    articleEl.append(p2);
                    var btnTwo = $("<button>");
                    btnTwo.html("2. Will Arnett");
                    btnTwo.attr("class", "btn btn-primary quest");
                    p2.append(btnTwo);
                    // Advance to next page
                    btnTwo.on("click", function(){
                        incorrectAnswer();
                        secondsLeft -= 10;
                        quest6();
                    });
                    // Button 3
                    var p3 = $("<p>");
                    articleEl.append(p3);
                    var btnThree = $("<button>");
                    btnThree.html("3. James Spader");
                    btnThree.attr("class", "btn btn-primary quest");
                    p3.append(btnThree);
                    // Advance to next page
                    btnThree.on("click", function(){
                        correctAnswer();
                        quest6();
                    });
                    // Button 4
                    var p4 = $("<p>");
                    articleEl.append(p4);
                    var btnFour = $("<button>");
                    btnFour.html("4. Will Ferrell");
                    btnFour.attr("class", "btn btn-primary quest");
                    p4.append(btnFour);
                    // Advance to next page
                    btnFour.on("click", function(){
                        incorrectAnswer();
                        secondsLeft -= 10;
                        quest6();
                    });
                };
                    //////// QUESTION 6 ////////
                    function quest6() {
                        articleEl.empty();
                        // H2
                        var h2El = $("<h2>");
                        h2El.html("Who does Dwight marry in the series finally?");
                        h2El.attr("class", "newh2");
                        articleEl.append(h2El);
                        // Button 1
                        var p1 = $("<p>");
                        articleEl.append(p1);
                        var btnOne = $("<button>");
                        btnOne.html("1. Pam");
                        btnOne.attr("class", "btn btn-primary quest");
                        p1.append(btnOne);
                        // Advance to next page
                        btnOne.on("click", function(){
                            incorrectAnswer();
                            secondsLeft -=10;
                            quest7();
                        });
                        //  Button 2
                        var p2 = $("<p>");
                        articleEl.append(p2);
                        var btnTwo = $("<button>");
                        btnTwo.html("2. Angela");
                        btnTwo.attr("class", "btn btn-primary quest");
                        p2.append(btnTwo);
                        // Advance to next page
                        btnTwo.on("click", function(){
                            correctAnswer();
                            quest7();
                        });
                        // Button 3
                        var p3 = $("<p>");
                        articleEl.append(p3);
                        var btnThree = $("<button>");
                        btnThree.html("3. Erin");
                        btnThree.attr("class", "btn btn-primary quest");
                        p3.append(btnThree);
                        // Advance to next page
                        btnThree.on("click", function(){
                            incorrectAnswer();
                            secondsLeft -= 10;
                            quest7();
                        });
                        // Button 4
                        var p4 = $("<p>");
                        articleEl.append(p4);
                        var btnFour = $("<button>");
                        btnFour.html("4. Jan");
                        btnFour.attr("class", "btn btn-primary quest");
                        p4.append(btnFour);
                        // Advance to next page
                        btnFour.on("click", function(){
                            incorrectAnswer();
                            secondsLeft -= 10;
                            quest7();
                        });
                    };
                        //////// QUESTION 7 ////////
                        function quest7() {
                            articleEl.empty();
                            // H2
                            var h2El = $("<h2>");
                            h2El.html("During Season 7, Creed makes a New Year's Resolution. What is it?");
                            h2El.attr("class", "newh2");
                            articleEl.append(h2El);
                            // Button 1
                            var p1 = $("<p>");
                            articleEl.append(p1);
                            var btnOne = $("<button>");
                            btnOne.html("1. To stop smoking... cigarettes.");
                            btnOne.attr("class", "btn btn-primary quest");
                            p1.append(btnOne);
                            // Advance to next page
                            btnOne.on("click", function(){
                                incorrectAnswer();
                                secondsLeft -= 10;
                                quest8();
                            });
                            //  Button 2
                            var p2 = $("<p>");
                            articleEl.append(p2);
                            var btnTwo = $("<button>");
                            btnTwo.html("2. To knit a sweater from the hair of his cockerspaniel.");
                            btnTwo.attr("class", "btn btn-primary quest");
                            p2.append(btnTwo);
                            // Advance to next page
                            btnTwo.on("click", function(){
                                incorrectAnswer();
                                secondsLeft -= 10;
                                quest8();
                            });
                            // Button 3
                            var p3 = $("<p>");
                            articleEl.append(p3);
                            var btnThree = $("<button>");
                            btnThree.html("3. One stunning, gorgeous cartwheel.");
                            btnThree.attr("class", "btn btn-primary quest");
                            p3.append(btnThree);
                            // Advance to next page
                            btnThree.on("click", function(){
                                correctAnswer();
                                quest8();
                            });
                            // Button 4
                            var p4 = $("<p>");
                            articleEl.append(p4);
                            var btnFour = $("<button>");
                            btnFour.html("4. To quit his job.");
                            btnFour.attr("class", "btn btn-primary quest");
                            p4.append(btnFour);
                            // Advance to next page
                            btnFour.on("click", function(){
                                incorrectAnswer();
                                secondsLeft -= 10;
                                quest8();
                            });
                        };
                            //////// QUESTION 8 ////////
                            function quest8() {
                                articleEl.empty();
                                // H2
                                var h2El = $("<h2>");
                                h2El.html("In season 4, Dwight mercy kills Angela's dying cat. What was it's name?");
                                h2El.attr("class", "newh2");
                                articleEl.append(h2El);
                                // Button 1
                                var p1 = $("<p>");
                                articleEl.append(p1);
                                var btnOne = $("<button>");
                                btnOne.html("1. Sprinkles");
                                btnOne.attr("class", "btn btn-primary quest");
                                p1.append(btnOne);
                                // Advance to next page
                                btnOne.on("click", function(){
                                    correctAnswer();
                                    quest9();
                                });
                                //  Button 2
                                var p2 = $("<p>");
                                articleEl.append(p2);
                                var btnTwo = $("<button>");
                                btnTwo.html("2. Comstock");
                                btnTwo.attr("class", "btn btn-primary quest");
                                p2.append(btnTwo);
                                // Advance to next page
                                btnTwo.on("click", function(){
                                    incorrectAnswer();
                                    secondsLeft -= 10;
                                    quest9();
                                });
                                // Button 3
                                var p3 = $("<p>");
                                articleEl.append(p3);
                                var btnThree = $("<button>");
                                btnThree.html("3. Butterball");
                                btnThree.attr("class", "btn btn-primary quest");
                                p3.append(btnThree);
                                // Advance to next page
                                btnThree.on("click", function(){
                                    incorrectAnswer();
                                    secondsLeft -= 10;
                                    quest9();
                                });
                                // Button 4
                                var p4 = $("<p>");
                                articleEl.append(p4);
                                var btnFour = $("<button>");
                                btnFour.html("4. Mr. Bojangles");
                                btnFour.attr("class", "btn btn-primary quest");
                                p4.append(btnFour);
                                // Advance to next page
                                btnFour.on("click", function(){
                                    incorrectAnswer();
                                    secondsLeft -= 10;
                                    quest9();
                                });
                            };
                                //////// QUESTION 9 ////////
                                function quest9() {
                                    articleEl.empty();
                                    // H2
                                    var h2El = $("<h2>");
                                    h2El.html("What is the name of the boom operator in whom Pam confides in the final season?");
                                    h2El.attr("class", "newh2");
                                    articleEl.append(h2El);
                                    // Button 1
                                    var p1 = $("<p>");
                                    articleEl.append(p1);
                                    var btnOne = $("<button>");
                                    btnOne.html("1. Anthony");
                                    btnOne.attr("class", "btn btn-primary quest");
                                    p1.append(btnOne);
                                    // Advance to next page
                                    btnOne.on("click", function(){
                                        incorrectAnswer();
                                        secondsLeft -= 10;
                                        quest10();
                                    });
                                    //  Button 2
                                    var p2 = $("<p>");
                                    articleEl.append(p2);
                                    var btnTwo = $("<button>");
                                    btnTwo.html("2. Brian");
                                    btnTwo.attr("class", "btn btn-primary quest");
                                    p2.append(btnTwo);
                                    // Advance to next page
                                    btnTwo.on("click", function(){
                                        correctAnswer();
                                        quest10();
                                    });
                                    // Button 3
                                    var p3 = $("<p>");
                                    articleEl.append(p3);
                                    var btnThree = $("<button>");
                                    btnThree.html("3. David");
                                    btnThree.attr("class", "btn btn-primary quest");
                                    p3.append(btnThree);
                                    // Advance to next page
                                    btnThree.on("click", function(){
                                        incorrectAnswer();
                                        secondsLeft -= 10;
                                        quest10();
                                    });
                                    // Button 4
                                    var p4 = $("<p>");
                                    articleEl.append(p4);
                                    var btnFour = $("<button>");
                                    btnFour.html("4. Ben");
                                    btnFour.attr("class", "btn btn-primary quest");
                                    p4.append(btnFour);
                                    // Advance to next page
                                    btnFour.on("click", function(){
                                        incorrectAnswer();
                                        secondsLeft -= 10;
                                        quest10();
                                    });
                                };
                                    //////// QUESTION 10 ////////
                                    function quest10() {
                                        articleEl.empty();

                                        // H2
                                        var h2El = $("<h2>");
                                        h2El.html("What state does Michael move to with Holly in Season 7?");
                                        h2El.attr("class", "newh2");
                                        articleEl.append(h2El);
                                        // Button 1
                                        var p1 = $("<p>");
                                        articleEl.append(p1);
                                        var btnOne = $("<button>");
                                        btnOne.html("1. Iowa");
                                        btnOne.attr("class", "btn btn-primary quest");
                                        p1.append(btnOne);
                                        // Advance to next page
                                        btnOne.on("click", function(){
                                            incorrectAnswer();
                                            secondsLeft -= 10;
                                            finalPage();
                                        });
                                        //  Button 2
                                        var p2 = $("<p>");
                                        articleEl.append(p2);
                                        var btnTwo = $("<button>");
                                        btnTwo.html("2. Oregon");
                                        btnTwo.attr("class", "btn btn-primary quest");
                                        p2.append(btnTwo);
                                        // Advance to next page
                                        btnTwo.on("click", function(){
                                            incorrectAnswer();
                                            secondsLeft -= 10;
                                            finalPage();
                                        });
                                        // Button 3
                                        var p3 = $("<p>");
                                        articleEl.append(p3);
                                        var btnThree = $("<button>");
                                        btnThree.html("3. Colorado");
                                        btnThree.attr("class", "btn btn-primary quest");
                                        p3.append(btnThree);
                                        // Advance to next page
                                        btnThree.on("click", function(){
                                            correctAnswer();
                                            finalPage();
                                        });
                                        // Button 4
                                        var p4 = $("<p>");
                                        articleEl.append(p4);
                                        var btnFour = $("<button>");
                                        btnFour.html("4. Michigan");
                                        btnFour.attr("class", "btn btn-primary quest");
                                        p4.append(btnFour);
                                        // Advance to next page
                                        btnFour.on("click", function(){
                                            incorrectAnswer();
                                            secondsLeft -= 10;
                                            finalPage();
                                        });
                                        
                                    };

//////// FINAL PAGE ////////
function finalPage() {
articleEl.empty();
clearInterval(interval);
// H2
var h2El = $("<h2>");
var pEl = $("<p>");
var retry = $("<button>");
    if (secondsLeft > 0) {
        h2El.html("Bears! Beets! Battlestar Galactica!");
        h2El.attr("class", "finalH2");
        pEl.html("I'm shocked, but you have succeeded. You're Score Is: <b>" + secondsLeft + "</b>!");
        pEl.attr("class", "finalP");
        $(".hidden").show();
    }
    else {
        h2El.html("You Failed Miserably!");
        h2El.attr("class", "finalH2");
        pEl.html("You'll never be Regoinal Manager! Womp, womp!")
        pEl.attr("class", "finalP");
        retry.html("Let's Try Again!");
        retry.attr("class","btn btn-primary start retry");
        articleEl.append(retry);
        $(retry).on("click", function reloadPage() {
            location.reload();
        });
    };
    articleEl.prepend(pEl); 
    articleEl.prepend(h2El);

}  
// Highscore setting
var userInitials = $(".formSubmit");
var scores = JSON.parse(localStorage.getItem("scores")) || [];


$("#submit").on("click", function (event){
    event.preventDefault();
    userInitials = $("input").val();
    

    if (userInitials === "") {
        alert("Error! You must enter your initials!");
    }

    else {
        alert("Success! Your initals have been added to the highscores!");
        
        // Store scores
        function storeScores() {
            localStorage.setItem("scores", JSON.stringify(scores));
        }
        var userInitials = $("input").val();
        var userScore = secondsLeft;

        var userEntry = userInitials + ": " + userScore + " points!";
        // push user Entry to the scores Array and clear input field
        scores.push(userEntry);
        userInitials.value = "";

        // store and render the updates scores
        storeScores();
    }
});
