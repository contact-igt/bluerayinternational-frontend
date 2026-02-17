"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function LoginPage() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (credentials.username === 'admin' && credentials.password === 'admin123') {
            // For demo purposes, we'll just set a flag in localStorage
            localStorage.setItem('blueray_admin_logged_in', 'true');
            router.push('/admin/dashboard');
        } else {
            setError('Invalid credentials. Try admin / admin123');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 animate-fade-in-up">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-md w-full">
                <div className="text-center mb-6">
                    <div className="inline-block bg-navy-deep/10 p-3 rounded-full mb-3">
                        <Lock className="w-8 h-8 text-navy-deep" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-deep">Admin Access</h2>
                    <p className="text-sm text-slate-500">Sign in to manage chatbot knowledge base</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm font-medium">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Username</label>
                        <input
                            type="text"
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            className="w-full border border-gray-300 rounded p-2 focus:border-navy-deep focus:outline-none"
                            placeholder="e.g. admin"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            className="w-full border border-gray-300 rounded p-2 focus:border-navy-deep focus:outline-none"
                            placeholder="e.g. admin123"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-navy-deep text-white py-2 rounded font-bold hover:bg-navy-midnight transition active:scale-95">
                        Sign In
                    </button>
                </form>
                <button
                    onClick={() => router.push('/')}
                    className="w-full mt-3 text-sm text-slate-500 hover:text-navy-deep"
                >
                    Cancel & Return Home
                </button>
            </div>
        </div>
    );
}
