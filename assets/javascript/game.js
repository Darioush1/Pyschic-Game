var wins = 0;
var losses = 0;
var guessesLeftLog = 11;
var guessesFarLog = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersLength = letters.length;

var startOver = function () {
    guessesLeftLog = 11;
    guessesFarLog = [''];
    guessesText.textContent =['']
    compChoiceFunction();
}



var guessesLeftText = 
    document.querySelector("#guessesLeftHtml").innerHTML = guessesLeftLog;



var guessesText = document.querySelector('#guessesFarLog');
//winstext.innerHTML = document.querySelector('#winsLog');
//lossestext.innerHTML = document.querySelector('#lossesLog');

var compChoiceText = letters[Math.floor(Math.random() * letters.length)];
var compChoiceFunction = function () {
    compChoiceText;
};

console.log('The answer is ' + compChoiceText + '.');
console.log(guessesLeftLog)

document.onkeyup = function (event) {
    guessesLeftText--;
    guessesLeftLog--;
    guessesLeftLog.textContent = guessesLeftText
    guessesText.textContent = guessesText.textContent + ' ' + event.key;

    if (event.key === compChoiceText) {
        wins++;
        document.querySelector("#wins").textContent = wins;
        startOver();
        guessesLeftLog = 11;
        guessesFarLog = [''];
        compChoiceFunction();
    };

    if (guessesLeftText === 0) {
        losses++;
        document.querySelector('#losses').textContent = losses;
        startOver();
    };

    console.log(guessesText);
    startOver();
};


//function updateDom() { 
//document.getElementById("wins").innerHTML = wins 

//document.getElementById("losses").innerHTML = losses

//document.getElementById("guesses").innerHTML = guesses

//document.getElementById("guessesFar").innerHTML = guessesFar
