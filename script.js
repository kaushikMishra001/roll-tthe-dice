"use strict";
const player0El = document.querySelector(".player--0");

const player1El = document.querySelector(".player--1");

// starting part for zero the element
const score0El = document.getElementById("score--0");

const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");

const current1El = document.getElementById("current--1");

// hide dice when game starts
const diceEl = document.querySelector(".dice");

const NewGame = document.querySelector("btn--new");

const rolldDice = document.querySelector(".btn--roll");

const Hold = document.querySelector(".btn--hold");

score0El.textContent = 0;

score1El.textContent = 0;

diceEl.classList.add("hidden");

let scores = [0, 0];

let correntscore = 0;

let activeplayer = 0;

let playing = true;

const init = function () {
  scores = [0, 0];

  correntscore = 0;

  activeplayer = 0;

  playing = true;

  score0El.textContent = 0;

  score1El.textContent = 0;

  current0El.textContent = 0;

  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  player0El.classList.remove("player--winner");

  player1El.classList.remove("player--winner");

  player0El.classList.add("player--active");

  player1El.classList.remove("player--active");
};

init();

// calling sunction. set the textcontent to zero.

const kau = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  correntscore = 0;

  activeplayer = activeplayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");

  player1El.classList.toggle("player--active");
};

rolldDice.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    console.log(dice);

    diceEl.classList.remove("hidden");

    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      correntscore += dice;

      document.getElementById(`current--${activeplayer}`).textContent =
        correntscore;
    } else {
      kau();
    }
  }
});

Hold.addEventListener("click", function () {
  if (playing) {
    scores[activeplayer] += correntscore;

    document.querySelector(`#score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 20) {
      playing = false;

      diceEl.classList.add("hidden");

      document

        .querySelector(`.player--${activeplayer}`)

        .classList.add("player--winner");

      document

        .querySelector(`.player--${activeplayer}`)

        .classList.remove("player--active");
    } else {
      kau();
    }
  }
});

NewGame.addEventListener("click", init);
