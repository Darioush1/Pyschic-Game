var winsLog = 0;
var lossesLog = 0;
var guessesLeftLog = 10;
var guessesFarLog = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_" ];
var lettersLength = letters.length; 
var startOver = function () {
    guessesLeftLog = 10;
    guessesFarLog = [];
    guessesFartext ();
    letters ();
    guessesLefttext ();
};


var winstext = document.getElementById('winsLog');
var lossestext = document.getElementById('lossesLog');
var guessesLefttext = document.querySelector('#guessesLeftLog');
var guessesFartext = document.querySelector('#guessesFarLog');
winstext.innerHTML = document.querySelector('#winsLog') ;
lossestext.innerHTML = document.querySelector('#lossesLog'); 
guessesLefttext.innerHTML = guessesLeftLog ;


for (var i = 0; i < letters.length ; i++) {
    var letters = letters[Math.floor(Math.random(i) * letters.length)];
    console.log('The answer is ' + letters [i] + '.' )
};



document.onkeyup = function(event) {
    console.log(guessesFarLog);
   
    guessesLeftLog--;
    
    var guessesFartext = document.getElementById('guessesFarLog');
    guessesFartext.textContent = guessesFartext.textContent + ' ' + event.key;
    
    if (guessesFartext === letters) {
        winsLog++;
        document.querySelector('#winsLog');
        startOver ();
    };
    
    if (guessesLeftLog === 0) {
        lossestext++;

    }
}; 

function startOver() {
    guessesLefttext = 0;
    guessesFartext -1;
    guessesFartext [" "];
}
;

//function updateDom() { 
//document.getElementById("wins").innerHTML = wins 

//document.getElementById("losses").innerHTML = losses

//document.getElementById("guesses").innerHTML = guesses

//document.getElementById("guessesFar").innerHTML = guessesFar
