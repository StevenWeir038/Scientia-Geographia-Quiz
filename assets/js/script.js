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
const choiceOne = document.getElementById('answer1'); // don't need?
const choiceTwo = document.getElementById('answer2'); // don't need?
const choiceThree = document.getElementById('answer3'); // don't need?
const choiceFour = document.getElementById('answer4'); // don't need?
const nextBtn = document.getElementById('next-btn');
const resultsSection = document.getElementById('results');
const answerBox = document.getElementById('answers-box');
const answerOptions = answerBox.querySelectorAll('.answer');


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
  if (timeLeft === 0) {
    counter.innerHTML = `0`;
    console.log('out of time, question point forfeited');
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
  resetAnswerStyles();
  resetTimer();
  questionCount += 1;
  progressIndicator(questionCount);
  if (questionCount < quizQuestions.length) {
    buildQuizQuestion(questionCount);
    startTimer();
  } else {
    counter.innerHTML = ``;
    endOfQuiz();
  }
}

nextBtn.addEventListener('click', nextQuestion);


// display current question on score tracker below quiz answers/ next button
function progressIndicator(questionCount) {
  console.log('progressIndicator function called, indicate question number with yellow question circle');
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

// progress bar for countdown timer REVIEW THIS TO GET TO WORK
// function progress(timeleft, timetotal, $element) {
//   let progressBarWidth = timeleft * $element.width() / timetotal;
//   $element.find('#time-left').animate({ width: progressBarWidth }, 500).html(timeleft);
//   if(timeleft <= 0) {
//       setTimeout(function() {
//           progress(timeleft - 1, timetotal, $element);
//       }, 1000);
//   }
// };

// progress(30, 30, $('#total-time'));

function endOfQuiz() {
  quizSection.style.display = 'none';
  resultsSection.style.display = 'inline-flex';
  console.log('endOfQuiz function called');
}


/**
 * Begin logic for correct/incorrect user answer selection and store correct answer count for results feedback at end of quiz.
 * Also give user some current feedback.  Depending on answer change circles below to green/red.
 * see below for the sort of logic we are looking for.
 * 
 * need a way to refer to the DOM objects - DONE
 * need eventlistener for 'answer' class. - DONE
 * create variable to hold number of correct answers for results at end of quiz - DONE
 * create variable to hold number of questions for results at end of quiz - DONE
 * 
 * loop the following logic for each question (use 'evaluateAnswer' function) --- 
 * target the users answer selection - DONE
 * change the button style for selector using and ClassListAdd function - DONE 
 * remove selector from other button incase user selected moe than one answer.
 * what is the correct answer from the quizQuestion array currentQuestion
 * compare user vs correct answer - DONE
 * if correct +1 point - DONE
 * if wrong 0 points - NO ACTION REQUIRED
 * on clicking next and moving to next question, color users answer as green/red in previous questions score tracker.  
 *    This will overwritew the yellow style but not give the user a clue to the correct answer too early.
 * 
 */



// to refer to the DOM objects well be evaluating/manipulating
  // placed in const list at top

// eventlisteners
  // incorporate into answer class loop

// store for number of correct answers
let correctNum = 0;

// store for number of total questions
  // use questionCount variable for this, already created


// begin loop of answer class
// answerOptions.forEach(answer => answer.addEventListener('click', evaluateAnswer));
for (let answer of answerOptions) {
  answer.addEventListener('click', evaluateAnswer);
}

function evaluateAnswer(event) {
  console.log('evaluateAnswer function called');
  // Errorhandler if no user makes no selection
  // event.PreventDefault();  -- REVIEW TYPEERROR
  
  // store the value the element that was selected by the user and the correct answer from the current object displayed from the quizQuestion array
  let userAnswer = event.target.innerText;
  let correctAnswer = quizQuestions[questionCount].correctAns;
  
  // style the user's selection
  event.target.style.backgroundColor = "black";
  event.target.style.color = "white";
  console.log('user answer is ' + userAnswer);

  //evaluate if user's answer is correct & add 1 point to total
  if (correctAnswer === userAnswer) {
    correctNum++;
    console.log('correct answer, score is ' + correctNum);
  } else {
    console.log('wrong answer, score is ' + correctNum);
  }
}


function resetAnswerStyles() {
  console.log('resetAnswerStyles function called');
  for (answer of answerOptions) {
    if (answer.style.backgroundColor = "black") {
      answer.style.backgroundColor = "white";
    }
    if (answer.style.color = "white") {
      answer.style.color = "black";
    }   
  }
}