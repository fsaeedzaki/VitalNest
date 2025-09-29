import React, { useState } from "react";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "<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>"; // Replace with your actual API key

function Bot() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages((msgs) => [...msgs, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        ...messages.map((m) => ({
                            role: m.sender === "user" ? "user" : "assistant",
                            content: m.text,
                        })),
                        { role: "user", content: input },
                    ],
                }),
            });
            const data = await response.json();
            const botReply =
                data.choices?.[0]?.message?.content || "Sorry, I didn't understand that.";
            setMessages((msgs) => [...msgs, { sender: "bot", text: botReply }]);
        } catch (err) {
            setMessages((msgs) => [
                ...msgs,
                { sender: "bot", text: "Error: Unable to get response." },
            ]);
        }
        setLoading(false);
    };

    return (
        <div className="chat-container">
            <h2 className="chat-title">AI Assistant</h2>
            <div className="chat-box">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`chat-message ${
                            msg.sender === "user" ? "user-message" : "bot-message"
                        }`}
                    >
                        <b>{msg.sender === "user" ? "You" : "Bot"}:</b> {msg.text}
                    </div>
                ))}
                {loading && <div className="typing-indicator">Bot is typing...</div>}
            </div>
            <form onSubmit={sendMessage} className="chat-form">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={loading}
                    className="chat-input"
                    placeholder="Type your message..."
                />
                <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="chat-button"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Bot;