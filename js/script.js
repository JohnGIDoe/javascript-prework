const buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById("button-rock");
buttonPaper = document.getElementById("button-paper");
buttonScissors = document.getElementById("button-scissors");

buttonRock.addEventListener("click", function() {
  buttonClicked("kamień");
});

buttonPaper.addEventListener("click", function() {
  buttonClicked("papier");
});

buttonScissors.addEventListener("click", function() {
  buttonClicked("nożyce");
});
