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


/**
 * CSS properties default the site to hide all sections except for the landing
 * which contains the call to action (CTA)/play button.
 * Selecting the CTA button hides the landing section and displays the
 * new game section containing the input box for the player to enter their name
 * and either start the quiz or return back to the landing/home area.
 * For now this is blank except for one button but more content can be added later.
 * Provide quiz rules etc.
 */
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


/**
 * Select CTA button to view player name input.
 * Apply errorhandler in the event of no input and highlight to user.
 * If player name is added, randomise questions, build and display first question,
 * show player they are on the first question and start the timer.
 */
function quizStart() {
  if (playerName.value == "" || playerName.value == null || playerName.value == undefined) {
    playerName.style.borderColor = "red";
  } else {
    quizSection.style.display = "inline-flex";
    newGameSection.style.display = "none";
    headerSection.style.display = "none";
    footerSection.style.display = "none";
    shuffle(quizQuestions);
    buildQuizQuestion(questionCount);
    progressIndicator(questionCount);
    startTimer();
  }
}


// Event listeners to start quiz, left click and enter options.
quizStartBtn.addEventListener("click", quizStart);
playerName.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    quizStart();
  }
});


/**
 * Variables required for Timer.
*/
let timeLeft;
const counter = document.getElementById("counter");
let timer;

/**
 * Set duration for each question.
 * Every second perform a loop.
 * All functionality fo the loop in countdown() function.
 */
function startTimer() {
  timeLeft = 30;
  timer = setInterval(function () {
    countdown(timeLeft);
  }, 1000);
}


/**
 * On each iteration when timer is running:
 * evaluate if time hasn/t reach zero.
 * If it has move along to the next question and make sure the time counter says 0.
 * If time remains, remove 1 second from time remaining counter and
 * decrease the width of the time left bar to reflect the new value
 */
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


/**
 * Call only from nextQuestion() function. as timer must only to be reset
 * when countdown reaches zero or user decides to go onto next question.
 */
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
 * nextQuestion() acts as a core function, calling on others to:
 * 1. Default answer/timer elements to their default style/values.
 * 2. Support pagination/move onto next question
 * 3. Manipulate DOM elements in the score tracker for user to see their
 * progress/performance.
 * 4. Restart timers and should user what question they are currently on
 * in the score tracker.
 * 5. Check if quiz has reached final length. 
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


/**
 * Populate the current question/answers in the DOM based of the shuffled
 * quizQuestions array.
 * Call only from quizStart() function (for first question)
 * or from nextQuestion() function for remaining questions
 */
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


/**
 * When called, loop through and reset and selected answer's elements.
 * to default style for next question 
 */
function resetAnswerStyles() {
  for (let answer of answerOptions) {
    answer.setAttribute("class", "answer");
  }
}


/**
 * Show yellow circle on score-tracker elem to show user current question num
 */
function progressIndicator(questionCount) {
  document.getElementsByClassName("circle")[questionCount]
    .style.backgroundColor = "yellow";
}


/**
 * Loop for answer buttons with eventlistener.
 * When triggered, calls the choiceAnswer() function to change the
 * class of the selected answer.
 * The class in turn applies css properties to make selection stand out to user.
*/
for (let answer of answerOptions) {
  answer.addEventListener("click", choiceAnswer);
}

/**
 * Click event passed to function to change selected button and it's style.
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
 * user and to tally the number of correct answers as the quiz progresses.
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
 * Change the appearance of #score-tracker element's children depending on
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


/**
 * Call only ONCE as quiz reaches max questions as defined by the quizLength variable
 * Show header and footer elements again as quiz finishes and enough space freed up on smaller
 * screens to display results section
 */
function endOfQuiz() {
  quizSection.style.display = "none";
  resultsSection.style.display = "inline-flex";
      headerSection.style.display = "block";
      footerSection.style.display = "block";
  userResults();
}

/**
 * Call only from endOfQuiz() function
 * Display correct questions answered by user/quiz total questions
 */
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