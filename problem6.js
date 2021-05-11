const problem6 = (inventory, opts) => {
  if (!inventory || !opts) return [];
  const arr = [];
  for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < opts.length; j++) {
      if (inventory[i].car_make === opts[j]) {
        arr.push(inventory[i]);
      }
    }
  }

  return arr;
};

module.exports = problem6;
