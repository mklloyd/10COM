//SET secretnum
//GET guess
//WHILE guess != secretnum THEN
     //IF guess > secretnum THEN
          //PRINT “Too high”
     //ELSE
          //PRINT “Too low”
     //ENDIF
//ENDWHILE
//PRINT “Correct”

const secretnum = Math.round(Math.random()*100);
const guess = document.getElementById('guess');
const result = document.getElementById('response');

//document.getElementById('test').innerHTML = "Secret: "+secretnum;

function checkGuess() {
    const enteredGuess = parseInt(guess.value);

if(enteredGuess !== secretnum){
    if(enteredGuess > secretnum){
        result.innerHTML = "Too high. Guess again.";
    } else {
        result.innerHTML = "Too low. Guess again.";
    }
} else {
result.innerHTML = "You got it! Yes the number was "+secretnum;
document.getElementById("restart").style.display = "block";

}
}

document.getElementById('check').addEventListener('click', checkGuess);
