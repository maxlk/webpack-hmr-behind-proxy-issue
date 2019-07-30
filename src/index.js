import printMe from "./print.js";

console.log("Initial load");

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
