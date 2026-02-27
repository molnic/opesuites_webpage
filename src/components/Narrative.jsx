import React, { useEffect, useRef } from 'react';

const Narrative = () => {
    const narrativeRef = useRef(null);

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

        const elements = narrativeRef.current.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-40 bg-bg-deep" id="experiencia" ref={narrativeRef}>
            <div className="container max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="reveal-on-scroll">
                        <h2 className="font-serif text-5xl mb-8">
                            Más que un hotel,<br />tu <span className="italic text-accent">Santuario Urbano</span>.
                        </h2>
                        <p className="text-text-muted mb-6 text-lg">
                            Olvídate del caos impersonal de los hoteles tradicionales. En Ope Suites, entendemos que la verdadera exclusividad reside en la libertad.
                        </p>
                        <p className="text-text-muted mb-6 text-lg">
                            Ya sea por una noche de negocios o una estancia de meses, nuestros espacios en Calle 100 y Usaquén combinan la seguridad de un hotel con la autonomía de tu propio apartamento de lujo.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-12 mt-12 border-t border-border pt-8">
                            <div>
                                <h3 className="text-4xl text-accent font-serif mb-2">5.0</h3>
                                <span className="text-xs uppercase tracking-[0.1em] text-text-muted">Estrellas en TripAdvisor</span>
                            </div>
                            <div>
                                <h3 className="text-4xl text-accent font-serif mb-2">2</h3>
                                <span className="text-xs uppercase tracking-[0.1em] text-text-muted">Ubicaciones Prime</span>
                            </div>
                            <div>
                                <h3 className="text-4xl text-accent font-serif mb-2">∞</h3>
                                <span className="text-xs uppercase tracking-[0.1em] text-text-muted">Privacidad</span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="reveal-on-scroll">
                        <img
                            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop"
                            alt="Interior de lujo Ope Suites"
                            className="w-full border border-border grayscale-[20%]"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Narrative;
