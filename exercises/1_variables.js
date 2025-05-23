function exercise1() {
  console.log("====Exercise 1====");

  // Declared and initialized one variable of each type.
  //const,var,let
  const testName = "Tania Smith";
  var isPassed = true;
  let testScore = 95;

  //Changed the value of a let variable and print both old and new values.
  console.log(testScore, "test score before");
  testScore = 100;
  console.log(testScore, "test score after");

  //Logged each variable and its type using typeof
  console.log(typeof testName, "test name");
  console.log(typeof isPassed, "is passed");
  console.log(typeof testScore, "test score");
}

module.exports = exercise1;
