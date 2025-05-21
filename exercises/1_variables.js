function exercise1()
    {
        console.log('Exercise 1');

        // Please Complete Exercise 1 here
        const testName = "John Doe";
        var isPassed  = true;
        let testScore = 95;

        console.log(testScore, 'test score before')
        testScore = 100;
        console.log(testScore, 'test score after');

        console.log(typeof testName, 'test name');
        console.log(typeof isPassed, 'is passed');
        console.log(typeof testScore, 'test score');
    }

module.exports = exercise1;