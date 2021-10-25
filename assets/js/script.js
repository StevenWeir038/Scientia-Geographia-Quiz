/* jshint esversion: 8 */

let yaynay;
const quizLength = 10;
let questionCount = 0;
let correctNum = 0;
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


function startNewGame() {
  landingSection.style.display = "none";
  newGameSection.style.display = "inline-flex";
  playerName.focus();
}

playQuizButton.addEventListener("click", startNewGame);


function quizLeave() {
  playerName.value = "";
  landingSection.style.display = "inline-flex";
  newGameSection.style.display = "none";
}

quizLeaveBtn.addEventListener("click", quizLeave);


function quizStart() {
  if (playerName.value == "" || playerName.value == null || playerName.value == undefined) {
    playerName.style.borderColor = "red";
  } else {
    quizSection.style.display = "inline-flex";
    newGameSection.style.display = "none";
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
  }
}

let timeLeftWidth = 100;

function resetTimer() {
  counter.innerHTML = `30`;
  timeLeftWidth = 100;
  timeLeftBar.style.width = "100%";
  clearInterval(timer);
}


/** Use "Fisher-Yates" shuffle to reorder quiz questions array IN PLACE.
 * Call only once at start of quiz.
 * Credit to https://bost.ocks.org/mike/shuffle/
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


function trackerUpdate() {
  switch (yaynay) {
    case "correct":
      document.getElementsByClassName("circle")[questionCount - 1].style.backgroundColor = "green";
      break;
    case "incorrect":
      document.getElementsByClassName("circle")[questionCount - 1].style.backgroundColor = "red";
      break;
    case null:
    case undefined:
      document.getElementsByClassName("circle")[questionCount - 1].style.backgroundColor = "gray";
      break;
  }
}


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


function progressIndicator(questionCount) {
  document.getElementsByClassName("circle")[questionCount].style.backgroundColor = "yellow";
}


function endOfQuiz() {
  quizSection.style.display = "none";
  resultsSection.style.display = "inline-flex";
  userResults();
}


for (answer of answerOptions) {
  answer.addEventListener("click", choiceAnswer);
}

function choiceAnswer(event) {
  resetAnswerStyles();
  this.setAttribute("class", "answer-selected");
  let targetID = event.target.id;
  evaluateAnswer(targetID);
}

function resetAnswerStyles() {
  for (let answer of answerOptions) {
    answer.setAttribute("class", "answer");
  }
}


function evaluateAnswer(targetID) {
  let userAnswer = event.target.innerText;
  let correctAnswer = quizQuestions[questionCount].correctAns;

  if (correctAnswer === userAnswer) {
    correctNum++;
    yaynay = "correct";
  } else {
    yaynay = "incorrect";
  }
}


function userResults() {
  const resultScore = document.querySelector("#result-score");
  let resultOutput = `${correctNum} / ${questionCount}`;
  resultScore.innerHTML = resultOutput;

  const userFeedback = document.querySelector("#user-feedback");
  let player = playerName.value;
  if (correctNum <= 3) {
    userFeedback.innerHTML = `You"re no al-Idrisi are you ${player}...`;
  } else if (correctNum <= 6) {
    userFeedback.innerHTML = `${player}, a Mercator in the making...`;
  } else if (correctNum <= 8) {
    userFeedback.innerHTML = `Roger F. Tomlinson would be proud ${player}...`;
  } else if (correctNum < 10) {
    userFeedback.innerHTML = `${player} = Eratosthenes...`;
  } else if (correctNum >= 10) {
    userFeedback.innerHTML = `<a href="https://tim.2bn.dev/" target="_blank">${player} has been globetrotting like Tim.</a>`;
  }
}


const quizQuestions = [{
    questionNum: "1",
    questionText: "What is the capital city of Hungary?",
    choices: [
      "Budapest",
      "Bratislava",
      "Timisoara",
      "Zagreb"
    ],
    correctAns: "Budapest"
  },
  {
    questionNum: "2",
    questionText: "Which major city is located on two continents?",
    choices: [
      "Dublin",
      "Jakarta",
      "Baku",
      "Istanbul"
    ],
    correctAns: "Istanbul"
  },
  {
    questionNum: "3",
    questionText: "What is the biggest city in Africa by population?",
    choices: [
      "Cape Town",
      "Lagos",
      "Windhoek",
      "Cairo"
    ],
    correctAns: "Lagos"
  },
  {
    questionNum: "4",
    questionText: "What is the world's highest continent?",
    choices: [
      "North America",
      "Africa",
      "Antartica",
      "Oceania"
    ],
    correctAns: "Antartica"
  },
  {
    questionNum: "5",
    questionText: "If you list the world's countries in alphabetical order, what is the second?",
    choices: [
      "Algeria",
      "Botswana",
      "Zambia",
      "Albania"
    ],
    correctAns: "Albania"
  },
  {
    questionNum: "6",
    questionText: "The island of Ireland has how many counties?",
    choices: [
      "28",
      "32",
      "16",
      "25"
    ],
    correctAns: "32"
  },
  {
    questionNum: "7",
    questionText: "What country has the weakest economy by GDP (2020)?",
    choices: [
      "Costa Rica",
      "East Timor",
      "Burundi",
      "South Sudan"
    ],
    correctAns: "Burundi"
  },
  {
    questionNum: "8",
    questionText: "Machu Picchu can be found in which country",
    choices: [
      "Chile",
      "Peru",
      "New Zealand",
      "Equatorial Guinea"
    ],
    correctAns: "Peru"
  },
  {
    questionNum: "9",
    questionText: "Germany has how many constituent states?",
    choices: [
      "Twenty",
      "Twelwe",
      "Seven",
      "Sixteen"
    ],
    correctAns: "Sixteen"
  },
  {
    questionNum: "10",
    questionText: "The northernmost city in the world is?",
    choices: [
      "Longyearbyen",
      "Barentsburg",
      "Pyramiden",
      "Ankara"
    ],
    correctAns: "Pyramiden"
  },
  {
    questionNum: "11",
    questionText: "What percentage of the Earth's surface is covered by water?",
    choices: [
      "71%",
      "56%",
      "42%",
      "29%"
    ],
    correctAns: "71%"
  },
  {
    questionNum: "12",
    questionText: "The Grand Canyon can be found in which US state?",
    choices: [
      "Hawaii",
      "Oregon",
      "Arizona",
      "Alabama"
    ],
    correctAns: "Arizona"
  },
  {
    questionNum: "13",
    questionText: "Which two European countries does the Simplon Tunnel connect?",
    choices: [
      "Scotland and Ireland",
      "Denmark and Sweden",
      "France and Italy",
      "Switzerland and Italy"
    ],
    correctAns: "Switzerland and Italy"
  },
  {
    questionNum: "14",
    questionText: "What is the longest river in Asia?",
    choices: [
      "Yenesei",
      "Mekong",
      "Yangtze",
      "Indus"
    ],
    correctAns: "Yangtze"
  },
  {
    questionNum: "15",
    questionText: "The European Union consists of how many states?",
    choices: [
      "28",
      "27",
      "26",
      "25"
    ],
    correctAns: "27"
  },
  {
    questionNum: "16",
    questionText: "Which is the largest inland sea?",
    choices: [
      "Caspian Sea",
      "Black Sea",
      "Mediterranean Sea",
      "Dead Sea"
    ],
    correctAns: "Caspian Sea"
  },
  {
    questionNum: "17",
    questionText: " Which is the smallest independent state in the world?",
    choices: [
      "San Marino",
      "Luxembourg",
      "Andorra",
      "The Vatican"
    ],
    correctAns: "The Vatican"
  },
  {
    questionNum: "18",
    questionText: "Which range of mountains separates France from Spain?",
    choices: [
      "Alps",
      "Pyrenees",
      "Ural",
      "Mournes"
    ],
    correctAns: "Pyrenees"
  },
  {
    questionNum: "19",
    questionText: "What is not a GNSS system?",
    choices: [
      "Galileo",
      "Baidou",
      "USNO",
      "GLONASS"
    ],
    correctAns: "USNO"
  },
  {
    questionNum: "20",
    questionText: "The Name Of Which Central American Country Means The Saviour In English?",
    choices: [
      "Mexico",
      "Honduras",
      "El Salvador",
      "Belize"
    ],
    correctAns: "El Salvador"
  },
  {
    questionNum: "21",
    questionText: "Climate change is likely to create...",
    choices: [
      "more extreme weather events",
      "mass migration and food/water insecurity",
      "disrupt the global economy",
      "all of the above"
    ],
    correctAns: "all of the above"
  },
  {
    questionNum: "22",
    questionText: "What is the world's most remote human settlement?",
    choices: [
      "Tristan da Cunha",
      "Hakahau",
      "Barrow Town",
      "Nuuk"
    ],
    correctAns: "Tristan da Cunha"
  },
  {
    questionNum: "23",
    questionText: "What country doesn't share a border with North Korea?",
    choices: [
      "China",
      "South Korea",
      "Japan",
      "Russia"
    ],
    correctAns: "Japan"
  },
  {
    questionNum: "24",
    questionText: "Which African nation does not have a sea border?",
    choices: [
      "Benin",
      "Lesotho",
      "Tanzania",
      "Democratic Republic of Congo"
    ],
    correctAns: "Lesotho"
  },
  {
    questionNum: "25",
    questionText: "The Wilson cycle describes what process?",
    choices: [
      "Sea-level rise",
      "Redistibution of atmospheric heat",
      "Glacial retreat",
      "Continental drift"
    ],
    correctAns: "Continental drift"
  },
  {
    questionNum: "26",
    questionText: "The Chicxulub crater is associated with what deep time, mass extinction event?",
    choices: [
      "Cretaceous-tertiary",
      "Archaen/Proterozoic",
      "Permian/triassic",
      "Devonian"
    ],
    correctAns: "Cretaceous-tertiary"
  },
  {
    questionNum: "27",
    questionText: "What civilisation is often credited with producing the first world map?",
    choices: [
      "Celts",
      "Greeks",
      "Babylonians",
      "Xia dynasty"
    ],
    correctAns: "Greeks"
  },
  {
    questionNum: "28",
    questionText: "Geography is described as the ${what} of sciences?",
    choices: [
      "King",
      "Queen",
      "Jack",
      "Rook"
    ],
    correctAns: "Queen"
  }
];