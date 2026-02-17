"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Award, CheckCircle, MessageCircle, BookOpen, Globe2,
  GraduationCap, Briefcase, PlaneTakeoff, Search,
  ClipboardCheck, Flame, Settings, Users, Zap, ArrowRight
} from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import VideoModal from '@/components/ui/VideoModal';

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleOpenVideo = (src: string) => {
    setVideoSrc(src);
    setIsVideoOpen(true);
  };

  return (
    <>
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc={videoSrc}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1 mb-6 animate-pulse-slow">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Since 2009 | 15+ Years Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-brand">
              Job-Focused Training in <span className="text-gold">NDT</span>, QA/QC, Fire Safety & <span className="text-gold">IT Services</span>
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl">
              Blueray International provides technical training, IT services, and inspection solutions with dedicated guidance for career opportunities in India and abroad.
            </p>

            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold w-5 h-5" />
                <span>Training: NDT (ASNT L2), QA/QC, Fire Safety, IT Training</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold w-5 h-5" />
                <span>Services: Engineering Inspection & IT Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold w-5 h-5" />
                <span>Placement: 100% Guidance for Eligible Students</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 active:scale-95 text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
              <Link
                href="/training"
                className="bg-white text-navy-deep hover:bg-gray-100 active:scale-95 px-8 py-3 rounded-md font-bold flex items-center gap-2 transition-all shadow-md"
              >
                <BookOpen className="w-5 h-5" /> View Courses
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative animate-fade-in-right z-20">
            <div className="bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="aspect-square bg-navy-midnight rounded-lg overflow-hidden border border-white/10 relative group cursor-pointer"
                  onClick={() => handleOpenVideo("/videos/video1.mp4")}
                >
                  <img
                    src="/assets/students/image1.png"
                    alt="Student Placement - ONGC"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="aspect-square bg-navy-midnight rounded-lg overflow-hidden border border-white/10 relative group cursor-pointer"
                  onClick={() => handleOpenVideo("/videos/video2.mp4")}
                >
                  <img
                    src="/assets/students/image2.png"
                    alt="Student Placement - Marine Corp"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="aspect-square bg-navy-midnight rounded-lg overflow-hidden border border-white/10 relative group cursor-pointer"
                  onClick={() => handleOpenVideo("/videos/video3.mp4")}
                >
                  <img
                    src="/assets/students/image3.png"
                    alt="Student Placement - IT Sector"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-gold/80 rounded-lg flex flex-col items-center justify-center p-4 text-center text-navy-deep group">
                  <Users className="w-8 h-8 mb-2 animate-bounce" />
                  <p className="font-bold text-xs uppercase">Success Stories</p>
                  <p className="text-[10px] font-medium opacity-80">Our Placed Students</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-2xl animate-pulse-slow">
              <p className="text-navy-deep font-bold text-xs uppercase">1000+ Students Placed</p>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-gold"></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-navy-deep mb-4 uppercase tracking-tight font-brand">Our Expertise</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-slate-500">Three pillars of engineering excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertiseCard
              icon={GraduationCap}
              title="Training Programs"
              description="Comprehensive courses in NDT, QA/QC (Civil, Mech, Electrical), and Fire & Safety designed for industry readiness."
              link="/training"
              borderColor="border-navy-deep"
            />
            <ExpertiseCard
              icon={Briefcase}
              title="Inspection Services"
              description="Professional NDT inspection, weld inspection, and third-party quality assurance services for industrial projects."
              link="/services"
              borderColor="border-gold"
            />
            <ExpertiseCard
              icon={PlaneTakeoff}
              title="Career Guidance"
              description="Overseas placement guidance, resume preparation, and interview training based on candidate eligibility."
              link="/about"
              borderColor="border-navy-midnight"
            />
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-20 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-navy-deep mb-4 font-brand">Explore Our Services & Training</h2>
            <p className="text-slate-600">A complete collection of what we offer. Click to find out more.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceItem
              icon={Search}
              title="NDT Training"
              description="ASNT Level II training in Ultrasonic (UT), Radiography (RT), Magnetic Particle (MT), and Penetrant Testing (PT)."
              link="/training"
              btnText="View NDT Courses"
            />
            <ServiceItem
              icon={Zap}
              title="IT Training & Services"
              description="Specialized IT training modules including Web Development, Data Entry, and Software Support for modern industry."
              link="/training"
              btnText="Explore IT Services"
            />
            <ServiceItem
              icon={ClipboardCheck}
              title="QA/QC Courses"
              description="Specialized quality control training for Civil, Mechanical, and Electrical engineering disciplines."
              link="/training"
              btnText="View QA/QC Details"
            />
            <ServiceItem
              icon={Flame}
              title="Fire & Safety"
              description="Industrial safety officer training and offshore safety programs to ensure workplace compliance."
              link="/training"
              btnText="View Safety Training"
            />
            <ServiceItem
              icon={Settings}
              title="Inspection Services"
              description="Professional Weld Inspection, NDT Inspection, and Third-Party Inspection for industrial projects."
              link="/services"
              btnText="Go to Services"
            />
            <ServiceItem
              icon={Users}
              title="Career Support"
              description="Manpower supply, overseas placement guidance, resume building, and interview preparation."
              link="/services"
              btnText="View Career Support"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ExpertiseCard({ icon: Icon, title, description, link, borderColor }: any) {
  return (
    <Link href={link} className={`bg-gray-50 p-8 rounded-xl border-t-4 ${borderColor} shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}>
      <Icon className="w-10 h-10 text-navy-deep mb-4 group-hover:text-gold transition-colors" />
      <h3 className="text-xl font-bold mb-3 text-navy-deep">{title}</h3>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View <ArrowRight className="w-4 h-4" /></span>
    </Link>
  );
}

function ServiceItem({ icon: Icon, title, description, link, btnText }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col hover:-translate-y-1 duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-navy-deep/10 p-3 rounded-full">
          <Icon className="w-6 h-6 text-navy-deep" />
        </div>
        <h3 className="font-bold text-lg text-navy-deep">{title}</h3>
      </div>
      <p className="text-sm text-slate-600 mb-6 flex-grow">
        {description}
      </p>
      <Link href={link} className="w-full py-2 border-2 border-navy-deep text-navy-deep font-bold rounded hover:bg-navy-deep hover:text-white transition active:scale-95 text-center">
        {btnText}
      </Link>
    </div>
  );
}

