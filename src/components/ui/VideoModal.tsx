"use client";

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div
                className="fixed inset-0"
                onClick={onClose}
                aria-label="Close modal overlay"
            ></div>

            <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                    aria-label="Close video"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="aspect-video w-full">
                    <video
                        src={videoSrc}
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}
