var wins = 0;
var losses = 0;
var guessesLeftLog = 0;
var guessesFarLog = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_" ];
var lettersLength = letters.length; 
var answer = [];


//.push adds something to the end of the array
function updateDom() {
var winstext = document.getElementById('winsLog');
var lossestext = document.getElementById('lossesLog');
var guessesLefttext = document.getElementById('guessesLeftLog');
var guessesFartext = document.getElementById('guessesFarLog');
winstext.innerHTML = winsLog ;
lossestext.innerHTML = losesLog ; 
guessesLefttext.innerHTML = guessesLeftLog ;
guessesFartext.innerHTML = guessesFarLog.join(',') ;
};


for (var i = 0; i < letters.length ; i++) {
    var answer = letters[Math.floor(Math.random(i) * letters.length)];
    console.log('The answer is ' + answer [i] + '.' )
};



document.onkeyup = function(event) {
    console.log(guessesFarLog);
    var guessesFartext = document.getElementById('guessesFarLog');
    guessesFartext.textContent = guessesFartext.textContent + ' ' + event.key;
    if (guessesFartext === answer) {
        wins++;
        win();
    } else if (guessesLeftLog - 1 === 0) {
        lost ();
    } 
    else {
       fail(guessesFarText);
    }
};



//function updateDom() { 
//document.getElementById("wins").innerHTML = wins 

//document.getElementById("losses").innerHTML = losses

//document.getElementById("guesses").innerHTML = guesses

//document.getElementById("guessesFar").innerHTML = guessesFar
