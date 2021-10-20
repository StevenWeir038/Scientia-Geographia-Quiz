const quizQuestions = [{
    questionNum: '1',
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
    questionNum: '2',
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
    questionNum: '3',
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
    questionNum: '4',
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
    questionNum: '5',
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
    questionNum: '6',
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
    questionNum: '7',
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
    questionNum: '8',
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
    questionNum: '9',
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
    questionNum: '10',
    questionText: "The northernmost cities in the world is?",
    choices: [
      "Longyearbyen",
      "Barentsburg",
      "Pyramiden",
      "Ankara"
    ],
    correctAns: "Pyramiden"
  },
  {
    questionNum: '11',
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
    questionNum: '12',
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
    questionNum: '13',
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
    questionNum: '14',
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
    questionNum: '15',
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
    questionNum: '16',
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
    questionNum: '17',
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
    questionNum: '18',
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
    questionNum: '19',
    questionText: "What is not GNSS system?",
    choices: [
      "Galileo",
      "Baidou",
      "USNO",
      "GLONASS"
    ],
    correctAns: "USNO"
  },
  {
    questionNum: '20',
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
    questionNum: '21',
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
    questionNum: '22',
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
    questionNum: '23',
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
    questionNum: '24',
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
    questionNum: '25',
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
    questionNum: '26',
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
    questionNum: '27',
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
    questionNum: '28',
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
  timeLeft = 300;
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
    // link the width of the timeLeft referenced element directly to the counter itself 
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
  // was quizQuestions.length but we want a quiz of 10 questions only and want option of wider question selection;
  totalQuestions.innerHTML = quizLength;
  // set text content for quiz Q&As
  question.innerHTML = quizQuestions[questionID].questionText;
  choiceOne.innerHTML = quizQuestions[questionID].choices[0];
  choiceTwo.innerHTML = quizQuestions[questionID].choices[1];
  choiceThree.innerHTML = quizQuestions[questionID].choices[2];
  choiceFour.innerHTML = quizQuestions[questionID].choices[3];
}


function trackerUpdate() {
  if (quizQuestions[questionCount].userAns.value = 'correct') {
      document.getElementsByClassName('circle')[questionCount].style.backgroundColor = "green";
  } else if (quizQuestions[questionCount].userAns.value = 'incorrect') {
    document.getElementsByClassName('circle')[questionCount].style.backgroundColor = "red"
}
}


function nextQuestion() {
  console.log('nextQuestion function called');
  resetAnswerStyles();
  resetTimer();
  // before questionCount increments++, style the score-tracker elements for appropriate question.  Give task a function of its own.
  // Note we only want to p[erform htis task after user cannot influence answer of answer, ie aon next question select on timer running to zero.
  // Also we don't want use to see green correct or red incorrect at the same time as havving toi ability to change their response to the question. 
  trackerUpdate();
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
  console.log("the user answer is '" + userAnswer + "'");
  console.log("the correct answer is '" + correctAnswer + "'");

  //evaluate if user's answer is correct & add 1 point to total, if incorrect do not add 1 point to total, add/update a userAns property to the quizQuestion array
  if (correctAnswer === userAnswer) {
    correctNum++;
    console.log('the user score moves to ' + correctNum);
    quizQuestions[questionCount].userAns = (userAnswer === correctAnswer) ? 'correct' : 'incorrect';
    console.log("set userAns property value in quizQueztions[currentQuestion] to 'correct'");
  } else {
    console.log('the user score remains at ' + correctNum)
    console.log("set userAns property value in quizQueztions[currentQuestion] to 'incorrect'");
    quizQuestions[questionCount].userAns = (userAnswer !== correctAnswer) ? 'incorrect' : 'correct';
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