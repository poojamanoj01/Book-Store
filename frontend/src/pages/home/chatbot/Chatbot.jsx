import React, { useEffect, useRef, useState } from 'react'
import ChatbotIcon from '../ChatbotIcon'
import '../chatbot/chatbot.css'
import ChatForm from './ChatForm'
import ChatMessage from './ChatMessage'
import { companyInfo } from '../companyInfo'

const Chatbot = () => {

    const [chatHistory, setChatHistory] = useState([{
        hideInChat: true,
        role: "model",
        text: companyInfo
    }

    ])
    // const [showChatbot, setShowChatbot] = useState([false])
    const [showChatbot, setShowChatbot] = useState(false);


    const chatBodyRef = useRef()

    const generateBotResponse = async (history) => {
        // helper fn to update chat history
        const updateHistory = (text, isError = false) => {
            setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text, isError }])
        }


        // format chat histroty for api request
        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }))
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: history })

        }
        try {
            // make api call to get the bot's response
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions)
            const data = await response.json()
            if (!response.ok) throw new Error(data.error.message || "Something went Wrong!")

            // clean and update chat history with bot's response
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim()
            updateHistory(apiResponseText)
        } catch (error) {
            updateHistory(error.message, true)

        }
    }

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
        }
    }, [chatHistory]);



    return (
        // <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
        <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>

            {/* <button
                onClick={() => setShowChatbot((prev) => !prev)}
                id="chatbot-toggler"
            >
                <span className="material-symbols-rounded">mode_comment</span>
                <span className="material-symbols-rounded">close</span>
                </button> */}

            <button
                onClick={() => setShowChatbot((prev) => !prev)}
                id="chatbot-toggler"
            >
                <span className="material-symbols-rounded">mode_comment</span>
                <span className="material-symbols-rounded">close</span>
            </button>


            <div className="chatbot-popup">

                <div className="chat-header">
                    <div className="header-info">
                        <ChatbotIcon />
                        <h2 className="logo-text">Chatbot</h2>
                    </div>
                    <button onClick={() => setShowChatbot((prev) => !prev)}
                        id="chatbot-toggler" className="material-symbols-rounded">keyboard_arrow_down</button>
                </div>
                <div ref={chatBodyRef} className="chat-body">
                    <div className="message bot-message">
                        <ChatbotIcon />
                        <p className="message-text">
                            Hey there 👋 <br /> How can I help you today?
                        </p>
                    </div>
                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} chat={chat} />
                    ))} 
                </div>
                <div className="chat-footer">
                    <ChatForm
                        chatHistory={chatHistory}
                        setChatHistory={setChatHistory}
                        generateBotResponse={generateBotResponse}
                    />
                </div>
            </div>
        </div>
    );

}

export default Chatbot