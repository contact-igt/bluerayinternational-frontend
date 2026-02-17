"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
    Bot, X, Send, Loader2, XCircle, MessageCircle
} from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import { CONTACT_INFO } from '@/lib/constants';

export default function ChatWidget() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [isAiLoading, setIsAiLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const { knowledgeBase, chatMessages, setChatMessages } = useChat();

    // Scroll to bottom of chat
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages, isChatOpen]);

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        const newMessages = [...chatMessages, { role: 'user' as const, text: userInput }];
        setChatMessages(newMessages);
        setUserInput('');
        setIsAiLoading(true);

        try {
            const knowledgeContext = knowledgeBase.map((item, index) => `${index + 1}. ${item.text}`).join('\n');

            const systemPrompt = `
        You are the AI Career Counselor for "Blueray International", an engineering training institute in Vadalur, Tamil Nadu (India), founded by Senthil Vadivelu (Since 2009).
        
        Your Goal: Guide students/professionals towards Blueray's training programs for careers in Marine, Oil & Gas, and Offshore sectors.
        
        DYNAMIC KNOWLEDGE BASE (Use this to answer):
        ${knowledgeContext}
        
        Instructions:
        - Answer based ONLY on the knowledge base above or general engineering career advice tailored to Blueray's offerings.
        - If asked about UT, use the specific UT course details provided.
        - If the info isn't there, ask them to call ${CONTACT_INFO.phonePrimary}.
        
        User Query: ${userInput}
      `;

            // API key would normally be in env, but keeping same logic as original demo
            const apiKey = "";

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: systemPrompt }] }],
                    }),
                }
            );

            const data = await response.json();
            const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, I'm having trouble connecting right now. Please call us directly at " + CONTACT_INFO.phonePrimary;

            setChatMessages([...newMessages, { role: 'assistant', text: aiText }]);
        } catch (error) {
            console.error("AI Error:", error);
            setChatMessages([...newMessages, { role: 'assistant', text: "Sorry, I encountered an error. Please try again or contact our office." }]);
        } finally {
            setIsAiLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

            {/* Chat Window */}
            {isChatOpen && (
                <div className="bg-white rounded-xl shadow-2xl w-80 sm:w-96 h-[500px] mb-4 flex flex-col border border-gray-200 overflow-hidden animate-slide-down">
                    {/* Header */}
                    <div className="bg-navy-deep text-white p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1 rounded-full">
                                <Bot className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Blueray Counselor ✨</h4>
                                <p className="text-[10px] opacity-80">Online | AI Powered</p>
                            </div>
                        </div>
                        <button onClick={() => setIsChatOpen(false)} className="hover:text-gold transition active:scale-95">
                            <XCircle className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-grow overflow-y-auto p-4 bg-gray-50 chat-scroll">
                        {chatMessages.map((msg, idx) => (
                            <div key={idx} className={`flex mb-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed shadow-sm
                    ${msg.role === 'user'
                                            ? 'bg-navy-midnight text-white rounded-br-none'
                                            : 'bg-white text-slate-700 border border-gray-100 rounded-bl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isAiLoading && (
                            <div className="flex justify-start mb-3">
                                <div className="bg-white p-3 rounded-lg border border-gray-100 rounded-bl-none flex items-center gap-2 text-slate-500 text-sm">
                                    <Loader2 className="w-4 h-4 animate-spin" /> Typing...
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef}></div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Ask about NDT courses..."
                            className="flex-grow text-sm border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-navy-deep"
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={isAiLoading || !userInput.trim()}
                            className="bg-navy-deep text-white p-2 rounded-full hover:bg-navy-midnight transition disabled:opacity-50 active:scale-95"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="bg-navy-deep hover:bg-navy-midnight text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 flex items-center gap-2 group active:scale-95"
            >
                {isChatOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                {!isChatOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold text-sm">Career Guide ✨</span>}
            </button>
        </div>
    );
}
