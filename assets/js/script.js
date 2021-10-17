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
  },
  {
    questionNum: '11',
    questionText: "Question 11",
    choices: [
      "Answer 11a",
      "Answer 11b",
      "Answer 11c",
      "Answer 11d"
    ],
    correctAns: "Answer 11b"
  }
];

const quizLength = 10;
let questionCount = 0; // as we want to display first question when first building quiz and increment thereafter
let correctNum = 0; // number of correct user answers
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
    console.log('start the quiz');
    shuffle(quizQuestions);
    buildQuizQuestion(questionCount);
    progressIndicator();
    startTimer();
  }
}

quizStartBtn.addEventListener('click', quizStart);
playerName.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    quizStart();
  }
});


// Timer set to 30 seconds
let timeLeft;
const counter = document.getElementById('counter');
let timer;

function startTimer() {
  timeLeft = 30;
  timer = setInterval(function () {
    countdown(timeLeft);
  }, 1000);
}

function countdown(seconds) {
  console.log('startTimer called');
  if (seconds === 0) {
    counter.innerHTML = `0`;
    console.log('no answer confirmed within timeframe, question point forfeited, mark circle with gray color');
    // assume no answer is a wrong answer therefore style circle gray.  Will stay gray to show user thay failed to answer.
    document.getElementsByClassName('circle')[questionCount].style.backgroundColor = "gray";
    // alternatively for better user experience if thay have selected correct answer but not manually selected next question don't
    // penalise them.  call the evaluateAnswer function when countdown reaches 0 seconds.
    nextQuestion();   
    } else {
    counter.innerHTML = timeLeft;
    
    // let timeLeftBarWidth = timeLeft * timeLeftBar.width() / 30;
    // timeLeftBar.animate({width: timeLeftBarWidth}, 500);
    timeLeft -= 1;
  }
}

const timeLeftBar = document.getElementById('total-time');


// Timer reset, call when next question begins
function resetTimer() {
  clearInterval(timer);
  console.log('resetTimer function called')
}


// use 'Fisher-Yates' shuffle to reorder quiz questions array IN PLACE, call only once at start of quiz - credit to https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  console.log('shuffle function called (only once at quizStart)');    
  let m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


function buildQuizQuestion(questionID) {
  // this function sets the first question and corresponding answers. questionID passed from questionCount variable
  console.log('buildQuizQuestion function called');
  // set text content for quiz current question# & total questions in quiz-top-info section
  let currentQuestionNum = document.getElementById('current-question');
  let totalQuestions = document.getElementById('total-questions');
  currentQuestionNum.innerHTML = questionCount +1;
  totalQuestions.innerHTML = quizLength    // was quizQuestions.length but we want a quiz of 10 questions only and want option of wider question selection;

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
  if (questionCount < quizLength) {
    buildQuizQuestion(questionCount);
    startTimer();
    progressIndicator(questionCount);
  } else {
    counter.innerHTML = ``;
    endOfQuiz();
  }
}

nextBtn.addEventListener('click', nextQuestion);


// better to take correct/incorrect answer indicator out of click event relating to evaluateAnswer as that gives the user a clue.
// instead perform red / green formatting when timer runs out or next question is selected.  Place that in a function an call it.


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


function endOfQuiz() {
  quizSection.style.display = 'none';
  resultsSection.style.display = 'inline-flex';
  console.log('endOfQuiz function called');
  userResults();
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
 * what is the correct answer from the quizQuestion array currentQuestion - DONE
 * compare user vs correct answer - DONE
 * if correct +1 point - DONE
 * if wrong 0 points - DONE, NFA
 * on clicking next and moving to next question, color users answer as green/red in previous questions score tracker.  
 *    This will overwritew the yellow style but not give the user a clue to the correct answer too early.
 * 
 */


// to refer to the DOM objects well be evaluating/manipulating
  // placed in const list at top

// eventlisteners
  // incorporate into answer class loop

// store for number of correct answers
  // moved to const area at top

// store for number of total questions
  // use questionCount variable for this, already created


// eventlistener loop of .answer class
for (let answer of answerOptions) {
  answer.addEventListener('click', choiceAnswer);  //function called formerly evaluateAnswer() do this function from choiceAnswer();
}

// style the user's selection
function choiceAnswer(event) {
resetAnswerStyles(); // reset style for all answer buttons before setting selected style on clicked answer.  Therefore only 1 answer appears selected at all times
this.setAttribute("class", "answer-selected")
targetID = event.target.id;
evaluateAnswer(targetID);
}

function resetAnswerStyles() {
  console.log('resetAnswerStyles function called');
  for (let answer of answerOptions) {
    answer.setAttribute("class", "answer");
  }
}


function evaluateAnswer(targetID) {
  console.log('evaluateAnswer function called');
  // Errorhandler if no user makes no selection
  // event.PreventDefault();  -- REVIEW TYPEERROR
  
  // store the value the element that was selected by the user and the correct answer from the current object displayed from the quizQuestion array
  let userAnswer = event.target.innerText;
  let correctAnswer = quizQuestions[questionCount].correctAns;
  console.log('user answer is ' + userAnswer);
  console.log('correct answer is ' + correctAnswer);

  //evaluate if user's answer is correct & add 1 point to total, if incorrect do not add 1 point to total
  if (correctAnswer === userAnswer) {
    correctNum++;
    console.log('the user score moves to ' + correctNum);
  } else {
    console.log('the user score remains at ' + correctNum)
  }
}


// Results
function userResults() {
  // variable needed to refer to / display score in #result-score element
  const resultScore = document.querySelector('#result-score');
  // variable to create custom html output, we are using a template literal.
  let resultOutput = `${correctNum} / ${questionCount}`;
  // display resultOutput in resultScore location in DOM
  resultScore.innerHTML = resultOutput;

  // variable needed to refer to / display score in #user-feedback element
  const userFeedback = document.querySelector('#user-feedback');
  let player = playerName.value;
  // loop to select attainment level based upon the user's score & display resultOutput in resultScore location in DOM
  if (correctNum <= 3) {
    userFeedback.innerHTML = `You're no al-Idrisi are you ${player}...`;
  } else if (correctNum <= 6) {
    userFeedback.innerHTML = `${player}, a Mercator in the making...`;
  } else if (correctNum <= 8) {
    userFeedback.innerHTML = `Roger F. Tomlinson would be proud ${player}...`;
  } else if (correctNum < 10) {
    userFeedback.innerHTML = `${player} = Eratosthenes...`;
  } else if (correctNum >= 10) {
    userFeedback.innerHTML = `<a href='https://tim.2bn.dev/' target="_blank">${player} has been globetrotting like Tim.</a>`;
  }
}


// Leaderboard
// We want to 'store the user's name & user's score for each instance of the game
// So we need a variables to store user name, user score and game
// each game should be an object within the leaderboard array containing user name and user score
// sort the array by score


// var playerName;
// var playerScore;
// var gameResult = {};
// var highscoreList = [];

// function toHighscoreList() {
//     playerName = $('#nameTag').text();   // for example value "Henry"
//     playerScore = guessedWrong.length;   // for example value 3

//     gameResult = {player: playerName, score: playerScore};
//     highscoreList.push(gameResult);
//     highscoreList.sort(function(a,b) { return (b.score - a.score ) });

//     $('#score1').text(highscoreList[0].player + " - score: "+ highscoreList[0].score);
// };