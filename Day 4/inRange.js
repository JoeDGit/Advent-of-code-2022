const fs = require("fs/promises");

fs.readFile(`${__dirname}/input.txt`, "utf8").then((taskRanges) => {
  const elfPairs = taskRanges
    .split("\r\n")
    .map((pair) => pair.split(","))
    .map((pair) => {
      return pair
        .map((elf) => elf.split("-"))
        .flat()
        .map(Number);
    });

  let countOne = 0;
  let countTwo = 0;

  elfPairs.forEach((pair) => {
    if (pair[0] <= pair[2] && pair[1] >= pair[3]) {
      countOne++;
      return;
    }
    if (pair[0] >= pair[2] && pair[1] <= pair[3]) countOne++;
  });
  elfPairs.forEach((pair) => {
    if (
      (pair[0] >= pair[2] && pair[0] <= pair[3]) ||
      (pair[1] >= pair[2] && pair[1] <= pair[3]) ||
      (pair[2] >= pair[0] && pair[2] <= pair[1]) ||
      (pair[2] >= pair[0] && pair[2] <= pair[1])
    ) {
      countTwo++;
    }
  });
});
