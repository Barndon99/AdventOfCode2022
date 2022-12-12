import { readFileSync, promises } from 'fs';

function syncReadFile(filename: string) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  return arr;
}

const input = syncReadFile('./input.txt');
const sampleInput = syncReadFile('./sampleInput.txt');

const initTower: Record<string, string[]> = {
  '1': [],
  '2': [],
  '3': [],
  '4': [],
  '5': [],
  '6': [],
  '7': [],
  '8': [],
  '9': [],
}

let counter = 1;
for (let i = 0; i < input.length; i++) {
  const line = input[i];
  for (let j = 1; j < line.length + 4; j += 4) {
    initTower[`${counter}`].push(line[j]);
    counter++;
  }
  counter = 1;
}

console.log(initTower)

// Tower of Hanoi parsing is too hard
