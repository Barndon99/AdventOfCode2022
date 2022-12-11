import { readFileSync, promises } from 'fs';

function syncReadFile(filename: string) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  return arr;
}
// const games = syncReadFile('./sampleInput.txt');
const games = syncReadFile('./input.txt');
let score = 0;

// const getGameScore = (game: string) => {
//   const playerSelection = game[2];
//   const opponentSelection = game[0];
//   console.log(game[0], game[2])
//   const playerScore = playerSelection === 'X' ? 1 : playerSelection === 'Y' ? 2 : 3;

//   const didWin = playerSelection === 'X' && opponentSelection === 'C' || playerSelection === 'Y' && opponentSelection === 'A' || playerSelection === 'Z' && opponentSelection === 'B';
//   const didDraw = playerSelection === 'X' && opponentSelection === 'A' || playerSelection === 'Y' && opponentSelection === 'B' || playerSelection === 'Z' && opponentSelection === 'C';

//   const outcomeScore = didWin ? 6 : didDraw ? 3 : 0;

//   return playerScore + outcomeScore;
// }

const getGameScore = (playerSelection: string, outcome: string) => {
  const playerScore = playerSelection === 'D' ? 1 : playerSelection === 'E' ? 2 : 3;
  const outcomeScore = outcome === 'win' ? 6 : outcome === 'draw' ? 3 : 0;

  return playerScore + outcomeScore;
}

const getGameOutcome = (game: string): string => {
  const desiredSelection = game[2];
  let outcome = '';
  if (desiredSelection === 'X') {
    outcome = 'lose';
  }
  if (desiredSelection === 'Y') {
    outcome = 'draw';
  }
  if (desiredSelection === 'Z') {
    outcome = 'win';
  }

  return outcome
}

// ['A', 'B', 'C'] ['rock', 'paper', 'scissors']
// ['D', 'E', 'F'] ['rock', 'paper', 'scissors']


const getPlayerSelectionWithOutcome = (outcome: string, opponentSelection: string): string => {
  let playerSelection = '';
  if (outcome === 'win') {
    if (opponentSelection === 'A') {
      playerSelection = 'E';
    }
    if (opponentSelection === 'B') {
      playerSelection = 'F';
    }
    if (opponentSelection === 'C') {
      playerSelection = 'D';
    }
  }
  if (outcome === 'draw') {
    if (opponentSelection === 'A') {
      playerSelection = 'D';
    }
    if (opponentSelection === 'B') {
      playerSelection = 'E';
    }
    if (opponentSelection === 'C') {
      playerSelection = 'F';
    }
  }
  if (outcome === 'lose') {
    if (opponentSelection === 'A') {
      playerSelection = 'F';
    }
    if (opponentSelection === 'B') {
      playerSelection = 'D';
    }
    if (opponentSelection === 'C') {
      playerSelection = 'E';
    }
  }

  return playerSelection;
}

for (const game of games) {
  const outcome = getGameOutcome(game);
  const getPlayerSelection = getPlayerSelectionWithOutcome(outcome, game[0])
  const currentGame = getGameScore(getPlayerSelection, outcome);
  score += currentGame;
}

console.log(score);