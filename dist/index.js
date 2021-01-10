let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);
let buttons = document.getElementsByClassName("btn-info");
let levels = document.getElementsByClassName("levels");
let attemptsLeft = document.getElementById("attemptsLeft");
let numberType = document.getElementById("numberType");
let message = document.getElementById("message");
let correctGuess = document.getElementById("correctGuess");
let startAgain = document.getElementById("startAgain");
let info = document.getElementById("info");
attemptsLeft.value = 4;
for (i = 0; i < levels.length; i++) {
  levels[i].addEventListener("click", levelsBtn);
}
function levelsBtn(e) {
  if (e.target.innerHTML === "2") {
    attemptsLeft.value = 3;
    info.innerHTML = "This is level 2";
    info.style.color = "orange";
  } else if (e.target.innerHTML === "3") {
    attemptsLeft.value = 2;
    info.innerHTML = "This is level 3";
    info.style.color = "red";
  } else {
    attemptsLeft.value = 4;
  }
}
if (randomNumber % 2 !== 0) {
  numberType.innerText = `Guess an ODD number from the options below.`;
} else {
  numberType.innerText = `Guess an EVEN number from the options below.`;
}
for (i = 0; i < buttons.length; i++) {
  if (randomNumber % 2 !== 0) {
    buttons[1].style.backgroundColor = "black";
    buttons[3].style.backgroundColor = "black";
    buttons[5].style.backgroundColor = "black";
    buttons[7].style.backgroundColor = "black";
    buttons[9].style.backgroundColor = "black";
    buttons[11].style.backgroundColor = "black";
    buttons[13].style.backgroundColor = "black";
    buttons[15].style.backgroundColor = "black";
    buttons[17].style.backgroundColor = "black";
    buttons[19].style.backgroundColor = "black";
  } else if (randomNumber % 2 === 0) {
    buttons[0].style.backgroundColor = "black";
    buttons[2].style.backgroundColor = "black";
    buttons[4].style.backgroundColor = "black";
    buttons[6].style.backgroundColor = "black";
    buttons[8].style.backgroundColor = "black";
    buttons[10].style.backgroundColor = "black";
    buttons[12].style.backgroundColor = "black";
    buttons[14].style.backgroundColor = "black";
    buttons[16].style.backgroundColor = "black";
    buttons[18].style.backgroundColor = "black";
  }

  buttons[i].addEventListener("click", clickedBtn);
}

function clickedBtn(e) {
  if (attemptsLeft.value != 0) {
    buttons[Number(e.target.innerHTML) - 1].style.backgroundColor = "red";
  }
  if (attemptsLeft.value != 0) {
    attemptsLeft.value--;
  }
  //console.log(attemptsLeft.value);
  //attemptsLeft.value = 3;
  if (randomNumber > Number(e.target.innerHTML)) {
    if (attemptsLeft.value != 0) {
      message.innerText = `Your guess is low`;
      message.style.color = "red";
    }
  } else if (randomNumber < Number(e.target.innerHTML)) {
    if (attemptsLeft.value != 0) {
      message.innerText = `Your guess is high`;
      message.style.color = "red";
    }
  }
  if (attemptsLeft.value == 0 && randomNumber !== Number(e.target.innerHTML)) {
    if (message.innerHTML != "Congrats. You have won!!!") {
      message.innerText = "Try again.You have lost . ";
      message.style.color = "red";
      correctGuess.innerText = `Correct guess was ${randomNumber}`;
      correctGuess.style.color = "green";
    }

    attemptsLeft.value = 0;
  } else if (randomNumber === Number(e.target.innerHTML)) {
    buttons[Number(e.target.innerHTML) - 1].style.backgroundColor = "green";
    message.innerText = "Congrats. You have won!!!";
    message.style.color = "green";
    attemptsLeft.value = 0;
  }

  console.log(attemptsLeft.value);
}

startAgain.addEventListener("click", () => {
  location.reload();
});
