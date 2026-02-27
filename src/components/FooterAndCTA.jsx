import React, { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

// Using a custom SVG for TikTok since Lucide doesn't have a direct equivalent
const TikTokIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20" height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

export const CTA = () => {
    const ctaRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        const el = ctaRef.current;
        if (el) observer.observe(el);

        return () => { if (el) observer.disconnect(); };
    }, []);

    return (
        <section className="py-32 text-center bg-zinc-50" id="contacto">
            <div className="container max-w-[1400px] mx-auto px-8">
                <div
                    ref={ctaRef}
                    className="bg-white border border-gray-200 shadow-sm py-16 px-8 max-w-[900px] mx-auto relative reveal-on-scroll"
                >
                    {/* Kept out the heavy dark-mode glow, replaced with a warm light accent border */}
                    <div className="absolute inset-0 border-t-[3px] border-accent opacity-60 pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="font-serif text-[2.5rem] mb-4 text-zinc-900">¿Planeando una estancia larga?</h2>
                        <p className="text-zinc-600 max-w-[600px] mx-auto mb-8 font-medium">
                            Ofrecemos tarifas corporativas y descuentos exclusivos para nómadas digitales y ejecutivos en estancias superiores a 30 días.
                        </p>

                        <div className="flex gap-4 justify-center flex-wrap">
                            <a
                                href="https://api.whatsapp.com/send?phone=573102735824"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center mt-8 py-4 px-12 bg-accent text-white font-semibold uppercase tracking-[0.1em] transition-all duration-300 ease-in hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] interactive"
                            >
                                <span className="mr-2"><WhatsAppIcon /></span> Hablar por WhatsApp
                            </a>
                            <a
                                href="mailto:reservas@opesuites.com"
                                className="inline-flex items-center mt-8 py-4 px-12 bg-transparent border border-gray-300 text-zinc-800 font-sans uppercase tracking-[0.1em] text-sm cursor-pointer interactive transition-all duration-400 ease-out-custom hover:bg-zinc-800 hover:text-white hover:border-zinc-800"
                            >
                                Enviar Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="pt-20 pb-8 border-t border-gray-200 text-[0.9rem] text-zinc-600 bg-zinc-50">
            <div className="container max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 mb-16">

                    <div>
                        <h4 className="font-serif text-[1.5rem] font-semibold tracking-[-0.02em] text-zinc-900 mb-6">Ope Suites.</h4>
                        <p className="mb-4">Redefiniendo la hospitalidad en Bogotá.</p>
                        <div className="flex gap-6 text-zinc-400">
                            <a href="https://www.instagram.com/opesuitescol" target="_blank" rel="noreferrer" className="interactive hover:text-accent transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.tiktok.com/@ope.suites" target="_blank" rel="noreferrer" className="interactive hover:text-accent transition-colors">
                                <TikTokIcon />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 mb-6 font-serif text-[1.2rem]">Ubicaciones</h4>
                        <ul className="list-none p-0 flex flex-col gap-3">
                            <li><a href="https://goo.gl/maps/BzXyonDDW6oYJv9w7" target="_blank" rel="noreferrer" className="interactive hover:text-accent transition-colors">Sede Calle 100</a></li>
                            <li><a href="https://goo.gl/maps/UcyNHouBZQx9xDFs6" target="_blank" rel="noreferrer" className="interactive hover:text-accent transition-colors">Sede Usaquén</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 mb-6 font-serif text-[1.2rem]">Contacto</h4>
                        <ul className="list-none p-0 flex flex-col gap-3">
                            <li>+57 310 273 5824</li>
                            <li>reservas@opesuites.com</li>
                        </ul>
                    </div>

                </div>

                <div className="text-center pt-8 border-t border-gray-200 text-[0.85rem]">
                    &copy; 2024 Ope Suites. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};
