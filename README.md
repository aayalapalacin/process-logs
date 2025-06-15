# Process Logs
An interactive exercise environment to tackle the 'User Session Analysis from Application Logs' problem. Practice parsing log data, calculating session durations, and identifying specific user behavior based on defined time limits. Includes various test cases for validation
## Features

- Built in test
- Customized Chat GBT to help you learn and not give you answers
- Youtube videos for extra help


## Installation

```shell
npm install

```
## Chat GBT Usage

1. Go to https://platform.openai.com, create account
2. Go to: https://platform.openai.com/account/api-keys, and create api key
3. create .env file in root and save variable as OPENAI_API_KEY=your api key
4. pricing is VERY afforable, more below

## Chat GBT pricing

This application uses the OpenAI API (**`gpt-4o`** model) for intelligent assistance. You'll need your own API key to use it. Don't worry, for typical usage, it's quite affordable!

A **token** is how OpenAI charges. It's roughly 4 characters or ¾ of a word. You pay for:
* **Input Tokens:** The text you send (your questions, conversation history, system instructions).
* **Output Tokens:** The AI's generated response.

---

#### GPT-4o Pricing:

* **Input:** $5.00 per 1,000,000 tokens
* **Output:** $20.00 per 1,000,000 tokens

---

#### Cost Example: A Typical Conversation

Let's assume:
* Your question + context = **50 input tokens**
* AI's answer = **100 output tokens**

**Cost for ONE interaction:**
* Input: (50 / 1,000,000) * $5.00 = $0.00025
* Output: (100 / 1,000,000) * $20.00 = $0.00200
* **Total for 1 Interaction: $0.00225 (less than a quarter of a cent!)**

**Cost for 100 Interactions:**
* 100 * $0.00225 = **$0.225 (about 23 cents)**

As you can see, even with frequent use, `gpt-4o` is very cost-effective for standard text conversations. Using your own API key offers full transparency and control over your usage.

Once the server is running, open your browser and visit http://localhost:3000 to access the todo list application.

