const exercise5 = () => {
  console.log("===Exercise 5===");

  // Please Complete Exercise 5 here
  //Wrote a function caled logResult(testName, passed) that logs pass/fail.
  const logResult = (testName, passed) => {
    return `Helo ${testName}, you ${passed}`;
  };
  console.log(logResult("Tania", "pass"), "logResult");
  console.log(logResult("Tania", "fail"), "logResult");

  //Write a function calculateDuration(startTime, endTime) that returns elapsed time.
  const calculateDuration = (startTime, endTime) => {
    const _startTime = new Date(startTime).getTime();
    const _endTime = new Date(endTime).getTime();
    const duration = (_endTime - _startTime) / 1000; //divided by 1000 to get seconds
    return duration;
  };
  console.log(
    calculateDuration("2023-10-01T10:00:00", "2023-10-01T12:00:00"),
    "elasped time"
  );
  const testCase = {
    name: "Test Case 1",
    status: "passed",
    duration: 120,
    startTime: "2023-10-01T10:00:00",
    endTime: "2023-10-01T12:00:00",
  };
  //Create a function that returns a formatted report from a test case object.
  const formatReport = (testCase) => {
    const duration = calculateDuration(testCase.startTime, testCase.endTime);
    return `Test Case: ${testCase.name}, Status: ${testCase.status}, Duration: ${duration} seconds`;
  };
  console.log(formatReport(testCase), "format report");
  //i figured to get the duration in seconds, i needed to use dates
  // End of Exercise 5
  console.log("Exercise 5 completed");
};

module.exports = exercise5;
