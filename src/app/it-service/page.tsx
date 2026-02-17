import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Zap, Brain, Palette, CheckCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: 'IT Services | Blueray International',
    description: 'Digital marketing, web development, AI/ML training, and creative skills programs designed for career growth.',
};

export default function ITService() {
    const services = [
        {
            icon: <Code className="w-8 h-8 text-gold" />,
            title: "Digital Marketing & Performance Marketing",
            description: "Grow your online presence and scale revenue using modern marketing strategies",
            items: [
                "Performance Marketing (Meta Ads, Google Ads)",
                "Social Media Marketing",
                "Search Engine Optimization (SEO)",
                "Content Marketing & Content Writing",
                "Lead Generation Strategies",
                "Marketing Analytics & Campaign Optimization"
            ]
        },
        {
            icon: <Zap className="w-8 h-8 text-gold" />,
            title: "Web Development",
            description: "Building professional websites and applications with modern technologies",
            items: [
                "Front-End Development (HTML, CSS, JavaScript, React)",
                "Back-End Development (Node.js, Python, Databases)",
                "Full-Stack Web Development",
                "Website Design & Deployment",
                "E-commerce Website Development"
            ]
        },
        {
            icon: <Brain className="w-8 h-8 text-gold" />,
            title: "Artificial Intelligence & Machine Learning",
            description: "Next-generation technology careers through hands-on training",
            items: [
                "Artificial Intelligence Engineer Training",
                "Machine Learning Engineer Training",
                "Data Handling & Model Building",
                "AI Tools & Automation Applications",
                "Industry-Based AI Projects"
            ]
        },
        {
            icon: <Palette className="w-8 h-8 text-gold" />,
            title: "Creative & Non-Technical Skills",
            description: "Build employable and freelancing-ready creative skills",
            items: [
                "Video Editing",
                "Graphic Designing",
                "Content Writing & Copywriting",
                "Digital Creative Tools Training"
            ]
        }
    ];

    const tracks = [
        {
            category: "Technical Tracks",
            items: ["Web Development", "AI Engineer", "Machine Learning Engineer", "Full-Stack Development"]
        },
        {
            category: "Non-Technical Tracks",
            items: ["Digital Marketing", "Performance Marketing", "Content Writing", "Creative Designing"]
        }
    ];

    const whyChoose = [
        "Industry-Focused Curriculum",
        "Practical Project-Based Learning",
        "Career-Oriented Skill Development",
        "Expert Mentors & Trainers",
        "Placement & Freelancing Guidance"
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-navy-deep to-navy-midnight text-white py-16 md:py-24 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">IT SERVICES</h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                        Comprehensive IT Services, Professional Training, and Skill-Based Courses designed to help you upgrade your technical and non-technical capabilities
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-12 md:py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Blu-ray offers industry-oriented, practical programs aligned with real-world requirements. Whether you are looking to build a career in technology, enhance your creative skills, or grow your business through digital solutions, our IT Services division provides structured learning and professional service support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-deep text-center mb-12 tracking-wider">
                        OUR SERVICES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-xl hover:border-gold transition-all duration-300"
                            >
                                <div className="flex gap-4 mb-4">
                                    <div className="flex-shrink-0">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-navy-deep">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Tracks Section */}
            <section className="py-16 md:py-20 px-4 bg-navy-deep text-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider">
                        SPECIALIZATION TRACKS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {tracks.map((track, index) => (
                            <div key={index} className="bg-navy-midnight rounded-lg p-8 border border-gold/30">
                                <h3 className="text-2xl font-bold text-gold mb-6">{track.category}</h3>
                                <ul className="space-y-4">
                                    {track.items.map((item, i) => (
                                        <li key={i} className="flex gap-3 items-center text-white">
                                            <ArrowRight className="w-5 h-5 text-gold flex-shrink-0" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-16 md:py-20 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-deep text-center mb-12 tracking-wider">
                        WHY CHOOSE BLUERAY IT SERVICES?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                        {whyChoose.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border-t-4 border-gold"
                            >
                                <p className="text-navy-deep font-bold text-sm md:text-base">{reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-gold to-yellow-500">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
                        Ready to Transform Your Career?
                    </h2>
                    <p className="text-lg text-navy-deep opacity-90 mb-10 max-w-2xl mx-auto">
                        Join thousands of students who have upgraded their skills with Blueray IT Services
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-navy-deep text-white px-8 py-3 rounded-lg font-bold hover:bg-navy-midnight transition-colors text-lg"
                        >
                            Get Started Today
                        </Link>
                        <a
                            href={`tel:${CONTACT_INFO.phonePrimary}`}
                            className="bg-white text-navy-deep px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg border-2 border-navy-deep"
                        >
                            Call Us Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
