import type { Metadata } from 'next';
import React from 'react';
import {
    Phone, Mail, MapPin, MessageCircle, Map
} from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Contact Us | Blueray International',
    description: 'Get in touch with Blueray International for training inquiries, inspection services, or consultations. Located in Vadalur, Tamil Nadu.',
};

export default function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen pb-20 animate-fade-in-up">
            <div className="bg-navy-deep text-white py-16 px-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-2 font-brand">Contact Us</h1>
                    <p className="opacity-80">Get in touch for training, inspection, or consultation.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold text-navy-deep mb-8 uppercase font-brand">Get in Touch</h2>
                        <div className="space-y-8">
                            <ContactMethod
                                icon={Phone}
                                title="Phone / WhatsApp"
                                primary={CONTACT_INFO.phonePrimary}
                                secondary={`Available: Monday - Sunday (9 AM - 6 PM)`}
                            />

                            <ContactMethod
                                icon={Mail}
                                title="Email Addresses"
                                primary={
                                    <div className="flex flex-col gap-1">
                                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:underline">{CONTACT_INFO.email}</a>
                                        <a href={`mailto:${CONTACT_INFO.secondaryEmail}`} className="text-blue-600 hover:underline">{CONTACT_INFO.secondaryEmail}</a>
                                    </div>
                                }
                            />

                            <ContactMethod
                                icon={MapPin}
                                title="Visit Us"
                                primary={`${CONTACT_INFO.addressLine1}, ${CONTACT_INFO.addressLine2}`}
                                secondary="Working Days: Monday - Sunday"
                            />
                        </div>

                        <div className="mt-10">
                            <a
                                href={CONTACT_INFO.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition shadow-lg active:scale-95"
                            >
                                <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-[400px] lg:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9689743247886!2d79.54774557481706!3d11.554081888645937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54b760b37b6e7b%3A0xde7ce3f490209128!2sBlueray%20International%20College%20Of%20Advanced%20NDT!5e0!3m2!1sen!2sin!4v1770899379651!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
}

function ContactMethod({ icon: Icon, title, primary, secondary }: any) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-navy-deep/10 rounded-full flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-navy-deep" />
            </div>
            <div>
                <p className="font-bold text-navy-deep text-lg">{title}</p>
                <div className="text-slate-600 font-medium text-lg">{primary}</div>
                {secondary && <p className="text-slate-500 text-sm mt-1">{secondary}</p>}
            </div>
        </div>
    );
}
