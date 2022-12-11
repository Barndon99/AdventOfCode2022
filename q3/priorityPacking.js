const { readFileSync, promises } = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  return arr;
}

const supplyValueMap = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26,
  'A': 27,
  'B': 28,
  'C': 29,
  'D': 30,
  'E': 31,
  'F': 32,
  'G': 33,
  'H': 34,
  'I': 35,
  'J': 36,
  'K': 37,
  'L': 38,
  'M': 39,
  'N': 40,
  'O': 41,
  'P': 42,
  'Q': 43,
  'R': 44,
  'S': 45,
  'T': 46,
  'U': 47,
  'V': 48,
  'W': 49,
  'X': 50,
  'Y': 51,
  'Z': 52,
}

const backPacks = syncReadFile('./backpacks.txt');

const getBackPackPriority = (backPacks) => {
  let duplicatedSupplies = [];
  let priorityOfPack = 0;
  
  
  for (const backPack of backPacks) {
    const length = backPack.length;
    const firstCompartment = backPack.slice(0, (length / 2))
    const secondCompartment = backPack.slice((length / 2), length)
    console.log(firstCompartment, secondCompartment);
    for (const letter of firstCompartment) {
      if (secondCompartment.includes(letter)) {
        duplicatedSupplies.push(letter);
        priorityOfPack += supplyValueMap[letter];
        break;
      }
    }
  }
  
  console.log(duplicatedSupplies, priorityOfPack);
}

// getBackPackPriority(backPacks);

const getBadges = (backPacks) => {
  let badges = [];
  let badgePriorityTotal = 0;
  console.log(backPacks.length)
  for (let i = 0; i < backPacks.length; i += 3) {
    const firstBackPack = backPacks[i];
    const secondBackPack = backPacks[i + 1];
    const thirdBackPack = backPacks[i + 2];

    for (const letter of firstBackPack) {
      if (secondBackPack.includes(letter) && thirdBackPack.includes(letter)) {
        badges.push(letter);
        badgePriorityTotal += supplyValueMap[letter]
        break;
      }
    }
  }

  console.log(badgePriorityTotal, badges.length)
}

getBadges(backPacks)



