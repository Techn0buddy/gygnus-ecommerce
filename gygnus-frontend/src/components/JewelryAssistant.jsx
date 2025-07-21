import React, { useState } from "react";

const JewelryAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await res.json();

      const assistantMessage = {
        role: "assistant",
        content: data.reply || "No response.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white border border-yellow-300 w-80 rounded-xl shadow-2xl p-4 font-sans">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-yellow-700">💬 Jewelry Assistant</h2>
            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-red-500 text-xl font-semibold"
            >
              ×
            </button>
          </div>

          <div className="h-52 overflow-y-auto text-sm space-y-2 mb-3 scroll-smooth pr-1">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
                <p
                  className={`inline-block px-3 py-1 rounded-md ${
                    msg.role === "user"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {msg.content}
                </p>
              </div>
            ))}
            {loading && (
              <p className="text-gray-400 italic text-center">Typing...</p>
            )}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border border-gray-300 px-3 py-1 rounded-full text-sm focus:outline-yellow-400"
              placeholder="Ask about rings, gold, diamonds..."
            />
            <button
              onClick={handleSend}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-1 rounded-full text-sm"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-yellow-600 text-white px-4 py-2 rounded-full shadow-xl hover:bg-yellow-700 text-sm font-medium"
        >
          💬 Chat with Assistant
        </button>
      )}
    </div>
  );
};

export default JewelryAssistant;
