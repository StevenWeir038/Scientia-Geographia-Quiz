const landingSection =  document.getElementById('landing');
const newGameSection =  document.getElementById('new-game');
const playQuizButton = document.getElementById('play-quiz-btn');
const playerName = document.getElementById('player-name');
const quizLeaveBtn = document.getElementById('quiz-leave-btn');

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