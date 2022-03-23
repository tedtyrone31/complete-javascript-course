'use strict';

/*
console.log(document.querySelector('.message').textContent);
console.log((document.querySelector('.message').textContent = 'Correct!'));

console.log((document.querySelector('.number').textContent = 3));
console.log((document.querySelector('.score').textContent = 10));

document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'Please enter a Number!';

    //when player wins
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.message').style.color = 'blue';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is too low
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      document.querySelector('.message').style.color = 'red';
      // labelScore = labelScore - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too high
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      document.querySelector('.message').style.color = 'red';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // console.log(secretNumber);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.message').style.color = '#fff';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

// document.querySelector('.number').value = secretNumber;
// document.querySelector('.labelScore').textContent;

// console.log((document.querySelector('.number').textContent = secretNumber));
