import React, { useEffect, useRef } from 'react';

const testimonials = [
    {
        quote: "Encontré en Calle 100 el silencio que necesitaba para cerrar mis proyectos y el confort de un hogar real.",
        author: "Andrés, Ejecutivo Tech - CDMX",
        badge: "Estadía Larga"
    },
    {
        quote: "La atención al detalle es impecable. Usaquén me regaló la mezcla perfecta entre gastronomía vibrante y descanso absoluto.",
        author: "Sofía, Directora Creativa - Madrid",
        badge: "Escapada Premium"
    },
    {
        quote: "Desde la seguridad 24/7 hasta la velocidad del WiFi, todo está pensado para el viajero moderno. Simplemente insuperable.",
        author: "Carlos, Consultor Financiero - Miami",
        badge: "Estadía Corporativa"
    }
];

const HistoriasHuespedes = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        const elements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-24 bg-white border-t border-gray-200" ref={sectionRef}>
            <div className="container max-w-[1400px] mx-auto px-8">
                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="font-serif text-[2.5rem] mb-4 text-zinc-900">Historias de Nuestros Huéspedes</h2>
                    <p className="text-zinc-600 max-w-[600px] mx-auto">
                        Experiencias reales de quienes han hecho de Ope Suites su refugio.
                    </p>
                </div>

                {/* Grid A Prueba de Fallos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Testimonial 1 */}
                    <div className="col-span-1 bg-white border border-zinc-200 p-8 flex flex-col justify-between reveal-on-scroll transition-shadow hover:shadow-md">
                        <div>
                            <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                                {testimonials[0].badge}
                            </span>
                            <p className="font-serif italic text-2xl leading-relaxed text-zinc-800 mb-8">
                                "{testimonials[0].quote}"
                            </p>
                        </div>
                        <div className="flex items-center gap-4 border-t border-zinc-200 pt-6 mt-auto">
                            <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-500 font-serif italic text-xl">A</div>
                            <span className="text-sm font-medium text-zinc-600 uppercase tracking-wide">{testimonials[0].author}</span>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="col-span-1 bg-white border border-zinc-200 p-8 flex flex-col justify-between reveal-on-scroll transition-shadow hover:shadow-md" style={{ transitionDelay: '0.1s' }}>
                        <div>
                            <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                                {testimonials[1].badge}
                            </span>
                            <p className="font-serif italic text-2xl leading-relaxed text-zinc-800 mb-8">
                                "{testimonials[1].quote}"
                            </p>
                        </div>
                        <div className="flex items-center gap-4 border-t border-zinc-200 pt-6 mt-auto">
                            <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-500 font-serif italic text-xl">S</div>
                            <span className="text-sm font-medium text-zinc-600 uppercase tracking-wide">{testimonials[1].author}</span>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="md:col-span-2 bg-white border border-zinc-200 p-8 flex flex-col items-center text-center reveal-on-scroll transition-shadow hover:shadow-md" style={{ transitionDelay: '0.2s' }}>
                        <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                            {testimonials[2].badge}
                        </span>
                        <p className="font-serif italic text-2xl md:text-3xl leading-relaxed text-zinc-800 mb-8 max-w-4xl">
                            "{testimonials[2].quote}"
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                            <div className="w-10 h-10 bg-zinc-100 rounded-full flex flex-shrink-0 items-center justify-center text-zinc-500 font-serif italic text-xl">C</div>
                            <span className="text-sm font-medium text-zinc-600 uppercase tracking-wide">{testimonials[2].author}</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HistoriasHuespedes;
