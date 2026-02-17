"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    Bot, LogOut, Plus, Trash2, Save, FileUp, Loader2
} from 'lucide-react';
import { useChat } from '@/context/ChatContext';

export default function DashboardPage() {
    const router = useRouter();
    const { knowledgeBase, setKnowledgeBase } = useChat();
    const [newItemText, setNewItemText] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Protected Route Check (Simple)
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('blueray_admin_logged_in');
        if (!isLoggedIn) {
            router.push('/admin/login');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('blueray_admin_logged_in');
        router.push('/admin/login');
    };

    const addKnowledgeItem = () => {
        if (!newItemText.trim()) return;
        const newItem = {
            id: Date.now(),
            text: newItemText
        };
        setKnowledgeBase([...knowledgeBase, newItem]);
        setNewItemText('');
    };

    const deleteKnowledgeItem = (id: number) => {
        setKnowledgeBase(knowledgeBase.filter(item => item.id !== id));
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        setUploadStatus(`Reading ${file.name}...`);

        // Simulate "Training" process
        setTimeout(() => {
            if (file.type === 'text/plain') {
                const reader = new FileReader();
                reader.onload = () => {
                    const content = reader.result as string;
                    setKnowledgeBase(prev => [...prev, {
                        id: Date.now(),
                        text: `[Source: ${file.name}] ${content.substring(0, 300)}...`
                    }]);
                    setUploadStatus('Training Complete!');
                    setTimeout(() => { setIsUploading(false); setUploadStatus(''); }, 1000);
                };
                reader.readAsText(file);
            } else if (file.type === 'application/pdf') {
                setUploadStatus('Extracting PDF layers...');
                setTimeout(() => {
                    setKnowledgeBase(prev => [...prev, {
                        id: Date.now(),
                        text: `[PDF Source: ${file.name}] Content successfully indexed. (Simulated extraction: This document contains details about NDT procedures, ISO standards, and safety protocols which the AI can now reference.)`
                    }]);
                    setUploadStatus('Training Complete!');
                    setTimeout(() => { setIsUploading(false); setUploadStatus(''); }, 1000);
                }, 1500);
            } else {
                alert("Please upload .txt or .pdf files");
                setIsUploading(false);
            }

            if (fileInputRef.current) fileInputRef.current.value = '';
        }, 1500);
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20 animate-fade-in-up">
            <div className="bg-navy-deep text-white py-6 px-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <Bot className="w-6 h-6 text-gold" /> AI Knowledge Dashboard
                    </h1>
                    <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-bold bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition active:scale-95">
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                    <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> Changes made here update the AI&apos;s context immediately and are persisted in your local browser session.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Add New Item */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
                            <h3 className="font-bold text-navy-deep mb-4 flex items-center gap-2 text-slate-800">
                                <Plus className="w-5 h-5 text-green-600" /> Add New Fact
                            </h3>

                            <div className="mb-4">
                                <p className="text-xs text-slate-500 mb-2 font-bold uppercase tracking-wider">Option 1: Type Text</p>
                                <textarea
                                    value={newItemText}
                                    onChange={(e) => setNewItemText(e.target.value)}
                                    className="w-full border border-gray-300 rounded p-3 h-24 focus:border-navy-deep focus:outline-none mb-2 text-sm text-slate-800"
                                    placeholder="e.g. We now offer API 510 training starting next month..."
                                ></textarea>
                                <button
                                    onClick={addKnowledgeItem}
                                    disabled={!newItemText.trim()}
                                    className="w-full bg-navy-deep text-white py-2 rounded font-bold hover:bg-navy-midnight transition disabled:opacity-50 flex items-center justify-center gap-2 text-sm active:scale-95"
                                >
                                    <Save className="w-4 h-4" /> Add Text
                                </button>
                            </div>

                            <div className="border-t pt-4">
                                <p className="text-xs text-slate-500 mb-2 font-bold uppercase tracking-wider">Option 2: Upload Document</p>
                                <p className="text-[10px] text-slate-400 mb-3">
                                    Upload .txt or .pdf files. The system will simulate extraction and train the AI immediately.
                                </p>

                                <input
                                    type="file"
                                    accept=".pdf,.txt"
                                    ref={fileInputRef}
                                    onChange={handleFileSelect}
                                    className="hidden"
                                />

                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={isUploading}
                                    className="w-full border-2 border-dashed border-gray-300 text-slate-500 py-6 rounded-lg hover:border-navy-deep hover:text-navy-deep transition flex flex-col items-center justify-center gap-2 active:scale-95"
                                >
                                    {isUploading ? (
                                        <>
                                            <Loader2 className="w-6 h-6 animate-spin text-navy-deep" />
                                            <span className="text-xs font-bold">{uploadStatus}</span>
                                        </>
                                    ) : (
                                        <>
                                            <FileUp className="w-6 h-6" />
                                            <span className="text-xs font-bold">Click to Upload PDF / TXT</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* List Items */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-navy-deep mb-4 text-lg">Current Knowledge Base ({knowledgeBase.length})</h3>
                        <div className="space-y-4">
                            {knowledgeBase.map((item) => (
                                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between gap-4 group hover:border-navy-deep/30 transition hover:shadow-md animate-fade-in-up">
                                    <div className="text-sm text-slate-700 leading-relaxed break-words w-full">
                                        {item.text}
                                    </div>
                                    <button
                                        onClick={() => deleteKnowledgeItem(item.id)}
                                        className="text-gray-400 hover:text-red-600 p-2 shrink-0 self-start opacity-0 group-hover:opacity-100 transition active:scale-95"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            {knowledgeBase.length === 0 && (
                                <div className="text-center p-8 text-slate-400 italic bg-white rounded border border-dashed border-gray-300">
                                    Knowledge base is empty. The AI will only have generic knowledge now.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
