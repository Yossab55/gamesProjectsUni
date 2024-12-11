makeTopScore();


//* ========== function section ============ 
//get top score and append it to span score
function makeTopScore() {
  let gamesNames = getNamesOfGames();
  let topScoreSpan = document.querySelectorAll(
    ".container .holder .box > span"
  );
  let size = gamesNames.length;
  

  for (let i = 0; i < size; i++) {
    getScoreAndAppendItTo(topScoreSpan[i], gamesNames[i])
  }
  // return localStorageScore;
}
function getNamesOfGames() {
  let gameNodeA = document.querySelectorAll(".container .holder .box a");
  let gameNames = [];
  for (let i = 0; i < gameNodeA.length; i++) {
    let href = gameNodeA[i].getAttribute("href");
    gameNames.push(href.slice(6, href.lastIndexOf("/")));
  }
  return gameNames;
}
function getScoreAndAppendItTo(span, name) {
  let localStorageScore = window.localStorage;
  let score = localStorageScore.getItem(name);
  if (score !== null) {
    span.textContent += score;
  } else {
    span.textContent += "not played yet";
  }
}