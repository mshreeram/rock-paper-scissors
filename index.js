let gameMap = {
  0: "rock",
  1: "paper",
  2: "scissors"
}

function playRound (userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    return `Tie Match!!!`;
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
  } else {
    [won, lost] = [computerSelection, userSelection];
  }

  let message = `You ${userStatus}!!! ${won} beats ${lost}`;
  return message;
}


function getComputerSelection() {
  let index = Math.floor(Math.random() * 3);
  let currentSelection = gameMap[index];
  alert(`Computer Chose: ${currentSelection}`);
  return currentSelection;
}


for (let i = 0; i < 5; i++) {
  let userSelection = prompt("Choose between rock, paper, scissors").toLowerCase();
  let computerSelection = getComputerSelection();
  alert(playRound(userSelection, computerSelection));
}