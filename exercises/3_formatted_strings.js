const exercise3 = () => {
  console.log("===Exercise 3===");

  // Please Complete Exercise 3 here
  //Define variables for test name, tester name, duration, and result.
  let testName = "js";
  let testerName = "Tania Smith";
  let duration = "2 days";
  let result = "pass";
  //Construct and log a formatted test report string using template literals.
  console.log(
    `${testerName} is busy doing $S{testName} and has ${duration} to ${result}.`
  );
  // End of Exercise 3
  console.log("Exercise 3 completed");
};

module.exports = exercise3;
