"use client";

import type { Metadata } from 'next';
import React, { useState } from 'react';
import {
    ShieldCheck, Flame, FileText, CheckCircle, ChevronDown, ChevronUp, GraduationCap
} from 'lucide-react';

export default function Training() {
    return (
        <div className="bg-gray-50 min-h-screen pb-20 animate-fade-in-up">
            <div className="bg-navy-midnight text-white py-16 px-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-2 font-brand">Training Programs</h1>
                    <p className="opacity-80">Specialized courses in NDT, QA/QC, and Safety.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Technical Courses Section */}
                    <TechnicalCoursesCard />

                    {/* QA/QC Section */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="bg-navy-deep text-white p-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-gold" /> QA/QC Training
                            </h2>
                        </div>
                        <div className="p-6">
                            <p className="mb-4 text-slate-600">Comprehensive Quality Assurance & Control training for engineers.</p>
                            <ul className="space-y-3">
                                <TrainingItem text="QA/QC Civil" />
                                <TrainingItem text="QA/QC Mechanical" />
                                <TrainingItem text="QA/QC Electrical" />
                                <TrainingItem text="Welding Inspection" />
                            </ul>
                        </div>
                    </div>

                    {/* Safety Section */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="bg-navy-deep text-white p-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Flame className="w-6 h-6 text-gold" /> Fire & Safety
                            </h2>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-3">
                                <TrainingItem text="Fire & Safety Officer Training" />
                                <TrainingItem text="Industrial Safety Training" />
                                <TrainingItem text="Offshore Safety Programs" />
                            </ul>
                        </div>
                    </div>

                    {/* Certification Support */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-gold/30">
                        <div className="bg-gold text-navy-deep p-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3 text-navy-deep">
                                <FileText className="w-6 h-6" /> Exam Guidance
                            </h2>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-slate-600 mb-4">We provide training and exam guidance for international certifications.</p>
                            <ul className="grid grid-cols-2 gap-3">
                                <li className="font-bold text-navy-deep">• PCN / ISO</li>
                                <li className="font-bold text-navy-deep">• AWS Aligned</li>
                                <li className="font-bold text-navy-deep">• ASNT Level 3 Guidance</li>
                                <li className="font-bold text-navy-deep">• Audit Preparation</li>
                            </ul>
                            <p className="text-xs text-red-500 mt-6 italic border-t pt-2">
                                * Note: We provide training & exam guidance. Official certificates are issued by authorized bodies (PCN/ASNT/AWS) upon exam clearance.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function TechnicalCoursesCard() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md md:col-span-1">
            <div className="bg-navy-deep text-white p-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-gold" /> Technical Courses
                </h2>
            </div>
            <div className="p-6">
                <p className="mb-6 text-slate-600">Comprehensive technical training programs with international certification pathways.</p>

                <div className="space-y-4">
                    {/* NDT Training */}
                    <DropdownSection
                        title="NDT Training"
                        isOpen={openSection === 'ndt'}
                        onToggle={() => toggleSection('ndt')}
                    >
                        <ul className="space-y-2 mt-3">
                            <TrainingItem text="Ultrasonic Testing (UT)" />
                            <TrainingItem text="Radiographic Testing (RT / RTFL)" />
                            <TrainingItem text="Magnetic Particle Testing (MT)" />
                            <TrainingItem text="Penetrant Testing (PT)" />
                        </ul>
                    </DropdownSection>

                    {/* Advanced NDT Modules */}
                    <DropdownSection
                        title="Advanced NDT Modules"
                        isOpen={openSection === 'advanced'}
                        onToggle={() => toggleSection('advanced')}
                    >
                        <ul className="space-y-2 mt-3">
                            <TrainingItem text="PAUT (Phased Array Ultrasonic Testing)" />
                            <TrainingItem text="TOFD (Time of Flight Diffraction)" />
                            <TrainingItem text="PCN UT" />
                        </ul>
                    </DropdownSection>

                    {/* International Certification Training */}
                    <DropdownSection
                        title="International Certification Training"
                        isOpen={openSection === 'certification'}
                        onToggle={() => toggleSection('certification')}
                    >
                        <div className="space-y-4 mt-3">
                            {/* PCN NDT Certification */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h4 className="font-bold text-navy-deep mb-2 flex items-center gap-2">
                                    <CheckCircle className="min-w-4 min-h-4 md:w-3 md:h-3 text-green-600" />
                                    PCN NDT Certification (UT / RT / MT / PT)
                                </h4>
                                <p className="text-sm text-slate-600 mb-2">
                                    PCN (Personnel Certification in Non-Destructive Testing) — certification issued by the British Institute of Non-Destructive Testing (BINDT).
                                </p>
                                <div className="ml-4 space-y-1 text-sm text-slate-700">
                                    <p>It qualifies technicians to perform NDT methods such as:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>UT (Ultrasonic Testing)</li>
                                        <li>RT (Radiography Testing)</li>
                                        <li>MT (Magnetic Particle Testing)</li>
                                        <li>PT (Liquid Penetrant Testing)</li>
                                    </ul>
                                    <p className="mt-2 italic text-slate-500">
                                        Used widely in pipelines, pressure vessels, fabrication, and offshore industries.
                                    </p>
                                </div>
                            </div>

                            {/* AWS Welding Inspection Certification */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h4 className="font-bold text-navy-deep mb-2 flex items-center gap-2">
                                    <CheckCircle className="min-w-4 min-h-4 md:w-3 md:h-3 text-green-600" />
                                    AWS Welding Inspection Certification (CWI)
                                </h4>
                                <p className="text-sm text-slate-600 mb-2">
                                    AWS refers to certifications from the American Welding Society.
                                </p>
                                <div className="ml-4 space-y-1 text-sm text-slate-700">
                                    <p>Common courses:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Certified Welding Inspector (CWI)</li>
                                        <li>Welding Supervisor / Welding Engineer</li>
                                        <li>Welding procedure and quality inspection</li>
                                    </ul>
                                    <p className="mt-2 italic text-slate-500">
                                        These focus on welding inspection, welding codes, and fabrication quality control.
                                    </p>
                                </div>
                            </div>

                            {/* API Inspection Certification */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h4 className="font-bold text-navy-deep mb-2 flex items-center gap-2">
                                    <CheckCircle className="min-w-4 min-h-4 md:w-3 md:h-3 text-green-600" />
                                    API Inspection Certification (API 510 / 570 / 653)
                                </h4>
                                <p className="text-sm text-slate-600 mb-2">
                                    These are inspection certifications from the American Petroleum Institute (API):
                                </p>
                                <div className="ml-4 space-y-1 text-sm text-slate-700">
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>API 510 – Pressure Vessel Inspector</li>
                                        <li>API 570 – Piping Inspector</li>
                                        <li>API 653 – Storage Tank Inspector</li>
                                    </ul>
                                    <p className="mt-2 italic text-slate-500">
                                        They certify engineers/inspectors to inspect, maintain, and ensure safety of refinery and petrochemical equipment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </DropdownSection>
                </div>
            </div>
        </div>
    );
}

function DropdownSection({
    title,
    isOpen,
    onToggle,
    children
}: {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}) {
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full bg-navy-deep/5 hover:bg-navy-deep/10 p-4 flex items-start sm:items-center justify-between gap-3 transition-colors text-left"
            >
                <h3 className="font-bold text-navy-deep text-base sm:text-lg flex-1">{title}</h3>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-navy-deep flex-shrink-0 mt-0.5 sm:mt-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-navy-deep flex-shrink-0 mt-0.5 sm:mt-0" />
                )}
            </button>
            {isOpen && (
                <div className="p-4 bg-white animate-fade-in-up">
                    {children}
                </div>
            )}
        </div>
    );
}

function TrainingItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 bg-gray-50 p-3 rounded">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-slate-700">{text}</span>
        </li>
    );
}
