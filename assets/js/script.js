const landingSection =  document.getElementById('landing');
const newGameSection =  document.getElementById('new-game');
const playQuizButton = document.getElementById('play-quiz-btn');
const playerName = document.getElementById('player-name');
const quizLeaveBtn = document.getElementById('quiz-leave-btn');
const quizStartBtn = document.getElementById('quiz-start-btn');
const quizSection =  document.getElementById('quiz');


function startNewGame() {
    landingSection.style.display = 'none';
    newGameSection.style.display = 'inline-flex';
    playerName.focus();
    console.log('startNewGame function called');
}

playQuizButton.addEventListener('click', startNewGame);


function quizLeave() {
    // clear input box
    playerName.value = '';
    console.log('playerName input box cleared');
    // hide new game section, show landing section
    landingSection.style.display = 'inline-flex';
    newGameSection.style.display = 'none';
    console.log('quizLeave function called');
}

quizLeaveBtn.addEventListener('click', quizLeave);


function quizStart() {
    console.log('quizStart function called');
    if (playerName.value == '' || playerName.value == null || playerName.value == undefined) {
        console.log('quizStart Errorhandler - user name required ');
        // set style properties for input box to draw users attention, refocus input element?
        playerName.style.borderColor = 'red';
    } else {
        quizSection.style.display = 'inline-flex';
        newGameSection.style.display = 'none';
        console.log('open the quiz');
        startTimer();    // only call / start timer when quiz begins
    }
}

quizStartBtn.addEventListener('click', quizStart);


// Timer set to 30 seconds
let timeLeft = 30;
const counter = document.getElementById('counter');
let timer;

function startTimer() {
    timer = setInterval(function() {countdown()}, 1000);
    }  // easier tio read when countdown kept as a separate function to startTimer.
  
  // every 1 second (1000ms) run the countdown function to change the value in the timer element on the webpage
  function countdown() {
    console.log('startTimer called');
  
    if (timeLeft <= 0) {
      clearInterval(timer);
      counter.innerHTML = `0`;
    } else {
      counter.innerHTML = timeLeft;
      timeLeft-=1;
    }
  }