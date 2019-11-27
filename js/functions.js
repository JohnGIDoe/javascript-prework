let argMoveId,
  argPlayerMove,
  argComputerMove,
  computerMove,
  playerMove,
  randomNumber,
  playerResult = 0,
  computerResult = 0;

function printMessage(msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function printResult(msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("result").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

function clearResult() {
  document.getElementById("result").innerHTML = "";
}

/**
  Function takes id of the move and returns name of the move
 */
function getMoveName(argMoveId) {
  console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  } else {
    printMessage(
      "Nie znam ruchu o id " + argMoveId + '. Zakładam, że chodziło o "kamień".'
    );
    return "kamień";
  }
}

/**
  Function compare moves done by computer and user and returns winner
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log(
    "wywołano funkcję displayResults z argumentami: " +
      argPlayerMove +
      ", " +
      argComputerMove
  );
  if (argPlayerMove == "papier" && argComputerMove == "kamień") {
    printMessage("Wygrywasz!");
    playerResult += 1;
  } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
    printMessage("Wygrywasz!");
    playerResult += 1;
  } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
    printMessage("Wygrywasz!");
    playerResult += 1;
  } else if (argPlayerMove === argComputerMove) {
    printMessage("Remis!");
  } else {
    printMessage("Przegrywasz :(");
    computerResult += 1;
  }
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  printResult("Gracz: " + playerResult + " - " + computerResult + " Komputer");
}

function buttonClicked(argButtonName) {
  clearMessages();
  clearResult();
  console.log(argButtonName + " został kliknięty");
  playerMove = argButtonName;
  console.log("ruch gracza to: " + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("wylosowana liczba to: " + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log("ruch komputera to: " + computerMove);
  displayResult(playerMove, computerMove);
}
