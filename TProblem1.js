const inventory = require("../inventory");
const problem1 = require("../problem1");

const result = problem1(inventory, 31);

if (Object.keys(result).length > 0) {
  console.log(
    `"Car 33 is a ${result.car_year} ${result.car_make} ${result.car_model}"`
  );
}
