const fs = require("fs/promises");

fs.readFile(`${__dirname}/elves.txt`, "utf8").then((elfData) => {
  const elfArray = elfData.split("\r\n");
  const individualElfArray = [];
  let cutPos = 0;

  for (let i = 0; i < elfArray.length; i++) {
    if (elfArray[i] === "") {
      individualElfArray.push(elfArray.slice(cutPos, i));
      cutPos = i + 1;
    } else if (i === elfArray.length - 1) {
      individualElfArray.push(elfArray.slice(cutPos));
    }
  }

  const summedCalories = individualElfArray.map((elf) => {
    return elf.reduce((acc, val) => Number(acc) + Number(val));
  });

  const elvesSortedByCaloriesDesc = summedCalories.sort((a, b) => b - a);
  const topThreeElves = elvesSortedByCaloriesDesc.slice(0, 3);
  const topThreeTotal = topThreeElves.reduce(
    (acc, val) => Number(acc) + Number(val)
  );
});
