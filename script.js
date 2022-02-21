// Déffinition des variables
var scores = [0, 0];
var scoreRound = 0;
var playerActive = 1;
var gameActive = true;
var resultatDe;

// initialisation du DOM
function playeGame() {
  //joueur 1
  document.querySelector('#playerName1').textContent = 'Player 1';
  document.querySelector('#scorePlayer1').textContent = '0';
  document.querySelector('#current1').textContent = '0';
  //joueur 2
  document.querySelector('#playerName2').textContent = 'Player 2';
  document.querySelector('#scorePlayer2').textContent = '0';
  document.querySelector('#current2').textContent = '0';
  // affichage du dé
  document.querySelector('#resultatDe').style.display = 'none';
}
playeGame();


// Nouvelle partie
document.querySelector('#btnNewGame').addEventListener('click', playeGame);

// control des évenements
// lancer le dé
document.querySelector('#btnRoll').addEventListener('click', function () {
  if (gameActive) {
    var resultatDe = Math.floor(Math.random() * 6) + 1;
    var diceImg = document.querySelector('#resultatDe');
    diceImg.style.display = 'block';
    diceImg.src = 'images/face' + resultatDe + '.jpg';
    if (resultatDe !== 1) {
      scoreRound += resultatDe;
      document.querySelector('#current' + playerActive).textContent = scoreRound;
    } else {
      nextPlayer();
    }
  }
});

// Charger les points

document.querySelector('#btnHold').addEventListener('click', function () {
  if (gameActive) {
    scores[playerActive] += scoreRound;
    document.querySelector('#scorePlayer' + playerActive).textContent = scores[playerActive];

    if (scores[playerActive] >= 100) {
      document.querySelector('#resultatDe').style.display = 'none';
    } else {
      nextPlayer();
    }
  }
  console.log()
});
// joueur suivant
function nextPlayer() {
  playerActive === 1 ? playerActive = 2 : playerActive = 1;
  scoreRound = 0;
  document.querySelector('#current1').textContent = '0';
  document.querySelector('#current2').textContent = '0';
  document.querySelector('#resultatDe').style.display = 'none';
}
