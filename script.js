'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start Guessing... ');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When no input
  if (!guess) {
    displayMessage('⚠️ No Number!');
  }

  //When player wins
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? '👆 Too High!' : '👇 Too Low!');

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
