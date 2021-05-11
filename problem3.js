const problem3 = (inventory) => {
  if (!inventory) return [];
  return inventory.sort((a, b) => {
    var nameA = a.car_model.toUpperCase();
    var nameB = b.car_model.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
};

module.exports = problem3;
