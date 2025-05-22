const exercise2 = ()=>
    {
        console.log('Exercise 2');

        // Please Complete Exercise 2 here
let reponse = " Test competed successfully";

    console.log(reponse.trim().toLowerCase(), "cleaned up whitespace and converted to lowercase");

    console.log(reponse.includes("success"), "success exists in the string");

    console.log(reponse.includes("fail"), "fail does not exist in the string");

    console.log(reponse.replace("successfully", "success"), "successfully replaced with success");
        // End of Exercise 2

        console.log("Exercise 2 completed");
    }

module.exports = exercise2;