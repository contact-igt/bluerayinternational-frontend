import type { Metadata } from 'next';
import React from 'react';
import {
    Award, Globe2, Briefcase, Settings
} from 'lucide-react';

import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'About Us | Blueray International',
    description: 'Learn about Blueray International - 15+ years of expertise in NDT training, QA/QC, Fire Safety, and IT Services. Trusted by industry leaders.',
};

export default function About() {
    return (
        <div className="bg-gray-50 min-h-screen pb-20 animate-fade-in-up">
            <div className="bg-navy-deep text-white py-16 px-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-2 font-brand">About Us</h1>
                    <p className="opacity-80">Building careers and ensuring quality since 2009.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold text-navy-deep mb-6">Who We Are</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Blueray International is a professionally managed engineering services organization providing quality inspection, training, certification, and consultation services across multiple industrial sectors.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Founded by <strong>Senthil Vadivelu</strong> and operating since <strong>2009</strong>, we are a premier technical training institute based in Vadalur, Tamil Nadu. We specialize in training students and working professionals in NDT and inspection technologies, QA/QC (Civil / Electrical / Mechanical), and Fire & Safety domains through practical learning, structured modules, and mentor support.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Our focus is on international standards, skilled manpower, and reliable engineering solutions that support safety, compliance, and operational excellence in sectors like Marine, Oil & Gas, and Offshore projects.
                            </p>
                        </div>
                        <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h3 className="text-lg font-bold text-navy-deep mb-4 border-b border-gold pb-2 inline-block">Founder&apos;s Note</h3>
                            <div className="mb-4">
                                <p className="font-bold text-lg text-slate-800">Senthil Vadivelu D</p>
                                <p className="text-sm text-slate-500">Founder & Managing Director</p>
                                <p className="text-xs text-blue-600 mt-1 hover:underline">
                                    <a href={`mailto:${CONTACT_INFO.founderEmail}`}>{CONTACT_INFO.founderEmail}</a>
                                </p>
                            </div>
                            <p className="text-sm text-slate-600 italic">
                                &quot;An experienced professional in NDT, QA/QC, Fire & Safety, and Offshore Engineering Services, leading Blue Ray International with a commitment to quality, safety, and global standards.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AboutFeatureCard
                        icon={Award}
                        title="15+ Years Experience"
                        description="Established in 2009 with a strong track record."
                    />
                    <AboutFeatureCard
                        icon={Globe2}
                        title="Global Standards"
                        description="Training aligned with ASNT, AWS, and PCN standards."
                    />
                    <AboutFeatureCard
                        icon={Briefcase}
                        title="Career Support"
                        description="Resume building and interview preparation guidance."
                    />
                    <AboutFeatureCard
                        icon={Settings}
                        title="Practical Training"
                        description="Hands-on exposure to real-world inspection techniques."
                    />
                </div>
            </div>
        </div>
    );
}

function AboutFeatureCard({ icon: Icon, title, description }: any) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-navy-deep hover:shadow-lg transition-all">
            <Icon className="w-8 h-8 text-gold mb-3" />
            <h4 className="font-bold text-navy-deep">{title}</h4>
            <p className="text-sm text-slate-600 mt-2">{description}</p>
        </div>
    );
}
