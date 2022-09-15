const checkWin = function (board, n = 3) {
  // Horizontal & Vertival
  let flag1 = true,
    flag2 = true,
    flag3 = true,
    flag4 = true;
  for (let i = 0; i < n; i++) {
    [flag1, flag2] = [true, true];
    let check1 = -1,
      check2 = -1;
    if (board[i][0] !== "") check1 = board[i][0];
    if (board[0][i] !== "") check2 = board[0][i];
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== check1) flag1 = false;
      if (board[j][i] !== check2) flag2 = false;
    }
    if (flag1 || flag2) return true;
  }

  // Left & right Diagonals
  let diag1 = -1,
    diag2 = -1;
  if (board[0][0] !== "") diag1 = board[0][0];
  if (board[0][n - 1] !== "") diag2 = board[0][n - 1];
  for (let i = 0; i < n; i++) {
    if (diag1 !== board[i][i]) flag3 = false;
    if (diag2 !== board[i][n - 1 - i]) flag4 = false;
  }
  if (flag3 || flag4) return true;
};

const validatePosition = (board, i, j) => (board[i][j] === "" ? true : false);

const markTile = function (board, i, j, playerNo) {
  playerNo === 1 ? (board[i][j] = "X") : (board[i][j] = "O");
  for (i of board) console.log(i);
  console.log();
};

const chooseBestPos = function (board, symb, n = 3) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!validatePosition(board, i, j)) continue;
      board[i][j] = symb;
      if (checkWin(board)) {
        markTile(board, i, j, 2);
        return symb === "O" ? true : false;
      }
      board[i][j] = "";
    }
  }
  return undefined;
};

const system = function (board) {
  let x = 1,
    y = 1;
  const res = chooseBestPos(board, "O") || chooseBestPos(board, "X");
  if (res !== undefined) return res;

  while (!validatePosition(board, x, y)) {
    x = parseInt(Math.random() * 3);
    y = parseInt(Math.random() * 3);
  }
  markTile(board, x, y, 2);
  if (checkWin(board)) return true;
};

const readInput = async function () {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ans = await new Promise((resolve, _) => {
    readline.question("enter positions :", (a) => {
      readline.close();
      resolve(a);
    });
  });
  return [ans[0], ans[2]];
};

const helper = async function () {
  const n = 3;
  const board = [...Array(n)].map((el) => [...Array(n).fill("")]);
  let rempos = n * n;

  while (rempos > 0) {
    if (rempos === 1) break;
    let [x, y] = await readInput();
    while (!validatePosition(board, x, y)) {
      [x, y] = await readInput();
    }
    markTile(board, x, y, 1);
    if (checkWin(board)) return "player wins";

    if (system(board)) return "computer wins";
    rempos -= 2;
  }
  return "Tie! no one wins";
};

const TicTacToe = async function () {
  const res = await helper();
  console.log(res);
};

TicTacToe();
