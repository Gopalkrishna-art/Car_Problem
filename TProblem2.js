const inventory = require("../inventory");
const problem2 = require("../problem2");

const result = problem2(inventory);

if (Object.keys(result).length > 0) {
  console.log(`Last car is a ${result.car_make} ${result.car_model}`);
}
