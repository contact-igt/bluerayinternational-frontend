"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface KnowledgeItem {
    id: number;
    text: string;
}

export interface ChatMessage {
    role: 'user' | 'assistant';
    text: string;
}

interface ChatContextType {
    knowledgeBase: KnowledgeItem[];
    setKnowledgeBase: React.Dispatch<React.SetStateAction<KnowledgeItem[]>>;
    chatMessages: ChatMessage[];
    setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

const defaultKnowledge = [
    { id: 1, text: "Training Offered: NDT (ASNT Level II in UT, RT, MT, PT), QA/QC (Civil, Mech, Electrical), Fire & Safety, Advanced NDT (PAUT, TOFD)." },
    { id: 2, text: "Services: Weld Inspection, Third-party inspection, Resume/Interview preparation." },
    { id: 3, text: "Contact: +91 99520 04102 or bluerayinternational.igt@gmail.com." },
    { id: 4, text: "Location: No. 77, Neyveli Main Road, KVB Upstairs, Vadalur, Tamil Nadu." },
    { id: 5, text: "Tone: Professional, encouraging, helpful, and concise." },
    { id: 6, text: "Disclaimer: If asked about guaranteed jobs or visas, state that you provide 'guidance and placement assistance' but do not guarantee jobs/visas." },
    { id: 7, text: "Ultrasonic Testing (UT) Course Details: Covers principles of sound waves, flaw detection, thickness measurement, and beam spread. Includes 15 days of practical training on calibration blocks (V1, V2) and real weld samples." }
];

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
    const [knowledgeBase, setKnowledgeBase] = useState<KnowledgeItem[]>(defaultKnowledge);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
        { role: 'assistant', text: "Hello! I'm the Blueray AI Counselor. I can help you with course details, fees, or career guidance. How can I help you today?" }
    ]);

    // Optionally persist to localStorage
    useEffect(() => {
        const savedKnowledge = localStorage.getItem('blueray_kb');
        if (savedKnowledge) {
            setKnowledgeBase(JSON.parse(savedKnowledge));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('blueray_kb', JSON.stringify(knowledgeBase));
    }, [knowledgeBase]);

    return (
        <ChatContext.Provider value={{ knowledgeBase, setKnowledgeBase, chatMessages, setChatMessages }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
}
