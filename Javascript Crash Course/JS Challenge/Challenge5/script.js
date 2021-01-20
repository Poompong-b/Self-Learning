//Database
let blackjackDatabase = {
  you: {
    scoreSpan: "#your-score",
    div: "#your-box",
    score: 0,
  },
  dealer: {
    scoreSpan: "#dealer-score",
    div: "#dealer-box",
    score: 0,
  },

  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"],
  cardScore: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    Q: 10,
    J: 10,
    A: [1, 11],
  },
  result: { win: 0, losses: 0, draw: 0 },
  states: { isStand: false, turnsOver: false },
};

const YOU = blackjackDatabase["you"];
const DEALER = blackjackDatabase["dealer"];

//Sounds
const hitSound = new Audio("blackjack_assets/sounds/swish.m4a");
const winSound = new Audio("blackjack_assets/sounds/cash.mp3");
const lostSound = new Audio("blackjack_assets/sounds/aww.mp3");

//Hit button Event
document.querySelector("#hit").addEventListener("click", blackjackHit);
//Deal button event
document.querySelector("#deal").addEventListener("click", blackjackDeal);
//Stand button Event
document.querySelector("#stand").addEventListener("click", blackjackStand);

//HIT Function
function blackjackHit() {
  if (blackjackDatabase["states"]["isStand"] === false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}

//Stand Function
async function blackjackStand() {
  blackjackDatabase["states"]["isStand"] = true;
  while (DEALER["score"] < 16) {
    dealerLogic();
    await sleep(1000);
  }
}

//DEAL Function
function blackjackDeal() {
  if (blackjackDatabase["states"]["turnsOver"] === true) {
    removeImage();
    clearScore();
    showScore(YOU);
    showScore(DEALER);
    clearResult();
  }
}

//Show card
function showCard(card, side) {
  if (side["score"] < 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `blackjack_assets/images/${card}.png`;
    document.querySelector(side["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

//Remove Card
function removeImage() {
  let playerImages = document.querySelectorAll("#your-box img");
  let dealerImages = document.querySelectorAll("#dealer-box img");

  for (let element of playerImages) {
    element.remove();
  }
  for (let element of dealerImages) {
    element.remove();
  }
}

//Random Cards
function randomCard() {
  let randomIndex = blackjackDatabase["cards"][Math.floor(Math.random() * 13)];
  return randomIndex;
}

//Update Score
function updateScore(card, side) {
  //Check for A Card
  if (side["score"] < 21) {
    if (card === "A") {
      if (side["score"] + blackjackDatabase["cardScore"][card][1] <= 21) {
        side["score"] += blackjackDatabase["cardScore"][card][1];
      } else {
        side["score"] += blackjackDatabase["cardScore"][card][0];
      }
    } else {
      side["score"] += blackjackDatabase["cardScore"][card];
    }
  }
}

//Show Score
function showScore(side) {
  if (side["score"] > 21) {
    document.querySelector(side["scoreSpan"]).textContent = "BUST";
    document.querySelector(side["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(side["scoreSpan"]).textContent = side["score"];
    document.querySelector(side["scoreSpan"]).style.color = "white";
  }
}

//Clear Score
function clearScore() {
  YOU["score"] = 0;
  DEALER["score"] = 0;
}

//Dealer
function dealerLogic() {
  let card = randomCard();
  showCard(card, DEALER);
  updateScore(card, DEALER);
  showScore(DEALER);

  if (DEALER["score"] > 15) {
    let winner = computeWinner();
    showResult(winner);
    blackjackDatabase["states"]["turnsOver"] = true;
  }
}

//Compute Winner & Return winner
function computeWinner() {
  let winner;
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      winner = YOU;
      blackjackDatabase["result"]["win"]++;
    }
  }
  if (YOU["score"] < DEALER["score"] || YOU["score"] > 21) {
    if (DEALER["score"] > 21) {
      blackjackDatabase["result"]["draw"]++;
    } else {
      winner = DEALER;
      blackjackDatabase["result"]["losses"]++;
    }
  }

  return winner;
}

//Show Result
function showResult(winner) {
  let message, color;

  if (winner === YOU) {
    message = "YOU WON";
    color = "green";
    winSound.play();
  } else if (winner === DEALER) {
    message = "YOU LOST";
    color = "red";
    lostSound.play();
  } else {
    message = "YOU DREW";
    color = "black";
  }

  document.querySelector("#result").textContent = message;
  document.querySelector("#result").style.color = color;

  //Update Result
  document.querySelector("#wins").textContent =
    blackjackDatabase["result"]["win"];
  document.querySelector("#losses").textContent =
    blackjackDatabase["result"]["losses"];
  document.querySelector("#draw").textContent =
    blackjackDatabase["result"]["draw"];
}

//clear result
function clearResult() {
  document.querySelector("#result").textContent = "Let's Play";
  document.querySelector("#result").style.color = "black";
  blackjackDatabase["states"]["isStand"] = false;
  blackjackDatabase["states"]["turnsOver"] = false;
}

//Sleep
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
