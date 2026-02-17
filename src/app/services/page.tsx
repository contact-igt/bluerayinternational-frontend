import type { Metadata } from 'next';
import React from 'react';
import {
    Settings, Users, FileText, CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Services | Blueray International',
    description: 'Engineering inspection, quality assurance, and IT solutions tailored for marine, offshore, and industrial sectors.',
};

export default function Services() {
    return (
        <div className="bg-gray-50 min-h-screen pb-20 animate-fade-in-up">
            <div className="bg-navy-deep text-white py-16 px-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-2 font-brand">Our Services</h1>
                    <p className="opacity-80">Engineering, Inspection, and Manpower Solutions.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="space-y-8">

                    {/* Service Block 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-navy-midnight text-white rounded-lg flex items-center justify-center shrink-0">
                            <Settings className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-navy-deep mb-3">Engineering & Inspection Services</h3>
                            <p className="text-slate-600 mb-4">Reliable inspection services ensuring safety and quality compliance for your projects.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                <ServiceCheckItem text="Weld Inspection" />
                                <ServiceCheckItem text="NDT Inspection Services" />
                                <ServiceCheckItem text="QA/QC Engineering Services" />
                                <ServiceCheckItem text="Third-Party Inspection" />
                                <ServiceCheckItem text="Civil, Mech & Electrical Inspection" />
                            </div>
                        </div>
                    </div>

                    {/* Service Block 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-navy-midnight text-white rounded-lg flex items-center justify-center shrink-0">
                            <Users className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-navy-deep mb-3">Manpower & Placement Guidance</h3>
                            <p className="text-slate-600 mb-4">
                                We support candidates with consultation, resume preparation, and placement assistance guidance based on profile and requirements.
                            </p>
                            <div className="mb-4">
                                <h4 className="font-bold text-navy-deep text-sm mb-2">Industries Served:</h4>
                                <div className="flex gap-3 flex-wrap">
                                    <IndustryTag text="Marine" />
                                    <IndustryTag text="Oil & Gas" />
                                    <IndustryTag text="Offshore Projects" />
                                    <IndustryTag text="Industrial Construction" />
                                </div>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-xs text-yellow-800 italic">
                                <strong>Disclaimer:</strong> Placement support is provided as guidance and assistance. Job/visa is not guaranteed and depends on candidate eligibility, performance, documentation, and employer selection.
                            </div>
                        </div>
                    </div>

                    {/* Service Block 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-navy-midnight text-white rounded-lg flex items-center justify-center shrink-0">
                            <FileText className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-navy-deep mb-3">ISO & PCN Services</h3>
                            <p className="text-slate-600">
                                We offer ISO certification consulting, PCN ISO implementation support, and audit preparation documentation to help organizations meet international standards.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function ServiceCheckItem({ text }: { text: string }) {
    return (
        <span className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle className="w-4 h-4 text-gold" /> {text}
        </span>
    );
}

function IndustryTag({ text }: { text: string }) {
    return (
        <span className="bg-gray-100 px-3 py-1 rounded text-sm text-slate-700 font-medium border border-gray-200">
            {text}
        </span>
    );
}
