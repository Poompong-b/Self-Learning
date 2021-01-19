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
};

const YOU = blackjackDatabase["you"];
const DEALER = blackjackDatabase["dealer"];

//Sounds
const hitSound = new Audio("blackjack_assets/sounds/swish.m4a");

//Hit button Event
document.querySelector("#hit").addEventListener("click", blackjackHit);
//Deal button event
document.querySelector("#deal").addEventListener("click", blackjackDeal);

//HIT Function
function blackjackHit() {
  let card = randomCard();
  showCard(card, YOU);
  updateScore(card, YOU);
  showScore(YOU);
}

//DEAL Function
function blackjackDeal() {
  removeImage();
  clearScore();
  showScore(YOU);
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
