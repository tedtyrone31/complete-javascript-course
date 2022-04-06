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
console.log(typeof secretNumber);
document.querySelector('.answer').textContent = secretNumber;

//function expression-------------

const changeMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// function declaration ------------------
// function changeMessage(message) {
//   document.querySelector('.message').textContent = message;
// }

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // when there is no input

  function hideAlert() {
    document.querySelector('.new_display').textContent = '';
  }

  function displayWinner() {
    document.querySelector('.new_display').textContent = 'You are a Winner!';
  }

  function hideGuessNumber() {}
  // document.querySelector('.guess').value = '';
  if (!guessNumber) {
    changeMessage('Please enter a Number!');
  } else if (guessNumber < 1 || guessNumber > 20) {
    document.querySelector('.message').classList.add('warning');
    document.querySelector('.message').classList.add('blink');
    document.querySelector('.message').textContent =
      'Please input number between 1 and 20 ONLY!';
    //when player wins
    // document.querySelector('.new_display').textContent;
  } else if (guessNumber === secretNumber) {
    // hideGuessNumber();
    document.querySelector('.message').classList.remove('default');
    document.querySelector('.message').classList.add('winner');
    document.querySelector('.message').classList.add('winner');
    document.querySelector('.message').classList.remove('warning');
    changeMessage('You win!');

    document.querySelector('.check').disabled = true;

    changeNumber(secretNumber);
    hideGuessNumber();
    changeNumberWidth('50rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNumber > secretNumber ? 'Number is too high' : 'Number is too low';
      document.querySelector('.message').classList.add('warning');
      document.querySelector('.message').classList.add('blink');
      // labelScore = labelScore - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //change message function
  //     //when guess is too low
  // } else if (guessNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     document.querySelector('.message').style.color = 'red';
  //     // labelScore = labelScore - 1;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too high
  // } else if (guessNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     document.querySelector('.message').style.color = 'red';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  //   // console.log(secretNumber);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.message').classList.add('default');
  document.querySelector('.message').classList.remove('blink');
  document.querySelector('.message').classList.remove('winner');
  document.querySelector('.message').classList.remove('warning');
  document.querySelector('.check').disabled = false;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.answer').textContent = secretNumber;
});

// document.querySelector('.number').value = secretNumber;
// document.querySelector('.labelScore').textContent;

// console.log((document.querySelector('.number').textContent = secretNumber));

function changeNumber(number) {
  document.querySelector('.number').textContent = number;
}

function changeNumberWidth(width) {
  document.querySelector('.number').style.width = width;
}
