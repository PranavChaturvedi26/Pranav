"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there in no input
  if (!guess) {
    document.querySelector(".message").textContent = `⛔ No Number found`;
    // When Guess is correct
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = `🏆 Correct Number!`;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When Guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `📈 Too High Guess!`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `💥 You Lost The Game!`;
      document.querySelector(".score").textContent = 0;
    }
    // When guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `📉 Too Low Guess!`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `💥 You Lost The Game!`;
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = `?`;
  document.querySelector(".message").textContent = `Start Guessing...`;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
