//initialize variables
var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var crystal = {
    blue: {
        value: 0
    }, 
    yellow: {
        value: 0
    },
    green: {
        value: 0
    },
    red: {
        value: 0
    }
}

// functions

// randomizes crystal values
var randomCrystals = function() {
    return Math.floor(Math.random() * 12) + 1
}

var randomTarget = function() {
    return Math.floor(Math.random() * 102) + 19
}

var init = function() {
    // reset score
    currentScore = 0;
    //randomize targetScore
    targetScore = randomTarget();
    //randomize each crystal value
    crystal.blue.value = randomCrystals();
    crystal.yellow.value = randomCrystals();
    crystal.green.value = randomCrystals();
    crystal.red.value = randomCrystals();

    $("#target-score").text(targetScore);
    $("#current-score").text(currentScore);
}

//check if player won or lost and then reset
var resolveGame = function(){
    if (currentScore > targetScore) {
        alert("Sorry, try again.");
        lossCount++;
        //update dom
        $("#loss-counter").text("Losses: " + lossCount);
        //restart
        init();
    } else if (currentScore === targetScore) {
        alert("Congrats, you won!");
        winCount++;

        //update dom
        $("#win-counter").text("Wins: " + lossCount);

        init();
    }
};

//add values when clicking crystals
var addValues = function(crystal) {
    //add clicked crystal to current score
    currentScore += crystal.value;
    //update dom
    $("#current-score").text(currentScore);
    //call resolveGame
    resolveGame();
};

//main
init();

//click handlers for the crystals
$("#blue").click(function() {
    addValues(crystal.blue);
})

$("#yellow").click(function() {
    addValues(crystal.yellow);
})

$("#green").click(function() {
    addValues(crystal.green);
})

$("#red").click(function() {
    addValues(crystal.red);
})