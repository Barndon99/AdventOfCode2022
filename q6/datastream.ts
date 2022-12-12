import { readFileSync, promises } from 'fs';

function syncReadFile(filename: string) {
  const contents = readFileSync(filename, 'utf-8');
  return contents;
}

const input = syncReadFile('./input.txt');
const sampleInput = syncReadFile('./sampleInput.txt');

function findIndex(input: string) {
  for (let i = 0; i < input.length - 4; i++) {
    const last4 = input.slice(i, i + 4);
    const unique = new Set(last4);
    console.log(input[0], input[1791], input[1792], input[1793], input[1794])
    if (unique.size === 4) {
      console.log(unique)
      // I love off by one errors :D here lies my hopes and dreams
      return i + 4;
    }
  }
  return -1;
}

function findMessageIndex(input: string) {
  for (let i = 0; i < input.length - 14; i++) {
    const last14 = input.slice(i, i + 14);
    const unique = new Set(last14);
    if (unique.size === 14) {
      // I love off by one errors :D here lies my hopes and dreams
      return i + 14;
    }
  }
  return -1;
}

const output = findIndex(input);
const messageOutput = findMessageIndex(input);
console.log(output, messageOutput)