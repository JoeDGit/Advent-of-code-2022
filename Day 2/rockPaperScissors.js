const fs = require("fs/promises");

fs.readFile(`${__dirname}/rpsData.txt`, "utf-8").then((rpsRounds) => {
  const rpsRoundsInArray = rpsRounds.split("\n");
  const eachRoundSplitIntotwoInputs = rpsRoundsInArray.map((round) =>
    round.split(" ")
  );
  const roundResults = eachRoundSplitIntotwoInputs.map((round) => {
    if (round[0] === "A" && round[1] === "Y") {
      return 8;
    } else if (round[0] === "B" && round[1] === "Z") {
      return 9;
    } else if (round[0] === "C" && round[1] === "X") {
      return 7;
    } else if (round[0] === "A" && round[1] === "X") {
      return 1 + 3;
    } else if (round[0] === "B" && round[1] === "Y") {
      return 2 + 3;
    } else if (round[0] === "C" && round[1] === "Z") {
      return 3 + 3;
    } else if (round[1] === "Y") {
      return 2;
    } else if (round[1] === "X") {
      return 1;
    } else if (round[1] === "Z") {
      return 3;
    }
  });

  const totalScore = roundResults.reduce((acc, val) => acc + val);

  const secondRoundResults = eachRoundSplitIntotwoInputs.map((round) => {
    if (round[1] === "X") {
      if (round[0] === "A") {
        return 3;
      } else if (round[0] === "B") {
        return 1;
      } else return 2;
    } else if (round[1] === "Y") {
      if (round[0] === "A") {
        return 4;
      } else if (round[0] === "B") {
        return 5;
      } else return 6;
    } else {
      if (round[0] === "A") {
        return 8;
      } else if (round[0] === "B") {
        return 9;
      } else return 7;
    }
  });

  const secondTaskTotalScore = secondRoundResults.reduce(
    (acc, val) => acc + val
  );
});

//This is disgusting
