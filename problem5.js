const problem4 = require("./problem4");

const problem5 = (inventory, year) => {
  if (!inventory || !year) return [];
  const years = problem4(inventory);
  const olderThan2000 = [];
  for (let i = 0; i < years.length; i++) {
    if (years[i] < year) {
      olderThan2000.push(inventory[i]);
    }
  }
  return olderThan2000;
};

module.exports = problem5;
