import React, { useEffect, useRef, lazy, Suspense } from 'react';

// El mapa (MapLibre) se carga de forma diferida para aligerar el bundle inicial.
const SedesMap = lazy(() => import('./SedesMap'));

const UbicacionPremium = () => {
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
        <section className="py-32 bg-zinc-50 border-t border-gray-200 overflow-hidden relative" ref={sectionRef}>
            {/* Background abstract grid lines */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}
            />

            <div className="container max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text Content */}
                    <div className="reveal-on-scroll relative z-10">
                        <h2 className="font-logo text-[3rem] mb-6 leading-tight text-zinc-900">
                            En el epicentro de la <br />
                            <span className="text-accent">Vida Cosmopolita</span>
                        </h2>
                        <p className="text-zinc-600 text-lg mb-6 max-w-[500px]">
                            Posicionados estratégicamente entre la elegancia del Parque 93 y el encanto colonial de Usaquén. Kaza Living te ofrece acceso inmediato a la vibrante escena gastronómica, cultural y de negocios de Bogotá.
                        </p>
                        <p className="text-zinc-600 text-lg mb-8 max-w-[500px]">
                            No necesitas alejarte para vivir la ciudad. Todo lo que importa está a unos pasos de tu refugio privado.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <span className="py-2 px-4 border border-gray-200 text-xs uppercase tracking-widest text-zinc-800 bg-white shadow-sm font-medium">
                                Zona Financiera
                            </span>
                            <span className="py-2 px-4 border border-gray-200 text-xs uppercase tracking-widest text-zinc-800 bg-white shadow-sm font-medium">
                                Centros de Salud
                            </span>
                            <span className="py-2 px-4 border border-gray-200 text-xs uppercase tracking-widest text-zinc-800 bg-white shadow-sm font-medium">
                                Gastronomía y Cafés
                            </span>
                            <span className="py-2 px-4 border border-gray-200 text-xs uppercase tracking-widest text-zinc-800 bg-white shadow-sm font-medium">
                                Comercio
                            </span>
                            <span className="py-2 px-4 border border-gray-200 text-xs uppercase tracking-widest text-zinc-800 bg-white shadow-sm font-medium">
                                Entretenimiento
                            </span>
                        </div>
                    </div>

                    {/* Right Interactive Map */}
                    <div className="reveal-on-scroll relative aspect-square lg:aspect-[4/3] border border-gray-200 bg-white p-1 overflow-hidden shadow-sm">
                        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-zinc-400 text-sm">Cargando mapa…</div>}>
                            <SedesMap />
                        </Suspense>

                        {/* Decorative Grid overlays */}
                        <div className="absolute bottom-4 left-4 border-l border-b border-gray-300 w-16 h-16 pointer-events-none z-10 block" />
                        <div className="absolute top-4 right-4 border-r border-t border-gray-300 w-16 h-16 pointer-events-none z-10 block" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UbicacionPremium;
