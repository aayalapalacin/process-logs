const logSamples = [
  {
    log: [
      "200 5 sign-in",
      "201 10 sign-in",
      "200 25 sign-out", // 20 sec -> valid (20 <= 25)
      "202 50 sign-in",
      "201 40 sign-out", // 30 sec -> invalid (30 > 25)
      "203 60 sign-in", // No sign-out
      "204 70 sign-out", // No sign-in
      "202 58 sign-out", // 8 sec -> valid (8 <= 25)
    ],
    maxSpan: 25,
    answer: ["200", "202"],
  },
  {
    log: [
      "300 5 sign-in",
      "301 10 sign-in",
      "302 20 sign-in",
      "301 11 sign-out", // 1 sec -> valid (1 <= 10)
      "300 40 sign-out", // 35 sec -> invalid (35 > 10)
      "303 50 sign-in", // no sign-out
      "302 29 sign-out", // 9 sec -> valid (9 <= 10)
    ],
    maxSpan: 10,
    answer: ["301", "302"],
  },
  {
    log: [
      "1000 100 sign-in",
      "1001 105 sign-in",
      "1002 110 sign-in",
      "1001 106 sign-out", // 1 sec -> valid (1 <= 5)
      "1002 112 sign-out", // 2 sec -> valid (2 <= 5)
      "1003 115 sign-out", // no sign-in
      // 1000 never signs out
    ],
    maxSpan: 5,
    answer: ["1001", "1002"],
  },
  {
    log: [
      "700 30 sign-in",
      "701 50 sign-in",
      "700 33 sign-out", // 3 sec -> valid (3 <= 10)
      "702 90 sign-out", // no sign-in
      "703 100 sign-in", // no sign-out
      "701 90 sign-out", // 40 sec -> invalid (40 > 10)
    ],
    maxSpan: 10,
    answer: ["700"],
  },
  {
    log: [
      "800 60 sign-in",
      "801 70 sign-in",
      "800 80 sign-out", // 20 sec -> valid (20 <= 20)
      "801 100 sign-out", // 30 sec -> invalid (30 > 20)
      "802 120 sign-in", // no sign-out
      "803 130 sign-out", // no sign-in
    ],
    maxSpan: 20,
    answer: ["800"],
  },
  // --- New Log Samples (5 more) ---
  {
    log: [
      "10 1 sign-in",
      "20 2 sign-in",
      "10 3 sign-out", // 2 sec -> valid (2 <= 5)
      "20 7 sign-out", // 5 sec -> valid (5 <= 5)
      "30 8 sign-in",
      "30 12 sign-out", // 4 sec -> valid (4 <= 5)
    ],
    maxSpan: 5,
    answer: ["10", "20", "30"], // All users within span
  },
  {
    log: [
      "40 10 sign-in",
      "40 12 sign-out", // 2 sec -> valid (2 <= 1)
      "40 15 sign-in", // Second sign-in for 40, ignored based on problem constraints
      "40 20 sign-out",
    ],
    maxSpan: 1, // Max span is very tight
    answer: [], // User 40 has 2-sec session, which is > 1
  },
  {
    log: [
      "50 100 sign-in",
      "51 100 sign-in",
      "52 100 sign-in",
      "53 100 sign-in",
      "50 101 sign-out", // 1 sec -> valid (1 <= 1)
      "51 102 sign-out", // 2 sec -> invalid (2 > 1)
      "52 103 sign-out", // 3 sec -> invalid (3 > 1)
      "53 104 sign-out", // 4 sec -> invalid (4 > 1)
    ],
    maxSpan: 1,
    answer: ["50"], // Only user 50 fits the tight span
  },
  {
    log: [
      "60 500 sign-in",
      "61 500 sign-in",
      "62 500 sign-in",
      "60 550 sign-out", // 50 sec -> invalid (50 > 40)
      "61 540 sign-out", // 40 sec -> valid (40 <= 40)
      "62 530 sign-out", // 30 sec -> valid (30 <= 40)
    ],
    maxSpan: 40,
    answer: ["61", "62"],
  },
  {
    log: [
      "90 1 sign-in",
      "91 2 sign-in",
      "92 3 sign-in",
      "93 4 sign-in",
      "90 100 sign-out", // 99 sec -> invalid (99 > 50)
      "91 50 sign-out", // 48 sec -> invalid (48 > 50) - **Wait, 48 <= 50, so valid. Rechecking math.**
      "92 40 sign-out", // 37 sec -> valid (37 <= 50)
      "93 54 sign-out", // 50 sec -> valid (50 <= 50)
    ],
    maxSpan: 50,
    answer: ["91", "92", "93"], // Adjusted answer for 91 being valid.
  },
];
module.exports = logSamples;
