const fs = require("fs/promises");

fs.readFile(`${__dirname}/puzzleInput.txt`, "utf-8").then((backPacks) => {
  const individualBackpacks = backPacks.split("\r\n");
  const backpacksInTwoCompartments = individualBackpacks.map((backpack) => {
    const halfContentsLength = Math.ceil(backpack.length / 2);
    const firstCompartment = backpack.slice(0, halfContentsLength);
    const secondCompartment = backpack.slice(halfContentsLength);
    return [firstCompartment, secondCompartment];
  });

  const mutualItem = backpacksInTwoCompartments.map((backpack) => {
    const firstCompartmentSplit = backpack[0].split("");
    const mutualCharacter = firstCompartmentSplit.filter((item) =>
      backpack[1].includes(item)
    );
    const charCode = mutualCharacter[0].charCodeAt(0);
    if (charCode < 97) {
      return charCode - 38;
    }
    return charCode - 96;
  });
  const sumOfMutualItems = mutualItem.reduce((acc, val) => acc + val);

  const elfGroupSize = 3;
  const groupsOfThreeElves = individualBackpacks
    .map((elf, index) => {
      return index % elfGroupSize === 0
        ? individualBackpacks.slice(index, index + elfGroupSize)
        : null;
    })
    .filter((item) => item);

  const commonItemBetweenGroups = groupsOfThreeElves.map((group) => {
    const firstBackpackSplit = group[0].split("");
    const mutualItems = firstBackpackSplit.filter((item) => {
      if (group[1].includes(item) && group[2].includes(item)) {
        return item;
      }
    });
    const charCode = mutualItems[0].charCodeAt(0);
    if (charCode < 97) {
      return charCode - 38;
    }
    return charCode - 96;
  });
  const secondTaskTotal = commonItemBetweenGroups.reduce(
    (acc, val) => acc + val
  );
  console.log(secondTaskTotal);
});
