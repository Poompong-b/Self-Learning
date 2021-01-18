//Add Event to icons
var icons = document.getElementsByClassName("game-icon");
Array.from(icons).forEach(function (icon) {
  icon.addEventListener("click", rpsGame);
});

//Container
var gameContainer = document.getElementById("icon-container");
var resultContainer = document.getElementById("result-container");

//Restart Button
var restartButton = document.getElementById("restart");
restartButton.style.display = "none";

function rpsGame(e) {
  var playerChoice, botChoice;
  //Set Player Choice
  playerChoice = e.target.id;
  //Set Bot Choice
  botChoice = setBotChoice();

  //Find Result
  var result = decide(playerChoice, botChoice);
  //Set Message to show
  var message = setMessage(result);
  //Display (playerChoice,botChoice,message)
  display(playerChoice, botChoice, message);

  //Hide Restart Button
  restartButton.style.display = "block";
}

function setBotChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function decide(playerChoice, botChoice) {
  var rpsDataBase = {
    rock: { scissors: "Win", rock: "Draw", paper: "Lose" },
    paper: { scissors: "Lose", rock: "Win", paper: "Draw" },
    scissors: { scissors: "Draw", rock: "Lose", paper: "Win" },
  };

  return rpsDataBase[playerChoice][botChoice];
}

function setMessage(result) {
  var messageDataBase = {
    Win: { message: "YOU WIN!", color: "green", botColor: "red" },
    Draw: { message: "DRAW!", color: "black", botColor: "black" },
    Lose: { message: "YOU LOST!", color: "red", botColor: "green" },
  };

  return messageDataBase[result];
}

function display(playerChoice, botChoice, resultMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  //Create Message Element
  var messageBlock = document.createElement("h2");
  messageBlock.textContent = resultMessage.message;
  //Set Message Color
  messageBlock.style.color = resultMessage.color;

  //Create Image
  var playerImage = document.createElement("img");
  playerImage.setAttribute("src", imageDatabase[playerChoice]);
  playerImage.setAttribute("width", "25%");
  playerImage.setAttribute("height", "200px");
  var botImage = document.createElement("img");
  botImage.setAttribute("src", imageDatabase[botChoice]);
  botImage.setAttribute("width", "25%");
  botImage.setAttribute("height", "200px");
  //Add Box-Shadow to result image
  playerImage.style.boxShadow = "0px 5px 20px " + resultMessage.color;
  botImage.style.boxShadow = "0px 5px 20px " + resultMessage.botColor;

  //Add Result to Result Container
  resultContainer.appendChild(playerImage);
  resultContainer.appendChild(messageBlock);
  resultContainer.appendChild(botImage);

  //Hide RPS
  gameContainer.style.display = "none";
  //Show Result & Restart Button
  resultContainer.style.cssText =
    "display : flex ;justify-content : space-around;";
}

//Restart Event
restartButton.addEventListener("click", restart);

function restart() {
  resultContainer.style.display = "none";
  while (resultContainer.firstChild) {
    resultContainer.removeChild(resultContainer.lastChild);
  }
  gameContainer.style.cssText =
    "display : flex ;justify-content : space-around;";

  //Hide Button
  restartButton.style.display = "none";
}
