var wins = 0;
var losses = 0;
var life = 11;
var guessesFarLog = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersLength = letters.length;


var startOver = function () {
    life = 11;
    guessesFarLog = [''];
    guessesText.textContent =['']
    compChoiceFunction();
}


var guessesText = document.querySelector('#guessesFarLog');
var compChoiceText = letters[Math.floor(Math.random() * letters.length)];
var compChoiceFunction = function () {
    compChoiceText;
};

console.log('The answer is ' + compChoiceText + '.');
console.log(life)

document.onkeyup = function (event) {
    life--;
    document.querySelector("#guessesLeftHtml").innerHTML = life;
    guessesText.textContent = guessesText.textContent + ' ' + event.key;
    
    if (event.key === compChoiceText) {
        wins++;
        document.querySelector("#wins").textContent = wins;
        startOver();
        guessesFarLog = [''];
        compChoiceFunction();
    };

    if (life === 0) {
        losses++;
        document.querySelector('#losses').textContent = losses;
        startOver();
    };

    console.log(guessesText);
};
