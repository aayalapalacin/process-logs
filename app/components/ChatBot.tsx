"use client";

import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React, { useEffect, useRef } from "react"; // Import useEffect and useRef
import "./ChatBot.css";
import { systemInstructions } from "../utils/systemInstructions";

interface ChatBotProps {
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ChatBot({ setShowChat }: ChatBotProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [{ role: "system", content: systemInstructions, id: "" }],
  });

  // 1. Create a ref for the message display container
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 2. useEffect to scroll when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]); // Dependency array: run this effect whenever 'messages' array changes

  return (
    <div className="chat-container">
      {/* 3. Attach the ref to the message display div */}
      <div className="message-display" ref={messagesEndRef}>
        {messages
          .filter((m) => m.role !== "system")
          .map((m) => (
            <div key={m.id} className="message-bubble">
              <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  pre: ({ children }) => (
                    <pre className="pre-code-block">{children}</pre>
                  ),
                  code: ({ children }) => (
                    <code className="inline-code-block">{children}</code>
                  ),
                }}
              >
                {m.content}
              </ReactMarkdown>
            </div>
          ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="input-form">
        <input
          className="input-field"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
      <div className="setShow">
        <button onClick={() => setShowChat(false)}> Close Chat</button>
      </div>
    </div>
  );
}
