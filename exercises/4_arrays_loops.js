const exercise4 = () => {
  console.log("===Exercise 4===");

  // Please Complete Exercise 4 here
  //Created an array of 5 QA test steps.
  let steps = [
    "Navigate to Login",
    "Enter Credentials",
    "Submit Form",
    "Login without Password",
    "Login without Email",
  ];
  //Log each step with its index.
  //i state index +1 because arrays always start with an index of 0
  steps.forEach((item, index) => {
    console.log(`Step ${index + 1}: ${item}`);
  });
  //Use map() to convert each step to uppercase.
  //map used to modify arrays and return a new array
  console.log(
    steps.map((item) => {
      return item.toUpperCase();
    })
  );
  //Use a for loop to simulate step execution by logging: Executing step X...
  for (let index = 0; index < steps.length; index++) {
    console.log(`Executing step ${index + 1}: ${steps[index]}`);
  }

  // End of Exercise 4
  console.log("Exercise 4 completed");
};

module.exports = exercise4;
