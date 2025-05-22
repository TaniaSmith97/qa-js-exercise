const exercise5 = () => {
  console.log("Exercise 5");

  // Please Complete Exercise 5 here
  const logResult = (testName, passed) => {
    return `Helo ${testName}, you ${passed}`;
  };
  console.log(logResult("Tania", "pass"), "logResult");

  const calculateDuration = (startTime, endTime) => {
    const _startTime = new Date(startTime);
    const _endTime = new Date(endTime);
    const duration = (_endTime - _startTime) / 1000;
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
  const formatReport = (testCase) => {
    const duration = (calculateDuration = testCase.startTime.endTime);
    return `Test Case: ${testCase.name}, Status: ${testCase.status}, Duration: ${testCase.duration} seconds`;
  };
  console.log(formatReport(testCase), "format report");

  // End of Exercise 5
  console.log("Exercise 5 completed");
};

module.exports = exercise5;
