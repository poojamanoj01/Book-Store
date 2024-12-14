import React from 'react';
import ChatbotIcon from '../ChatbotIcon';
import '../chatbot/chatbot.css';

const ChatMessage = ({ chat }) => {
    return (
        !chat.hideInChat && (        <div className={`message ${chat.role === "model" ? 'bot-message' : 'user-message'} ${chat.isError ? "error" : ""}`}>
            {chat.role === "model" && <ChatbotIcon />}
            <p className="message-text">
                {chat.text}
            </p>
        </div>
        )

    );
};

export default ChatMessage;