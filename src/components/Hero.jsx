import React from 'react';

const Hero = () => {
    return (
        <header className="h-screen flex items-center relative overflow-hidden group">
            {/* Background Image with Scale effect on hover */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2580&auto=format&fit=crop')] bg-no-repeat bg-center bg-cover opacity-30 scale-110 transition-transform duration-[10s] ease-in-out group-hover:scale-100 -z-10"
            />

            <div className="container max-w-[1400px] mx-auto px-8">
                <div className="max-w-[800px]">
                    <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[1.1] mb-8 font-normal reveal-on-scroll visible">
                        Estancias de Lujo.<br />
                        <span className="italic text-accent">Sentimiento de Hogar.</span>
                    </h1>

                    <div
                        className="text-[1.1rem] text-text-muted max-w-[450px] mb-12 border-l border-accent pl-6 reveal-on-scroll visible"
                        style={{ transitionDelay: '0.2s' }}
                    >
                        Apartaestudios totalmente equipados en las zonas más exclusivas de Bogotá.
                        Diseñados para ejecutivos y viajeros que exigen privacidad.
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 reveal-on-scroll visible"
                style={{ transitionDelay: '0.4s' }}
            >
                <div className="w-[1px] h-[60px] bg-gradient-to-b from-text-main to-transparent" />
            </div>
        </header>
    );
};

export default Hero;
