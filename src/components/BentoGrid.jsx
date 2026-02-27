import React, { useEffect, useRef, useState } from 'react';
import { Clock, ShieldCheck, Building2 } from 'lucide-react';
import LocationModal from './LocationModal';

const locationDetails = {
    calle100: {
        id: 'calle100',
        tag: 'Distrito de Negocios',
        title: 'Calle 100',
        description: 'El epicentro de los negocios en Bogotá. Av. Calle 100 # 23-44. Conectividad total y diseño sobrio ideal para ejecutivos exigentes.',
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop', // Luxury apt view
            'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2000&auto=format&fit=crop', // Home office desk
        ],
        bookingLink: 'https://reservas.molnic.com/?sede=calle-100',
        amenities: [
            { icon: 'Dumbbell', label: 'Gym', description: 'Alto Rendimiento - 24/7' },
            { icon: 'Laptop', label: 'Coworking Space', description: 'Productividad Total' },
            { icon: 'Car', label: 'Parqueadero Privado', description: 'Seguridad y Comodidad' },
            { icon: 'Wifi', label: 'Wi-Fi Directo', description: 'Alta Velocidad para Negocios' }
        ],
        neighborhood: 'Viviendo el Barrio: Estarás a un paso del vibrante Parque 93 y el corredor corporativo más importante de la ciudad. Ideal para cerrar ese trato por la mañana y disfrutar de la mejor coctelería por la noche.'
    },
    usaquen: {
        id: 'usaquen',
        tag: 'Vida y Cultura',
        title: 'Usaquén',
        description: 'Cra 5 # 119-11. Gastronomía, cultura y calles empedradas a pasos de tu suite. Un oasis de calma en la efervescencia del norte.',
        images: [
            'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop', // Dining
            'https://images.unsplash.com/photo-1542314831-c6a4d14d2303?q=80&w=2000&auto=format&fit=crop', // Premium bedroom
        ],
        bookingLink: 'https://reservas.molnic.com/?sede=usaquen',
        amenities: [
            { icon: 'Utensils', label: 'Alta Gastronomía', description: 'A pasos de tu puerta' },
            { icon: 'Landmark', label: 'Arquitectura Colonial', description: 'Encanto y Cultura' },
            { icon: 'ShoppingBag', label: 'Cerca a C.C.', description: 'Compras y Ocio' },
            { icon: 'Leaf', label: 'Tranquilidad Absoluta', description: 'Tu Refugio Urbano' }
        ],
        neighborhood: 'Viviendo el Barrio: Usaquén conserva la magia de un pueblo tradicional atrapado en el tiempo dentro de una urbe cosmopolita. Camina por sus calles empedradas los domingos y descubre el famoso mercado de pulgas.'
    }
};

