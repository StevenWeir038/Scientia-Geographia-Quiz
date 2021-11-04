/* jshint esversion: 8 */

// Global variables
let yaynay = "unanswered";
const quizLength = 10;
let questionCount = 0;
let correctNum = 0;
const headerSection = document.getElementById("header");
const footerSection = document.getElementById("footer");
const landingSection = document.getElementById("landing");
const newGameSection = document.getElementById("new-game");
const playQuizButton = document.getElementById("play-quiz-btn");
const playerName = document.getElementById("player-name");
const quizLeaveBtn = document.getElementById("quiz-leave-btn");
const quizStartBtn = document.getElementById("quiz-start-btn");
const quizSection = document.getElementById("quiz");
const question = document.getElementById("question-box");
const choiceOne = document.getElementById("answer1");
const choiceTwo = document.getElementById("answer2");
const choiceThree = document.getElementById("answer3");
const choiceFour = document.getElementById("answer4");
const nextBtn = document.getElementById("next-btn");
const resultsSection = document.getElementById("results");
const answerBox = document.getElementById("answers-box");
const answerOptions = answerBox.querySelectorAll(".answer");
const timeLeftBar = document.getElementById("time-left");


// Landing section
function startNewGame() {
  landingSection.style.display = "none";
  newGameSection.style.display = "inline-flex";
  playerName.focus();
}

playQuizButton.addEventListener("click", startNewGame);


// Game start section
function quizLeave() {
  playerName.value = "";
  landingSection.style.display = "inline-flex";
  newGameSection.style.display = "none";
}

quizLeaveBtn.addEventListener("click", quizLeave);


function quizStart() {
  if (playerName.value == "" || playerName.value == null || playerName
    .value == undefined) {
    playerName.style.borderColor = "red";
  } else {
    quizSection.style.display = "inline-flex";
    newGameSection.style.display = "none";
    // TESTING - hide header and footer as insufficient space on small screens
    headerSection.style.display = "none";
    footerSection.style.display = "none";
    shuffle(quizQuestions);
    buildQuizQuestion(questionCount);
    progressIndicator(questionCount);
    startTimer();
  }
}

quizStartBtn.addEventListener("click", quizStart);
playerName.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    quizStart();
  }
});


/**
 * Timer and color styling for countdown bar
*/
let timeLeft;
const counter = document.getElementById("counter");
let timer;

function startTimer() {
  timeLeft = 30;
  timer = setInterval(function () {
    countdown(timeLeft);
  }, 1000);
}

function countdown(seconds) {
  if (seconds === 0) {
    counter.innerHTML = `0`;
    nextQuestion();
  } else {
    timeLeftWidth = timeLeftWidth - (100 / 30);
    timeLeft -= 1;
    counter.innerHTML = timeLeft;
    timeLeftBar.style.width = timeLeftWidth + "%";
    if (timeLeft >= 20) {
      timeLeftBar.style.backgroundColor = "green";
    } else if (timeLeft <= 10) {
      timeLeftBar.style.backgroundColor = "red";
    } else {
      timeLeftBar.style.backgroundColor = "yellow";
    }
  }
}

let timeLeftWidth = 100;

function resetTimer() {
  counter.innerHTML = `30`;
  timeLeftWidth = 100;
  timeLeftBar.style.width = "100%";
  timeLeftBar.style.backgroundColor = "green";
  clearInterval(timer);
}


/** Use "Fisher-Yates" shuffle to reorder quiz questions array IN PLACE.
 * Call only ONCE at start of quiz.
 * Credit to Mike Bostock https://bost.ocks.org/mike/shuffle/
 */
