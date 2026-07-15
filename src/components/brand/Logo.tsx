import React from 'react';
import Image from 'next/image';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark' | 'header' | 'footer';
    showText?: boolean;
    useImage?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark', showText = true, useImage = false }) => {
    // Use image variants for header/footer
    if (useImage && (variant === 'header' || variant === 'footer')) {
        const imageUrl = variant === 'header' ? '/assets/BlueRay_logo_new.png' : '/assets/BlueRay_logo_new.png';
        return (
            <div className={`flex items-center w-fit ${className}`}>
                <Image
                    src={imageUrl}
                    alt="Blueray International Logo"
                    width={100}
                    height={100}
                    className="h-full w-auto object-contain"
                />
            </div>
        );
    }

    const primaryColor = variant === 'light' ? '#001B3A' : '#FFFFFF';
    const secondaryColor = '#FFD700'; // Gold

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto"
            >
                {/* Abstract "B" or "Ray" Wave */}
                <path
                    d="M20 20C20 20 45 15 65 35C85 55 80 80 80 80"
                    stroke={secondaryColor}
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <path
                    d="M20 40C20 40 40 35 55 50C70 65 65 85 65 85"
                    stroke={variant === 'dark' ? '#FFFFFF' : '#001B3A'}
                    strokeWidth="8"
                    strokeLinecap="round"
                    opacity="0.8"
                />
                <path
                    d="M20 60C20 60 35 55 45 65C55 75 50 90 50 90"
                    stroke={secondaryColor}
                    strokeWidth="8"
                    strokeLinecap="round"
                    opacity="0.6"
                />

                {/* Central Bolt/Ray */}
                <path
                    d="M10 80L90 20"
                    stroke={secondaryColor}
                    strokeWidth="4"
                    strokeDasharray="10 5"
                    className="animate-pulse"
                />
            </svg>

            {showText && (
                <div className="flex flex-col">
                    <span className={`text-xl md:text-2xl font-bold tracking-widest leading-none font-brand ${variant === 'dark' ? 'text-white' : 'text-navy-deep'}`}>
                        BLUERAY
                    </span>
                    <span className={`text-[10px] md:text-[11px] tracking-[0.4em] font-bold ${variant === 'dark' ? 'text-white/70' : 'text-navy-midnight'}`}>
                        INTERNATIONAL
                    </span>
                </div>
            )}
        </div>
    );
};