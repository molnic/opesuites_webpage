import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { Map, MapMarker, MarkerContent, MarkerPopup, MapControls } from './ui/map';

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
                        <h2 className="font-serif text-[3rem] mb-6 leading-tight text-zinc-900">
                            En el epicentro de la <br />
                            <span className="italic text-accent">Vida Cosmopolita</span>
                        </h2>
                        <p className="text-zinc-600 text-lg mb-6 max-w-[500px]">
                            Posicionados estratégicamente entre la elegancia del Parque 93 y el encanto colonial de Usaquén. Ope Suites te ofrece acceso inmediato a la vibrante escena gastronómica, cultural y de negocios de Bogotá.
                        </p>
                        <p className="text-zinc-600 text-lg mb-8 max-w-[500px]">
                            No necesitas alejarte para vivir la ciudad. Todo lo que importa está a unos pasos de tu refugio privado.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <span className="py-2 px-4 border border-gray-200 text-xs uppercase tracking-widest text-zinc-800 bg-white shadow-sm font-medium">
                                Gastronomía Michelin
                            </span>
                            <span className="py-2 px-4 border border-gray-200 text-xs uppercase tracking-widest text-zinc-800 bg-white shadow-sm font-medium">
                                Distrito Financiero
                            </span>
                            <span className="py-2 px-4 border border-gray-200 text-xs uppercase tracking-widest text-zinc-800 bg-white shadow-sm font-medium">
                                Entretenimiento
                            </span>
                        </div>
                    </div>

                    {/* Right Interactive Map */}
                    <div className="reveal-on-scroll relative aspect-square lg:aspect-[4/3] border border-gray-200 bg-white p-1 overflow-hidden shadow-sm">
                        <Map
                            center={[-74.045, 4.690]}
                            zoom={13}
                            styles={{
                                light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
                                dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
                            }}
                        >
                            <MapControls position="bottom-right" showZoom />

                            {/* Sede Calle 100 */}
                            <MapMarker longitude={-74.056405} latitude={4.687697}>
                                <MarkerContent>
                                    <div className="flex flex-col items-center group cursor-pointer -translate-y-1/2">
                                        <div className="relative flex justify-center items-center w-8 h-8">
                                            <div className="absolute inset-0 bg-accent rounded-full opacity-40 animate-ping" />
                                            <div className="w-6 h-6 bg-accent rounded-full border-2 border-white relative z-10 flex items-center justify-center shadow-md">
                                                <MapPin size={12} className="text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </MarkerContent>
                                <MarkerPopup className="bg-white border border-gray-200 px-4 py-2 text-zinc-900 shadow-xl">
                                    <p className="font-serif text-sm font-medium">OPE Suites - Calle 100</p>
                                </MarkerPopup>
                            </MapMarker>

                            {/* Sede Usaquén */}
                            <MapMarker longitude={-74.029550} latitude={4.695392}>
                                <MarkerContent>
                                    <div className="flex flex-col items-center group cursor-pointer -translate-y-1/2">
                                        <div className="relative flex justify-center items-center w-8 h-8">
                                            <div className="absolute inset-0 bg-accent rounded-full opacity-40 animate-ping" style={{ animationDelay: '1s' }} />
                                            <div className="w-6 h-6 bg-accent rounded-full border-2 border-white relative z-10 flex items-center justify-center shadow-md">
                                                <MapPin size={12} className="text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </MarkerContent>
                                <MarkerPopup className="bg-white border border-gray-200 px-4 py-2 text-zinc-900 shadow-xl">
                                    <p className="font-serif text-sm font-medium">OPE Suites - Usaquén</p>
                                </MarkerPopup>
                            </MapMarker>
                        </Map>

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
