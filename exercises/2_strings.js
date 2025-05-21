const exercise2 = ()=>
    {
        // Please Complete Exercise 2 here
        let response = " Test completed successfully ";

        // End of Exercise 2
        console.log(response.trim().toLowerCase(), "white space removed and converted to lowercase");

        console.log(response.includes("success"), "success is present in the string");

        console.log(response.includes("fail"), "fail is present in the string");

        console.log(response.replace("successfully", "success"), "successfully replaced with success");
    }

module.exports = exercise2;