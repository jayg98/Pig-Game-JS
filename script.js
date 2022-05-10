'use strict';

// Selecting HTML elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions for new game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Active player & score tracker
const scores = [0, 0];
let currScore = 0;
let currPlayer = 0;
// Dice roll functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currScore += dice;
    document.getElementById(`current--${currPlayer}`).textContent = currScore;
  } else {
    document.getElementById(`current--${currPlayer}`).textContent = 0;
    currPlayer = currPlayer === 0 ? 1 : 0;
    currScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
