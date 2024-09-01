let form = document.querySelector("form");
let cardBody = document.querySelector(".card-body");
let guessNumber = form.querySelector("#guessNumber");
let checked = form.querySelector("#checked");
let result = cardBody.querySelector(".result");
let loastWinMessage = document.createElement("p");
let remainingAttempts = cardBody.querySelector(".remainingAttempts");

let totalAttempts = 5;
let attempts = 0;
let totalWon = 0;
let totalLost = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  attempts++;
  if (attempts == 5) {
    guessNumber.disabled = true;
    checked.disabled = true;
  }
  if (attempts < 6) {
    let guessingNumber = Number(guessNumber.value);
    checkResult(guessingNumber);
    remainingAttempts.innerHTML = `Remaining attempts : ${
      totalAttempts - attempts
    }`;
  }

  guessNumber.value = "";
});

function checkResult(guessNumber) {
  // console.log(guessNumber);
  let randomNumber = getRandomNumber(5);
  if (guessNumber === randomNumber) {
    result.innerHTML = `you have won `;
    totalWon++;
  } else {
    result.innerHTML = `you have lost : random number was : ${randomNumber}`;
    totalLost++;
  }

  loastWinMessage.innerHTML = `Won: ${totalWon} , Lost: ${totalLost}`;
  loastWinMessage.classList.add(".large");
  cardBody.appendChild(loastWinMessage);
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
