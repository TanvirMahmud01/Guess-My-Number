'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing... ';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When no input
  if (!guess) {
    document.querySelector('.message').textContent = '⚠️ No Number!';
  }

  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
  //When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '👆 Too High!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '👇 Too Low!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
