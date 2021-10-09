const landingSection =  document.getElementById('landing');
const newGameSection =  document.getElementById('new-game');
const playQuizButton = document.getElementById('play-quiz-btn');
const playerName = document.getElementById('player-name');

function startNewGame() {
    landingSection.style.display = 'none';
    newGameSection.style.display = 'inline-flex';
    playerName.focus();
    console.log('startNewGame function called');
}

playQuizButton.addEventListener('click', startNewGame);