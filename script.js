
// Déffinition des variables
var scores = [0, 0];
var scoreRound = 0;
var playerActive = 0;
var gameActive = true;
var resultatDe;

// initialisation du DOM
function playeGame() {
  //joueur 1
  document.querySelector('#playerName0').textContent = 'Joueur 1';
  document.querySelector('#scorePlayer0').textContent = '0';
  document.querySelector('#current0').textContent = '0';
  //joueur 2
  document.querySelector('#playerName1').textContent = 'Joueur 2';
  document.querySelector('#scorePlayer1').textContent = '0';
  document.querySelector('#current1').textContent = '0';
  // affichage du dé
  document.querySelector('#resultatDe').style.display = 'none';
  // Suppression de WINNER en fin de partie
  document.querySelector('#playerName' + playerActive).remove.firstChild

}
playeGame();

document.querySelector('#btnNewGame').addEventListener('click', function () {
  window.location.reload()
});
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
      var exampleModal = new bootstrap.Modal(document.getElementById('scoreNullModal'))
      exampleModal.show()
      nextPlayer();
    }
  }
});

// Charger les points
document.querySelector('#btnHold').addEventListener('click', function () {
  if (gameActive) {
    scores[playerActive] += scoreRound;
    document.querySelector('#scorePlayer' + playerActive).textContent = scores[playerActive];

    if (scores[playerActive] >= 10) {
      document.querySelector('#resultatDe').style.display = 'none';
      document.querySelector('#playerName' + playerActive).firstChild.data = 'WINNER';
      gameActive = false;
    } else {
      nextPlayer();
    }
  }
});

// joueur suivant
function nextPlayer() {
  playerActive === 0 ? playerActive = 1 : playerActive = 0;
  scoreRound = 0;
  document.querySelector('#current0').textContent = '0';
  document.querySelector('#current1').textContent = '0';
  document.querySelector('#resultatDe').style.display = 'none';
  document.querySelector('#playerName0').classList.toggle('active')
  document.querySelector('#playerName1').classList.toggle('active')
}

// appel du modal regles
window.addEventListener('load', function () {
  var exampleModal = new bootstrap.Modal(document.getElementById('reglesModal'))
  exampleModal.show()
})