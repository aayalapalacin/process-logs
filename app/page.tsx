import React from "react";
import SectionHeader from "./components/SectionHeader";
import "../styles/ProblemDescriptionPage.css"; // Import the plain CSS file

export default function ProblemDescriptionPage() {
  const exampleLogs = [
    "30 99 sign-in",
    "12 123 sign-out",
    "12 100 sign-in",
    "30 105 sign-out",
    "16 45 sign-in",
    "16 55 sign-out",
  ];
  const maxSpan = 20;

  return (
    <div className="page-container">
      {/* Hero Section */}
      <header className="header">
        <h1>User Session Analysis</h1>
        <p>
          Deciphering application logs to understand user behavior and identify
          quick sign-outs.
        </p>
      </header>

      <main className="main-content">
        {/* Introduction */}
        <section className="section">
          <SectionHeader title="Understanding Application Logs" />
          <p>
            Have you ever wondered how websites or apps figure out how long
            people use them? They often use something called "application logs"
            to record everything that happens. This project is all about
            understanding those logs!
          </p>
        </section>

        {/* The Problem We're Solving */}
        <section className="section">
          <SectionHeader title="The Problem We're Solving" />
          <p className="mb-6">
            Imagine you have a bunch of notes from an app. Each note tells you:
          </p>
          <ul className="list">
            <li>
              <span className="list-bullet">•</span>
              <p>
                <strong>Who</strong> did something (a{" "}
                <code className="inline-code">user_id</code>).
              </p>
            </li>
            <li>
              <span className="list-bullet">•</span>
              <p>
                <strong>When</strong> they did it (a{" "}
                <code className="inline-code">timestamp</code>, like seconds
                since the app started).
              </p>
            </li>
            <li>
              <span className="list-bullet">•</span>
              <p>
                <strong>What</strong> they did (
                <code className="inline-code">sign-in</code> or{" "}
                <code className="inline-code">sign-out</code>).
              </p>
            </li>
          </ul>

          <p className="mt-6">
            These notes (or "log entries") aren't always in order. Your task is
            to look through all these notes and find out:
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-4 text-center">
            Which users signed in and then signed out too quickly?
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            Let's say this alerts managers of employees who logged in and out
            too quickly, which seems like they are not working. We will call the
            limit managers consider to be too short:{" "}
            <code className="max-span-code">maxSpan</code>.
          </p>
        </section>

        {/* How the Logs Look */}
        <section className="section">
          <SectionHeader title="How the Logs Look" />
          <p>
            Each log entry is a simple piece of text in an array, like this:
          </p>
          <div className="code-block">
            <pre>[`user_id timestamp action`, `user_id timestamp action`]</pre>
          </div>
          <p>
            <strong>For example:</strong>
          </p>
          <div className="code-block">
            <pre>
              {`["30 99 sign-in",
"30 105 sign-out"
]`}
            </pre>
          </div>
          <ul className="list">
            <li>
              <span className="list-bullet">•</span>
              <p>User 30 signed in at 99 seconds.</p>
            </li>
            <li>
              <span className="list-bullet">•</span>
              <p>User 30 signed out at 105 seconds.</p>
            </li>
          </ul>
        </section>

        {/* What We Need to Find */}
        <section className="section">
          <SectionHeader title="What We Need to Find" />
          <p>
            After processing all the log entries and figuring out each user's
            sign-in and sign-out times, we'll calculate the{" "}
            <strong>difference</strong> between their sign-out and sign-in
            times. If this difference is less than or equal to our{" "}
            <code className="max-span-code">maxSpan</code> limit, that user's ID
            is one we want to keep, because it should alert managers that
            someone signed in and out too quickly!
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Example Scenario:
          </h3>
          <p>
            Let's say <code className="max-span-code">maxSpan</code> is 20
            seconds.
          </p>
          <p>
            Consider the following <code className="inline-code">logs</code>{" "}
            array:
          </p>
          <div className="code-block">
            <pre>{`logs = ["${exampleLogs.join('",\n"')}" ]`}</pre>
          </div>

          {/* User 30 Analysis - Pass Scenario */}
          <div className="analysis-box pass">
            <h4>User 30 Analysis</h4>
            <p>Raw Log Entries for User 30:</p>
            <div className="analysis-code-block">
              <pre>
                {`30 99 sign-in
30 105 sign-out`}
              </pre>
            </div>
            <ul className="analysis-list">
              <li>
                • Sign-in Time: <code className="inline-code">99</code>
              </li>
              <li>
                • Sign-out Time: <code className="inline-code">105</code>
              </li>
              <li>• Session length: $105 - 99 = 6$ seconds.</li>
              <li>
                • Check against <code className="max-span-code">maxSpan</code>{" "}
                (20): Is $6 \le 20$?{" "}
                <strong className="result-text--yes">Yes!</strong>
              </li>
              <li>
                <strong>Result:</strong>{" "}
                <strong className="result-text--yes">
                  User 30 is included!
                </strong>{" "}
                (Alert for managers)
              </li>
            </ul>
          </div>

          {/* User 12 Analysis - Fail Scenario */}
          <div className="analysis-box fail">
            <h4>User 12 Analysis</h4>
            <p>Raw Log Entries for User 12:</p>
            <div className="analysis-code-block">
              <pre>
                {`12 123 sign-out
12 100 sign-in`}
              </pre>
            </div>
            <ul className="analysis-list">
              <li>
                • Sign-in Time: <code className="inline-code">100</code>
              </li>
              <li>
                • Sign-out Time: <code className="inline-code">123</code>
              </li>
              <li>• Session length: $123 - 100 = 23$ seconds.</li>
              <li>
                • Check against <code className="max-span-code">maxSpan</code>{" "}
                (20): Is $23 \le 20$?{" "}
                <strong className="result-text--no">No!</strong>
              </li>
              <li>
                <strong>Result:</strong>{" "}
                <strong className="result-text--no">
                  User 12 is NOT included.
                </strong>{" "}
                (No alert needed for managers)
              </li>
            </ul>
          </div>

          {/* User 16 Analysis - Pass Scenario */}
          <div className="analysis-box pass">
            <h4>User 16 Analysis</h4>
            <p>Raw Log Entries for User 16:</p>
            <div className="analysis-code-block">
              <pre>
                {`16 45 sign-in
16 55 sign-out`}
              </pre>
            </div>
            <ul className="analysis-list">
              <li>
                • Sign-in Time: <code className="inline-code">45</code>
              </li>
              <li>
                • Sign-out Time: <code className="inline-code">55</code>
              </li>
              <li>• Session length: $55 - 45 = 10$ seconds.</li>
              <li>
                • Check against <code className="max-span-code">maxSpan</code>{" "}
                (20): Is $10 \le 20$?{" "}
                <strong className="result-text--yes">Yes!</strong>
              </li>
              <li>
                <strong>Result:</strong>{" "}
                <strong className="result-text--yes">
                  User 16 is included!
                </strong>{" "}
                (Alert for managers)
              </li>
            </ul>
          </div>

          {/* Final Answer */}
          <div className="final-answer-box">
            <h4>Final Expected Answer:</h4>
            <p>
              The final array should contain the user IDs as strings, sorted
              from smallest to largest:
            </p>
            <div className="final-answer-code-block">
              <pre>{`["16", "30"]`}</pre>
            </div>
            <p className="mt-4 text-center">
              You can imagine this array would then be used on the dashboard
              page of a manager to highlight potential issues.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Coding Exercise. All rights
          reserved.
        </p>
        <p>Ready to solve it?</p>
      </footer>
    </div>
  );
}
