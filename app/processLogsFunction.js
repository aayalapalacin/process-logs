const processLogs = (log, maxSpan) => {
  const logData = {};
  const answer = [];

  log.forEach((log) => {
    const userId = log.split(" ")[0];
    const signIn = log.split(" ")[2].includes("sign-in");
    const signOut = log.split(" ")[2].includes("sign-out");
    if (!(userId in logData)) {
      logData[userId] = { in: 0, out: 0 };
    }
    if (signIn) logData[userId].in = log.split(" ")[1];
    if (signOut) logData[userId].out = log.split(" ")[1];
  });

  for (const userID in logData) {
    const inData = parseInt(logData[userID]["in"]);
    const outData = parseInt(logData[userID]["out"]);
    if (inData === 0 || outData === 0) {
      logData[userID]["time"] = null;
    } else {
      const time = outData - inData;
      logData[userID]["time"] = time;
      time <= maxSpan ? answer.push(userID) : null;
    }
  }
  return answer.sort((a, b) => a - b);
};

module.exports = processLogs;
