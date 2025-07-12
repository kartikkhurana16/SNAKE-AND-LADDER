/* script.js ----------------------------------------------------- */
const board = document.getElementById("board");

/* ---------- Build the 10×10 grid ---------- */
for (let i = 100; i >= 1; i--) {
  const cell = document.createElement("div");
  cell.className = "cell";
  if (i === 1) cell.classList.add("start");
  cell.dataset.index = i;
  cell.textContent = i;

  // Drop the token in the START cell
  if (i === 0) {
    const token = document.createElement("div");
    token.className = "token";
    cell.appendChild(token);
  }

  board.appendChild(cell);
}

/* ---------- Player name ---------- */
let player = localStorage.getItem("snakePlayer") || "";
if (!player) {
  player = prompt("Enter your name:")?.trim() || "Player";
  localStorage.setItem("snakePlayer", player);
}
document.getElementById("playerNameDisplay").textContent = player;

/* ---------- Dice & token movement ---------- */
const diceSpan = document.getElementById("diceValue");
let position = 1;                               // current square (1‑100)
let tokenEl = document.querySelector(".token"); // reference to the token div

document.getElementById("rollBtn").addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1; // 1–6
  diceSpan.textContent = roll;

  const target = position + roll;
  if (target > 100) return; // ignore overshoot, or change logic as you like

  // Move token: remove from old cell, append to new
  const newCell = document.querySelector(`[data-index='${target}']`);
  if (!newCell) return; // safeguard

  tokenEl.remove();        // detach from old cell
  newCell.appendChild(tokenEl);
  position = target;

  async function goToNextPage() {
  window.location.href = 'home.html'; // Replace 'another-page.html' with the actual path to your HTML file
}

  if(position===100)
  {
    alert("you won the game");
    
    alert("press 'OK' for new game");
    goToNextPage();

  }
  // TODO: add snake/ladder checks here and adjust `position` accordingly
});

/* -------------------------------------------------------------- */

