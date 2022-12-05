const fs = require("fs");

// [F]         [L]     [M]
// [T]     [H] [V] [G] [V]
// [N]     [T] [D] [R] [N]     [D]
// [Z]     [B] [C] [P] [B] [R] [Z]
// [M]     [J] [N] [M] [F] [M] [V] [H]
// [G] [J] [L] [J] [S] [C] [G] [M] [F]
// [H] [W] [V] [P] [W] [H] [H] [N] [N]
// [J] [V] [G] [B] [F] [G] [D] [H] [G]
//  1   2   3   4   5   6   7   8   9

const one = ["J", "H", "G", "M", "Z", "N", "T", "F"];
const two = ["V", "W", "J"];
const three = ["G", "V", "L", "J", "B", "T", "H"];
const four = ["B", "P", "J", "N", "C", "D", "V", "L"];
const five = ["F", "W", "S", "M", "P", "R", "G"];
const six = ["G", "H", "C", "F", "B", "N", "V", "M"];
const seven = ["D", "H", "G", "M", "R"];
const eight = ["H", "N", "M", "V", "Z", "D"];
const nine = ["G", "N", "F", "H"];

const num = [0, one, two, three, four, five, six, seven, eight, nine];

const readFile = fs.readFileSync("input.txt", "utf-8");
const instructions = readFile.split("\r\n");
const trimmedInstructions = instructions.map((instruction) => {
  const numbersOnly = instruction.replace(/\D+/g, " ");
  const splitNumbers = numbersOnly.split(" ");
  splitNumbers.shift();
  const splitNumbersToInt = splitNumbers.map(Number);
  return splitNumbersToInt;
});

for (let i = 0; i < trimmedInstructions.length; i++) {
  const moveAmount = trimmedInstructions[i][0];
  const moveFrom = num[trimmedInstructions[i][1]];
  const moveTo = num[trimmedInstructions[i][2]];
  for (let j = 0; j < moveAmount; j++) {
    const poppedOff = moveFrom.pop();
    moveTo.push(poppedOff);
  }
  if (i === trimmedInstructions.length - 1) {
    num.forEach((stack) => console.log(stack[stack.length - 1]));
  }
}

//Task 2

for (let i = 0; i < trimmedInstructions.length; i++) {
  const moveAmount = trimmedInstructions[i][0];
  const moveFrom = num[trimmedInstructions[i][1]];
  const moveTo = num[trimmedInstructions[i][2]];
  if (moveAmount === 1) {
    for (let j = 0; j < moveAmount; j++) {
      const poppedOff = moveFrom.pop();
      moveTo.push(poppedOff);
    }
  } else {
    const splicedOff = moveFrom.splice(-moveAmount);

    splicedOff.forEach((element) => moveTo.push(element));
  }
  if (i === trimmedInstructions.length - 1) {
    num.forEach((stack) => console.log(stack[stack.length - 1]));
  }
}
