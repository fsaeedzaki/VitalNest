import React, { useState } from "react";
import "../styles/ai.css";
const API_URL = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = "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";

function Bot() {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hello! I'm VitalNest's health assistant. I can help with general health tips, nutrition, exercise, and wellness. What's on your mind?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((msgs) => [...msgs, userMessage]);
        const currentInput = input;
        setInput("");
        setLoading(true);

        try {
            const systemPrompt = {
                role: "system",
                content: `You are a helpful and friendly health assistant for VitalNest, a health and wellness app. Your goal is to provide safe, general, and encouraging information.

                IMPORTANT INSTRUCTIONS:
                - NEVER give medical advice, diagnoses, or prescriptions.
                - ALWAYS include a disclaimer to consult a healthcare professional for medical concerns.
                - Keep responses concise, positive, and easy to understand.
                - If asked about serious symptoms (e.g., chest pain, difficulty breathing), immediately advise seeking emergency medical help.
                - Your knowledge is for informational and educational purposes only.

                TOPICS YOU CAN DISCUSS:
                - General wellness and healthy lifestyle tips.
                - Basic nutrition and healthy eating guidelines.
                - Exercise, fitness, and stretching information.
                - Sleep hygiene and stress management techniques.
                - Mental health awareness and coping strategies (without being a therapist).`
            };

            const conversationHistory = messages.filter(msg => 
                msg.content !== "Hello! I'm VitalNest's health assistant. I can help with general health tips, nutrition, exercise, and wellness. What's on your mind?"
            );

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [systemPrompt, ...conversationHistory, userMessage],
                    temperature: 0.7,
                    max_tokens: 512,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API Error: ${errorData.error?.message || response.statusText}`);
            }

            const data = await response.json();
            const botReply = data.choices[0]?.message?.content || "I'm sorry, I had trouble generating a response. Please try again.";

            setMessages((msgs) => [...msgs, { role: "assistant", content: botReply.trim() }]);

        } catch (err) {
            setMessages((msgs) => [...msgs, { role: "assistant", content: `Error: ${err.message}` }]);
        }
        setLoading(false);
    };

    return (
        <div className="chat-container">
            <div className="chat-title">
            <h1> 🌱 Health Assistant - VitalNest </h1>
            <p>
            Our Health AI Assistant!
            </p>
            <div className="chat-box">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`chat-message ${
                            msg.role === "user" ? "user-message" : "bot-message"
                        }`}
                    >
                        <b>{msg.role === "user" ? "You" : "Health Assistant"}:</b> 
                        <div style={{ marginTop: '4px', whiteSpace: 'pre-line' }}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {loading && <div className="typing-indicator">Health Assistant is thinking... 💭</div>}
            </div> 
            </div>
            <form onSubmit={sendMessage} className="chat-form">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={loading}
                    className="chat-input"
                    placeholder="Ask about health tips, nutrition, exercise..."
                />
                <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="chat-button"
                >
                    Send
                </button>
            </form>
            <div className="health-disclaimer" style={{ 
                background: '#fff5a4', padding: '12px', borderRadius: '8px', 
                margin: '10px 0', border: '1px solid #4d7554', fontSize: '12px'
            }}>
                <strong>🏥 Medical Disclaimer:</strong> This AI provides general health information for educational purposes only. It cannot diagnose conditions or replace professional medical advice.
            </div>
        </div>
    );
}

export default Bot;