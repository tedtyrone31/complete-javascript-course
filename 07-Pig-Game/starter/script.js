'use strict';

// Selecting elements

// const player0El = document.querySelector('#name--0');
// const player1El = document.querySelector('#name--1');
const player0Active = document.querySelector('.player--0');
const player1Active = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
document.querySelector('.btn--new').style.display = 'none';

score0El.textContent = 0;
score1El.textContent = 0;
currentScore0El.textContent = 0;
currentScore1El.textContent = 0;
let playing = true;

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
// score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// currentScore0El.textContent = 0;
// currentScore1El.textContent = 0;

// =====================================================================
// =====================================================================

// =====================================================================
// =====================================================================
// RESETING THE GAME //-------- FUNCTION

btnNew.addEventListener('click', resetGame);

function resetGame() {
  //   dice = Math.trunc(Math.random() * 6) + 1;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  currentScore = 0;
  scores = [0, 0];
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  winnerDisplayUnset();

  // console.log(document.querySelector(`.player--${activePlayer}`));
  // document.querySelector('.player--0').classList.add('player--active');
}
// =====================================================================
// =====================================================================

// ROLLING THE DICE //-------- FUNCTION
// =====================================================================
// =====================================================================

btnRoll.addEventListener('click', rollDice);

function rollDice() {
  diceEl.classList.toggle('dice_move');
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //Check for rolled 1: if true,
    if (dice !== 1) {
      //add dice to current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // currentScore0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
}

// =====================================================================
// =====================================================================

// CLICK THE HOLD BUTTOn //-------- FUNCTION
// =====================================================================
// =====================================================================
btnHold.addEventListener('click', holdScore);

function holdScore() {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //scores[1] = scores [1] + currentScore;
    // console.log(scores[activePlayer]);
    //2. Check if players score is >= 100
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      diceEl.classList.add('hidden');
      winnerDisplay();
      // document.querySelector('.btn--roll').disabled = true;
      // document.querySelector('.btn--hold').disabled = true;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
    // //End the game
    //3. Switch to the next player
  }
}
// =====================================================================
// =====================================================================

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // activePlayer = activePlayer === 0 ? 1 : 0;
  player0Active.classList.toggle('player--active');
  player1Active.classList.toggle('player--active');
  currentScore = 0;

  if (activePlayer === 0) {
    activePlayer = 1;
    // player1Active.classList.add('player--active');
    // player0Active.classList.remove('player--active');
    // currentScore0El.textContent = 0; Not a better way to display
  } else {
    activePlayer = 0;
    // console.log(document.querySelector(`.player--${activePlayer}`));
  }
}

function winnerDisplay() {
  document.querySelector('.btn--new').style.backgroundColor = 'orangered';
  document.querySelector('.btn--new').style.color = '#fff';
  document.querySelector('.btn--new').style.width = '300px';
  document.querySelector('.btn--new').style.height = '300px';
  document.querySelector('.btn--new').style.display = 'block';
}

function winnerDisplayUnset() {
  document.querySelector('.btn--new').style.backgroundColor = 'unset';
  document.querySelector('.btn--new').style.color = 'unset';
  document.querySelector('.btn--new').style.width = 'unset';
  document.querySelector('.btn--new').style.height = 'unset';
  document.querySelector('.btn--new').style.display = 'none';
}
