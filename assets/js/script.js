const quizQuestions = [{
    questionNum: '0',
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
    questionNum: '1',
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
    questionNum: '2',
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
    questionNum: '3',
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
    questionNum: '4',
    questionText: "Question 5",
    choices: [
      "Answer 5a",
      "Answer 5b",
      "Answer 5c",
      "Answer 5d"
    ],
    correctAns: "Answer 5a"
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
    countdown()
  }, 1000);
} // easier to read when countdown kept as a separate function to startTimer.

// every 1 second (1000ms) run the countdown function to change the value in the timer element on the webpage
function countdown() {
  console.log('startTimer called');

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
  console.log('buildQuizQuestion function called')
  question.innerHTML = quizQuestions[questionID].questionText;
  choiceOne.innerHTML = quizQuestions[questionID].choices[0];
  choiceTwo.innerHTML = quizQuestions[questionID].choices[1];
  choiceThree.innerHTML = quizQuestions[questionID].choices[2];
  choiceFour.innerHTML = quizQuestions[questionID].choices[3];
}


function nextQuestion() {
  console.log('nextQuestion function called');
  resetTimer();
  if (questionCount < quizQuestions.length) {
    questionCount += 1;
    console.log(questionCount);
    buildQuizQuestion(questionCount);
    startTimer();
  } else {
    /** this is were you'll call a quiz end/show result type function to give user feedback as all questions answered. This will catch
     *'script.js:149 Uncaught TypeError: Cannot read properties of undefined (reading 'questionText')'
     * as we are going to go back into buildQuizQuestion function. 
     */
  }

}

nextBtn.addEventListener('click', nextQuestion);

