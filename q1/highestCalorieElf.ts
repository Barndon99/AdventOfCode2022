import { readFileSync, promises } from 'fs';
let highestCalories = 0;
let secondHighestCalories = 0;
let thirdHighestCalories = 0;

function syncReadFile(filename: string) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  return arr;
}

const elves = syncReadFile('./input.txt');

const placeElf = (elf: number) => {
  if (elf > highestCalories) {
    thirdHighestCalories = secondHighestCalories;
    secondHighestCalories = highestCalories;
    highestCalories = elf;
  }
  if (elf < highestCalories && elf > secondHighestCalories) {
    thirdHighestCalories = secondHighestCalories;
    secondHighestCalories = elf;
  }
  if (elf < secondHighestCalories && elf > thirdHighestCalories) {
    thirdHighestCalories = elf;
  }
}

let currentElf = 0;
for (const elf of elves) {
  if (elf !== '') {
    currentElf += Number(elf);
  } else {
    placeElf(currentElf)
    currentElf = 0;
  }
}

const topThreeTotal = highestCalories + secondHighestCalories + thirdHighestCalories;

console.log(highestCalories, topThreeTotal);
