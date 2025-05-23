const exercise2 = () => {
  console.log("===Exercise 2===");

  //Created a string representing a response message.
  let reponse = " Test competed successfully";

  //Clean up whitespace and converted it to lowercase.(trim removed whitespaces before and after a string)
  console.log(
    reponse.trim().toLowerCase(),
    "cleaned up whitespace and converted to lowercase"
  );

  //Check if certain keywords exist (e.g. "success", "fail").
  console.log(reponse.includes("success"), "success exists in the string");

  console.log(reponse.includes("fail"), "fail does not exist in the string");

  //Replaced part of the string with another word.
  console.log(
    reponse.replace("successfully", "success"),
    "successfully replaced with success"
  );
  // End of Exercise 2

  console.log("Exercise 2 completed");
};

module.exports = exercise2;
