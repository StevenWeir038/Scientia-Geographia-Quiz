const quizQuestions = [{
    questionNum: '1',
    questionText: "Question 1",
    choices: [
      "Answer 1a",
      "Answer 1b",
      "Answer 1c",
      "Answer 1d"
    ],
    correctAns: "Answer 1a"
  },
  {
    questionNum: '2',
    questionText: "Question 2",
    choices: [
      "Answer 2a",
      "Answer 2b",
      "Answer 2c",
      "Answer 2d"
    ],
    correctAns: "Answer 2b"
  },
  {
    questionNum: '3',
    questionText: "Question 3",
    choices: [
      "Answer 3a",
      "Answer 3b",
      "Answer 3c",
      "Answer 3d"
    ],
    correctAns: "Answer 3c"
  },
  {
    questionNum: '4',
    questionText: "Question 4",
    choices: [
      "Answer 4a",
      "Answer 4b",
      "Answer 4c",
      "Answer 4d"
    ],
    correctAns: "Answer 4d"
  },
  {
    questionNum: '5',
    questionText: "Question 5",
    choices: [
      "Answer 5a",
      "Answer 5b",
      "Answer 5c",
      "Answer 5d"
    ],
    correctAns: "Answer 5a"
  },
  {
    questionNum: '6',
    questionText: "Question 6",
    choices: [
      "Answer 6a",
      "Answer 6b",
      "Answer 6c",
      "Answer 6d"
    ],
    correctAns: "Answer 6a"
  },
  {
    questionNum: '7',
    questionText: "Question 7",
    choices: [
      "Answer 7a",
      "Answer 7b",
      "Answer 7c",
      "Answer 7d"
    ],
    correctAns: "Answer 7b"
  },
  {
    questionNum: '8',
    questionText: "Question 8",
    choices: [
      "Answer 8a",
      "Answer 8b",
      "Answer 8c",
      "Answer 8d"
    ],
    correctAns: "Answer 8c"
  },
  {
    questionNum: '9',
    questionText: "Question 9",
    choices: [
      "Answer 9a",
      "Answer 9b",
      "Answer 9c",
      "Answer 9d"
    ],
    correctAns: "Answer 9d"
  },
  {
    questionNum: '10',
    questionText: "Question 10",
    choices: [
      "Answer 10a",
      "Answer 10b",
      "Answer 10c",
      "Answer 10d"
    ],
    correctAns: "Answer 10a"
  }
];

let questionCount = 0; // as we want to display first question when first building quiz and increment thereafter
const landingSection = document.getElementById('landing');
const newGameSection = document.getElementById('new-game');
const playQuizButton = document.getElementById('play-quiz-btn');
const playerName = document.getElementById('player-name');
const quizLeaveBtn = document.getElementById('quiz-leave-btn');
const quizStartBtn = document.getElementById('quiz-start-btn');
const quizSection = document.getElementById('quiz');
const quizContainer = document.getElementById('quiz-container');
const question = document.getElementById('question-box');
const choiceOne = document.getElementById('answer1');
const choiceTwo = document.getElementById('answer2');
const choiceThree = document.getElementById('answer3');
const choiceFour = document.getElementById('answer4');
const nextBtn = document.getElementById('next-btn');


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
    buildQuizQuestion(questionCount);
    progressIndicator();
    initBarCount();
    startTimer(); // only call / start timer when quiz begins
  }
}

quizStartBtn.addEventListener('click', quizStart);


// Timer set to 30 seconds
let timeLeft;
const counter = document.getElementById('counter');
let timer;

function startTimer() {
  timeLeft = 30;
  timer = setInterval(function () {
    countdown();
  }, 1000);
} // easier to read when countdown kept as a separate function to startTimer.

// every 1 second (1000ms) run the countdown function to change the value in the timer element on the webpage
function countdown() {
  console.log('startTimer called');
  initBarCount();
  if (timeLeft === 0) {
    counter.innerHTML = `0`;
    nextQuestion();
  } else {
    counter.innerHTML = timeLeft;
    timeLeft -= 1;
  }
}

// Timer reset, call when next question begins
function resetTimer() {
  clearInterval(timer);
  console.log('resetTimer function called')
}


function buildQuizQuestion(questionID) {
  // this function sets the first question and corresponding answers. questionID passed from questionCount variable
  console.log('buildQuizQuestion function called');
  console.log(questionCount);
  // set text content for quiz current question# & total questions in quiz-top-info section
  let currentQuestionNum = document.getElementById('current-question');
  let totalQuestions = document.getElementById('total-questions');
  currentQuestionNum.innerHTML = quizQuestions[questionID].questionNum;
  totalQuestions.innerHTML = quizQuestions.length;

  // set text content for quiz Q&As
  question.innerHTML = quizQuestions[questionID].questionText;
  choiceOne.innerHTML = quizQuestions[questionID].choices[0];
  choiceTwo.innerHTML = quizQuestions[questionID].choices[1];
  choiceThree.innerHTML = quizQuestions[questionID].choices[2];
  choiceFour.innerHTML = quizQuestions[questionID].choices[3];
}


function nextQuestion() {
  console.log('nextQuestion function called');
  resetTimer();
  questionCount += 1;
  progressIndicator(questionCount);
  if (questionCount < quizQuestions.length) {
    buildQuizQuestion(questionCount);
    initBarCount();
    startTimer();
  } else {
    /** this is were you'll call a quiz end/show result type function to give user feedback as all questions answered. This will catch
     *'script.js:149 Uncaught TypeError: Cannot read properties of undefined (reading 'questionText')'
     * as we are going to go back into buildQuizQuestion function. 
     */
    counter.innerHTML = ``;
    console.log('end of quiz, give user feedback/results');
  }

}

nextBtn.addEventListener('click', nextQuestion);

// display current question on score tracker below quiz answers/ next button
function progressIndicator(questionCount) {
  console.log('call progressIndicator function show question with yellow background on question circle');
  switch (questionCount) {
    case 1:
      document.getElementsByClassName('circle')[1].style.backgroundColor = "yellow";
      break;
    case 2:
      document.getElementsByClassName('circle')[2].style.backgroundColor = "yellow";
      break;
    case 3:
      document.getElementsByClassName('circle')[3].style.backgroundColor = "yellow";
      break;
    case 4:
      document.getElementsByClassName('circle')[4].style.backgroundColor = "yellow";
      break;
    case 5:
      document.getElementsByClassName('circle')[5].style.backgroundColor = "yellow";
      break;
    case 6:
      document.getElementsByClassName('circle')[6].style.backgroundColor = "yellow";
      break;
    case 7:
      document.getElementsByClassName('circle')[7].style.backgroundColor = "yellow";
      break;
    case 8:
      document.getElementsByClassName('circle')[8].style.backgroundColor = "yellow";
      break;
    case 9:
      document.getElementsByClassName('circle')[9].style.backgroundColor = "yellow";
      break;
    default:
      document.getElementsByClassName('circle')[0].style.backgroundColor = "yellow";
  }
}

function initBarCount() {
  let divTimeLeft = document.getElementById('time-left');
  let totalTime = document.getElementById('total-time');
  let startTimer = setInterval(barCount, 2400);

  function barCount() {
    if (divTimeLeft.clientWidth < totalTime.clientWidth) {
      divTimeLeft.style.width = divTimeLeft.clientWidth + 1 + 'px';
    } else {
      divTimeLeft.style.width = totalTime.clientWidth + 'px';
      clearInterval(startTimer);
    }
  }
}