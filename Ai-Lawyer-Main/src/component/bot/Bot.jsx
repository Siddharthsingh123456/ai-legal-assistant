import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar"
// Chatbot Icon Component
const ChatbotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 1024 1024"
      className="text-purple-400"
    >
      <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
    </svg>
  );
};

// Chat Message Component
const ChatMessage = ({ chat }) => {
  return (
    <div className={`flex items-start gap-3 mb-6 ${chat.role === "user" ? "justify-end" : ""}`}>
      {chat.role === "model" && <ChatbotIcon />}
      <p
        className={`text-gray-300 px-4 py-3 rounded-xl whitespace-pre-wrap break-words max-w-[75%] leading-relaxed ${chat.role === "user"
            ? "bg-gradient-to-r from-purple-600 to-blue-600"
            : "bg-gray-700"
          }`}
      >
        {chat.text}
      </p>
    </div>
  );
};

// Chat Form Component
const ChatForm = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input.trim());
    setInput("");
  };

  return (
    <form className="flex gap-2 p-3" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 text-base rounded-lg bg-gray-800 border border-purple-500 text-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-purple-600"
      />
      <button
        type="submit"
        className="px-4 py-2 text-base bg-purple-600 duration-150 hover:bg-purple-700 text-gray-200 rounded-lg"
      >
        Send ✨
      </button>
    </form>
  );
};

// Final Bot Component
const Bot = () => {
  const [chatHistory, setChatHistory] = useState([{
    role: "bot",
    text: "Hello! I am an AI Legal Assistant specializing in the Indian Constitution. Please note that I can provide information, explanations, and relevant articles from the Indian Constitution. I cannot offer legal advice, interpretations for specific cases, or represent anyone in legal matters. For any specific legal issues or advice, please consult a qualified legal professional."
    }
  ]);

  const handleUserMessage = async (userText) => {
    const updatedHistory = [...chatHistory, { role: "user", text: userText }];
    setChatHistory(updatedHistory);
    await generateBotResponse(updatedHistory);
  };

  const generateBotResponse = async (history) => {

    // // Only respond to Constitution-related topics
    // const isConstitutionRelated = (text) => {
    //   const keywords = [
    //     "indian constitution", "article", "fundamental rights", "directive principles",
    //     "constitutional law", "parliament", "judiciary", "president", "supreme court",
    //     "preamble", "amendment", "schedule", "union", "state", "legal", "citizen",
    //     "government", "legislature", "executive", "justice", "constitutional provisions"
    //   ];
    //   const lowerText = text.toLowerCase();
    //   return keywords.some(keyword => lowerText.includes(keyword));
    // };

    // const lastUserMessage = history[history.length - 1].text;

    // if (!isConstitutionRelated(lastUserMessage)) {
    //   setChatHistory((prev) => [
    //     ...prev,
    //     {
    //       role: "bot",
    //       text: "⚠️ I can only respond to questions related to the **Indian Constitution**. Please ask a constitution-related query.",
    //     },
    //   ]);
    //   return;
    // }




    try {
      const formattedHistory = history.map(({ role, text }) => ({
        role: role === "bot" ? "model" : role,
        parts: [{ text }],
      }));

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: formattedHistory }),
      };

      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ? data.error.message : "Failed to fetch response from Gemini API");
      }

      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (botReply) {
        setChatHistory((prev) => [...prev, { role: "bot", text: botReply }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [...prev, { role: "bot", text: "Sorry, something went wrong." }]);
    }
  };
 
  return (
    <>
      <Navbar/>
      <div className=" bg-gray-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-purple-500 hover:text-purple-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        </div>
      <div className=" w-full h-[80vh] bg-gray-900 text-gray-300 font-sans overflow-hidden flex justify-center p-6">
        
        <div className="flex flex-col w-full max-w-[1000px] h-[70vh] bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-5 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-purple-400">AI Legal Assistant </h2>
            </div>
            <button className="px-4 py-2 text-base bg-purple-600 hover:bg-purple-700 text-gray-200 rounded-lg">Upload PDF</button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 px-6 py-5 bg-gray-900 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
            <ChatForm onSendMessage={handleUserMessage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bot;
