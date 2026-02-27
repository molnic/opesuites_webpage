import React, { useEffect, useRef } from 'react';

const GaleriaEstiloVida = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 bg-zinc-50 border-t border-gray-200" ref={sectionRef}>
            <div className="container max-w-[1400px] mx-auto px-8">

                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="font-serif text-[2.5rem] mb-4 text-zinc-900">El Arte de Habitar</h2>
                    <p className="text-zinc-600 max-w-[600px] mx-auto">
                        Cada detalle en Ope Suites ha sido curado para inspirar. Espacios que trascienden el alojamiento tradicional para convertirse en una extensión de tu estilo de vida.
                    </p>
                </div>

                {/* Masonry / Asymmetrical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">

                    {/* Image 1: Tall Architecture (Spans 2 rows) */}
                    <div className="md:col-span-1 md:row-span-2 overflow-hidden border border-border relative group reveal-on-scroll">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                        <img
                            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop"
                            alt="Arquitectura moderna"
                            className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-[1.08] transition-transform duration-1000 ease-out grayscale-[40%]"
                        />
                    </div>

                    {/* Image 2: Wide Interior Lobby/Cafe */}
                    <div className="md:col-span-2 md:row-span-1 overflow-hidden border border-border relative group reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
                            alt="Lobby de lujo"
                            className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-[1.08] transition-transform duration-1000 ease-out grayscale-[40%]"
                        />
                    </div>

                    {/* Image 3: Focus Detail (Coffee / Book) */}
                    <div className="md:col-span-1 md:row-span-1 overflow-hidden border border-border relative group reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                        <img
                            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop"
                            alt="Detalles de vida urbana"
                            className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-[1.08] transition-transform duration-1000 ease-out grayscale-[40%]"
                        />
                    </div>

                    {/* Image 4: Fine Dining or Evening Scene */}
                    <div className="md:col-span-1 md:row-span-1 overflow-hidden border border-border relative group reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                        <img
                            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
                            alt="Bar elegante y coctelería"
                            className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-[1.08] transition-transform duration-1000 ease-out grayscale-[40%]"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default GaleriaEstiloVida;
