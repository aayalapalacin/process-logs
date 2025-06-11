const processLogs = require("../processLogsFunction");
const logSamples = require("../utils/logSamples");

logSamples.forEach((sample) => {
  const logStamp = sample.log;
  const max = sample.maxSpan;
  const answer = sample.answer;
  test(`GIVEN LOG: [${logStamp}] AND MAXSPAN: ${max}, EXPECT: ${answer}`, () =>
    expect(processLogs(logStamp, max)).toEqual(answer));
});
