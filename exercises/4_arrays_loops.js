const exercise4 = ()=>
    {
        console.log('Exercise 4');

        // Please Complete Exercise 4 here
let steps = ["Navigate to Login", "Enter credentials", "Submit Form", "Login without Password", "Login without Email"];

steps.forEach((item, index) => {
    console.log(`Step ${index + 1}: ${item}`);
});

console.log(steps.map((item) => {
    return item.toUpperCase();
}));

for (let index = 0; index < steps.length; index++) {
    console.log(`Executing step ${index + 1}: ${steps[index]}`);
}
        // End of Exercise 4
        console.log("Exercise 4 completed");
    }   

module.exports = exercise4;
