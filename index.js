let gameMap = {
  0: "rock",
  1: "paper",
  2: "scissors"
}

let viewMap = {
  0: "✊",
  1: "✋",
  2: "✌️"
}

let userWins = 0, computerWins = 0, message;

function playRound (userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    message =  `Tie Match!!!`;
    return message;
  }
  let userStatus, won, lost;
  if (userSelection === "rock") {
    if (computerSelection === "paper") {
      userStatus = "Lose";
    } else {
      userStatus = "Win";
    }
  } else if (userSelection === "paper") {
    if (computerSelection === "rock") {
      userStatus = "Win";
    } else {
      userStatus = "Lose";
    }
  } else {
    if (computerSelection === "rock") {
      userStatus = "Lose";
    } else {
      userStatus = "Win";
    }
  }
  if (userStatus === "Win") {
    [won, lost] = [userSelection, computerSelection];
    userWins++;
  } else {
    [won, lost] = [computerSelection, userSelection];
    computerWins++;
  }

  
  message = `You ${userStatus}!!! ${won} beats ${lost}`;
  return message;
}


function getComputerSelection() {
  let index = Math.floor(Math.random() * 3);
  let currentSelection = gameMap[index];
  document.querySelector('.computer-selection').textContent = viewMap[index];
  // alert(`Computer Chose: ${currentSelection}`);
  return currentSelection;
}

const buttons = document.querySelectorAll('.button')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const userSelection = button.getAttribute('id');
    let userEmojiSelection = (userSelection === 'rock') ? '✊' : (userSelection === 'paper' ? '✋' : '✌️');
    document.querySelector('.user-selection').textContent = userEmojiSelection;
    const computerSelection = getComputerSelection();
    if (userWins < 5 && computerWins < 5) {
      let message = playRound(userSelection, computerSelection);
    }
    updateScreen();
    setTimeout(checkWin, 10)
  })
})

function updateScreen() {
  document.querySelector('.userWinCount').textContent = userWins;
  document.querySelector('.computerWinCount').textContent = computerWins;
  document.querySelector('.result').textContent = message;
}


function checkWin() {
  if (userWins >= 5 || computerWins >= 5) {
    let finalMsg = (userWins > computerWins) ? (`You won`) : ( `You lose`);
    document.querySelector('.modal-title').textContent = finalMsg;
    document.querySelector('#modal').showModal();
  }
}

document.querySelector('.play-again').addEventListener('click', () => {
  location.reload();
})