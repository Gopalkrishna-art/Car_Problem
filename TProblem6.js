const inventory = require("../inventory");
const problem6 = require("../problem6");

const result = problem6(inventory, ["Audi", "BMW"]);

console.log(JSON.stringify(result));