const BentoGrid = () => {
    const gridRef = useRef(null);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = gridRef.current.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 pb-32 bg-zinc-50" id="suites" ref={gridRef}>
            <div className="container max-w-[1400px] mx-auto px-8">

                <div className="mb-16 flex justify-between items-end reveal-on-scroll">
                    <h2 className="font-serif text-[2.5rem] text-zinc-900">Nuestras Sedes</h2>
                    <p className="text-accent italic">Diseñado para la vida moderna</p>
                </div>

                {/* The Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[minmax(300px,auto)] gap-6">

                    {/* Calle 100 (Span 7) */}
                    <button
                        onClick={() => setSelectedLocation(locationDetails.calle100)}
                        className="lg:col-span-7 min-h-[500px] bg-white border border-gray-200 shadow-md hover:shadow-lg p-8 flex flex-col justify-between transition-all duration-400 ease-out-custom relative overflow-hidden group hover:border-accent hover:-translate-y-1 interactive reveal-on-scroll text-left w-full h-full cursor-pointer"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2670&auto=format&fit=crop"
                            className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.80] transition-all duration-400 ease-in z-0 grayscale-[80%] group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0"
                            alt="Calle 100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-0" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <span className="text-xs uppercase tracking-[0.15em] bg-white/95 text-zinc-900 py-2 px-4 self-start border border-gray-200 shadow-sm font-semibold">
                                Distrito de Negocios
                            </span>
                            <div className="mt-auto group-hover:text-white transition-colors duration-300 text-white">
                                <h3 className="font-serif text-[2.5rem] mb-2 drop-shadow-md">Calle 100</h3>
                                <p className="text-[1.05rem] max-w-[85%] font-medium text-zinc-200 group-hover:text-zinc-100 drop-shadow-md">
                                    El epicentro de los negocios en Bogotá. Av. Calle 100 # 23-44. Conectividad total y diseño sobrio.
                                </p>
                            </div>
                        </div>
                    </button>

                    {/* Usaquén (Span 5) */}
                    <button
                        onClick={() => setSelectedLocation(locationDetails.usaquen)}
                        className="lg:col-span-5 min-h-[500px] bg-white border border-gray-200 shadow-md hover:shadow-lg p-8 flex flex-col justify-between transition-all duration-400 ease-out-custom relative overflow-hidden group hover:border-accent hover:-translate-y-1 interactive reveal-on-scroll text-left w-full h-full cursor-pointer"
                        style={{ transitionDelay: '0.1s' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2670&auto=format&fit=crop"
                            className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.80] transition-all duration-400 ease-in z-0 grayscale-[80%] group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0"
                            alt="Usaquén"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-0" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <span className="text-xs uppercase tracking-[0.15em] bg-white/95 text-zinc-900 py-2 px-4 self-start border border-gray-200 shadow-sm font-semibold">
                                Vida y Cultura
                            </span>
                            <div className="mt-auto group-hover:text-white transition-colors duration-300 text-white">
                                <h3 className="font-serif text-[2.5rem] mb-2 drop-shadow-md">Usaquén</h3>
                                <p className="text-[1.05rem] max-w-[85%] font-medium text-zinc-200 group-hover:text-zinc-100 drop-shadow-md">
                                    Cra 5 # 119-11. Gastronomía, cultura y calles empedradas a pasos de tu suite.
                                </p>
                            </div>
                        </div>
                    </button>

                    {/* Feature 1 (Span 4) */}
                    <div className="lg:col-span-4 bg-white shadow-md border border-gray-200 p-8 flex flex-col justify-between transition-all duration-400 ease-out-custom relative overflow-hidden group hover:border-accent hover:-translate-y-1 hover:shadow-lg reveal-on-scroll">
                        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left">
                            <Clock className="text-accent mb-6 w-10 h-10" />
                            <h4 className="text-[1.35rem] font-serif font-semibold mb-3 text-zinc-900">Estadías Largas</h4>
                            <p className="text-zinc-600 text-[1rem] leading-relaxed">
                                Tarifas preferenciales para estancias mensuales. Siéntete en casa, por más tiempo.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 (Span 4) */}
                    <div
                        className="lg:col-span-4 bg-white shadow-md border border-gray-200 p-8 flex flex-col justify-between transition-all duration-400 ease-out-custom relative overflow-hidden group hover:border-accent hover:-translate-y-1 hover:shadow-lg reveal-on-scroll"
                        style={{ transitionDelay: '0.1s' }}
                    >
                        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left">
                            <ShieldCheck className="text-accent mb-6 w-10 h-10" />
                            <h4 className="text-[1.35rem] font-serif font-semibold mb-3 text-zinc-900">Seguridad 24/7</h4>
                            <p className="text-zinc-600 text-[1rem] leading-relaxed">
                                Monitoreo constante y acceso controlado para tu tranquilidad total en nuestra recepción privada.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 (Span 4) */}
                    <div
                        className="lg:col-span-4 bg-white shadow-md border border-gray-200 p-8 flex flex-col justify-between transition-all duration-400 ease-out-custom relative overflow-hidden group hover:border-accent hover:-translate-y-1 hover:shadow-lg reveal-on-scroll"
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left">
                            <Building2 className="text-accent mb-6 w-10 h-10" />
                            <h4 className="text-[1.35rem] font-serif font-semibold mb-3 text-zinc-900">Vistas de la Ciudad</h4>
                            <p className="text-zinc-600 text-[1rem] leading-relaxed">
                                Grandes ventanales de piso a techo que integran el paisaje verde y urbano de Bogotá a tu espacio.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Integrate the Discovery Modal overlay rendering */}
            <LocationModal
                isOpen={!!selectedLocation}
                onClose={() => setSelectedLocation(null)}
                locationData={selectedLocation}
            />
        </section>
    );
};

export default BentoGrid;
