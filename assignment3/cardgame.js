const cardCollection = ["CA", "C2", "C3", "HA", "H2", "H3"];

/*
 * Copying arrays from // https://holycoders.com/javscript-copy-array/
 * Shuffling arrays from // https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
 */

const cardRound = [...cardCollection];

function resetGame() {
  for (let i = cardRound.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardRound[i], cardRound[j]] = [cardRound[j], cardRound[i]];
  }
}

function flipCard(pos) {
  let clickedCard = document.getElementById(`cardpos${pos}`);
}
