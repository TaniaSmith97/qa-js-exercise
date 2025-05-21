const exercise5 = ()=>
    {
        console.log('Exercise 5');

        // Please Complete Exercise 5 here
        const logResult = (testName, passed) => {
             return `Hello ${testName}, you ${passed}`
        };
        console.log(logResult("John", "pass"), "logResult");

        const calculateDuration = (startTime, endTime) => {
            const _startTime = new Date(startTime);
            const _endTime = new Date(endTime);
            const duration = (_endTime - _startTime) / 1000; // in seconds
            return duration;
        };
        console.log(calculateDuration("2023-10-01T10:00:00", "2023-10-01T12:00:00"), "elapsed time");
        const testCase = {
            name: "Test Case 1",
            status: "passed",
            duration: 120,
            startTime: "2023-10-01T10:00:00",
            endTime: "2023-10-01T12:00:00"
        };
        const formatReport = (testCase) => {
            const duration = calculateDuration(testCase.startTime, testCase.endTime);
            return `Test Case: ${testCase.name}, Status: ${testCase.status}, Duration: ${duration} seconds`;
        };
        console.log(formatReport(testCase), "formatted report");
        // End of Exercise 5
        console.log("Exercise 5 completed");
    }


module.exports = exercise5;