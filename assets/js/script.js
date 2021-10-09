const quizQuestions = [
    {
      question: "Question 1",
      choices: {
        a: "Answer 1a",
        b: "Answer 1b",
        c: "Answer 1c",
        d: "Answer 1d"
      },
      correctAns: "a"
    },
    {
        question: "Question 2",
        choices: {
          a: "Answer 2a",
          b: "Answer 2b",
          c: "Answer 2c",
          d: "Answer 2d"
        },
        correctAns: "b"
      },
      {
        question: "Question 3",
        choices: {
          a: "Answer 3a",
          b: "Answer 3b",
          c: "Answer 3c",
          d: "Answer 3d"
        },
        correctAns: "c"
      },
      {
        question: "Question 4",
        choices: {
          a: "Answer 4a",
          b: "Answer 4b",
          c: "Answer 4c",
          d: "Answer 4d"
        },
        correctAns: "d"
      },
      {
        question: "Question 5",
        choices: {
          a: "Answer 5a",
          b: "Answer 5b",
          c: "Answer 5c",
          d: "Answer 5d"
        },
        correctAns: "a"
      }
  ];

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

// Timer reset, call when next question begins
function resetTimer() {
    clearInterval(countdown);
    console.log('resetTimer function called')
  }