function shuffle(array) {
  let m = array.length,
    t, i;

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


/**
 * nextQuestion() acts as a core function, calling on others to support
 * pagination, manipulate DOM elements and track user progress/performance
 */
function nextQuestion() {
  resetAnswerStyles();
  resetTimer();
  questionCount += 1;
  trackerUpdate();
  if (questionCount < quizLength) {
    buildQuizQuestion(questionCount);
    startTimer();
    progressIndicator(questionCount);
  } else {
    counter.innerHTML = ``;
    endOfQuiz();
  }
}

nextBtn.addEventListener("click", nextQuestion);


// Display the current question in the DOM
function buildQuizQuestion(questionID) {
  let currentQuestionNum = document.getElementById("current-question");
  let totalQuestions = document.getElementById("total-questions");
  currentQuestionNum.innerHTML = questionCount + 1;
  totalQuestions.innerHTML = quizLength;
  question.innerHTML = quizQuestions[questionID].questionText;
  choiceOne.innerHTML = quizQuestions[questionID].choices[0];
  choiceTwo.innerHTML = quizQuestions[questionID].choices[1];
  choiceThree.innerHTML = quizQuestions[questionID].choices[2];
  choiceFour.innerHTML = quizQuestions[questionID].choices[3];
}


// Reset and selected answer element style to default for next question 
function resetAnswerStyles() {
  for (answer of answerOptions) {
    answer.setAttribute("class", "answer");
  }
}


// Show yellow circle on score-tracker elem to show user current question num
function progressIndicator(questionCount) {
  document.getElementsByClassName("circle")[questionCount]
    .style.backgroundColor = "yellow";
}


// Loop for answer buttons
for (answer of answerOptions) {
  answer.addEventListener("click", choiceAnswer);
}

/**
 * Click event passed to function to change selected button and it's style
 * By reseting answer styles before changing selected button's class,
 * the appearance of one selected button is always maintained.
 */
function choiceAnswer(event) {
  resetAnswerStyles();
  this.setAttribute("class", "answer-selected");
  let targetID = event.target.id;
  evaluateAnswer(targetID);
}

/**
 * Each time the user chooses an answer, evaluate it's value to that
 * of the correct answer. This is stored as a property in each object
 * within the quizQuestions array.
 * The returned value ("correct", "incorrect") is used within the
 * trackerUpdate() switch case to display red, green, gray feedback to the
 * user and to tally the number of correct answers as the quiz progresses
 */
function evaluateAnswer(targetID) {
  let userAnswer = document.getElementById(targetID).innerText;
  let correctAnswer = quizQuestions[questionCount].correctAns;

  if (correctAnswer === userAnswer) {
    correctNum++;
    yaynay = "correct";
  } else {
    yaynay = "incorrect";
  }
}

/**
 * Change the appearance of #score-tracker elements children depending on
 * whether the answer was correct/incorrect (set by evaluateAnswer function)
 * or if no answer provided, differentiate this for the user with gray color.
 */
function trackerUpdate() {
  let trackerColor;
  switch (yaynay) {
    case "correct":
      trackerColor = "green";
      break;
    case "incorrect":
      trackerColor = "red";
      break;
    case null:
    case undefined:
    case "unanswered":
      trackerColor = "gray";
      break;
  }
  document.getElementsByClassName("circle")[questionCount - 1].style.backgroundColor = trackerColor;
  /**
   * Default yaynay variable to "unanswered" value to default feedback back to
   * gray for each question.  This is overridden only by click event passed
   * to the choiceAnswer() function which then calls evaluateAnswer().
  */
  yaynay = "unanswered";
}


// Called ONCE user answers allotted number of questions
function endOfQuiz() {
  quizSection.style.display = "none";
  resultsSection.style.display = "inline-flex";
      headerSection.style.display = "block";
      footerSection.style.display = "block";
  userResults();
}

// Called only ONCE at end of quiz to give user feedback.
function userResults() {
  const resultScore = document.querySelector("#result-score");
  let resultOutput = `${correctNum} / ${questionCount}`;
  resultScore.innerHTML = resultOutput;

  /**
   * Tailor feedback with the player's name and a bespoke message dependant
   * on upon the total score
   * Also provide the user links to notable geographers
   */
  const userFeedback = document.querySelector("#user-feedback");
  let player = playerName.value;
  if (correctNum <= 3) {
    userFeedback.innerHTML = `<a href="https://www.nationalgeographic.org/encyclopedia/al-idrisi/" target="_blank">You're no al-Idrisi are you ${player}.</a>`;
  } else if (correctNum <= 6) {
    userFeedback.innerHTML = `<a href="https://www.nationalgeographic.org/encyclopedia/gerardus-mercator/" target="_blank">${player}, a Mercator in the making.</a>`;
  } else if (correctNum <= 8) {
    userFeedback.innerHTML = `<a href="http://wiki.gis.com/wiki/index.php/Roger_Tomlinson" target="_blank"> Roger F. Tomlinson would be proud ${player}.</a>`;
  } else if (correctNum < 10) {
    userFeedback.innerHTML = `<a href="https://www.worldhistory.org/Eratosthenes/" target="_blank">${player}, the next Eratosthenes...</a>`;
  } else if (correctNum >= 10) {
    userFeedback.innerHTML = `<a href="https://tim.2bn.dev/" target="_blank">${player} has been globetrotting like Tim.</a>`;
  }
}