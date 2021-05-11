const problem1 = (inventory, id) => {
  if (!inventory || !id) return {};

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id == id) {
      return inventory[i];
    }
  }

  return {};
};

module.exports = problem1;
