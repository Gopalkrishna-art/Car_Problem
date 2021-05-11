const inventory = require("../inventory");
const problem3 = require("../problem3");

const result = problem3(inventory);

if (result.length > 0) {
  console.log(result);
}
