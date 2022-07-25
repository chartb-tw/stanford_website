const cardCollection = ["CA", "C2", "C3", "HA", "H2", "H3"];

/*
 * Copying arrays from // https://holycoders.com/javscript-copy-array/
 * Shuffling arrays from // https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
 */

const cardRound = [...cardCollection];

let heldCard = "";

if (document.querySelectorAll(".card-img").length === cardCollection.length) {
  console.log("Card quantity matches amount of card positions in document");
} else {
  console.log("The amount of card positions do not match between HTML and JS");
}

function hideCardFaces() {
  const allCards = document.querySelectorAll(".card-img");
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].setAttribute("src", "cards/rear.png");
    allCards[i].setAttribute("onclick", `selectCard(${i})`);
    allCards[i].classList.remove("hide-card");
  }
}

function preventCardClickable() {
  const allCards = document.querySelectorAll(".card-img");
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].setAttribute("onclick", `() => null`);
  }
}

function enableCardClickable() {
  const allCards = document.querySelectorAll(".card-img");
  for (let i = 0; i < allCards.length; i++) {
    if (!allCards[i].classList.contains("hide-card")) {
      allCards[i].setAttribute("onclick", `selectCard(${i})`);
    }
  }
}

function flipCard(pos) {
  let clickedCard = document.getElementById(`cardpos${pos}`);
  clickedCard
    .querySelector("img")
    .setAttribute("src", `cards/${cardRound[pos]}.png`);
}

function resetGame() {
  for (let i = cardRound.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardRound[i], cardRound[j]] = [cardRound[j], cardRound[i]];
  }
  hideCardFaces();
}

function checkCardMatch(card1, card2) {
  let firstCard = document.getElementById(`cardpos${card1}`);
  let secondCard = document.getElementById(`cardpos${card2}`);
  if (cardRound[Number(card1)][1] === cardRound[Number(card2)][1]) {
    firstCard.querySelector("img").classList.add("hide-card");
    firstCard.querySelector("img").setAttribute("onclick", `() => ()`);
    secondCard.querySelector("img").classList.add("hide-card");
    secondCard.querySelector("img").setAttribute("onclick", `() => ()`);
  } else {
    firstCard.querySelector("img").setAttribute("src", "cards/rear.png");
    secondCard.querySelector("img").setAttribute("src", "cards/rear.png");
  }
  heldCard = "";
  enableCardClickable();
}

function selectCard(pos) {
  preventCardClickable();
  if (heldCard === "") {
    flipCard(pos);
    heldCard = pos;
    enableCardClickable();
  } else if (pos != heldCard) {
    let test = heldCard;
    flipCard(pos);
    setTimeout(() => checkCardMatch(pos, test), 1500);
  } else {
    enableCardClickable();
  }
}
