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
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

                    {/* Text Content */}
                    <div className="reveal-on-scroll">
                        <h2 className="font-logo text-5xl mb-8">
                            Más que un lugar para quedarte,<br />tu <span className="text-accent">Santuario Urbano</span>.
                        </h2>
                        <p className="text-text-muted mb-6 text-lg">
                            Olvídate de los espacios impersonales. En Kaza Living creemos que la verdadera exclusividad está en la libertad de sentirte en casa.
                        </p>
                        <p className="text-text-muted mb-6 text-lg">
                            Ya sea por una noche, una estadía corporativa o varios meses, nuestros apartamentos equipados y habitaciones privadas en Calle 100 y Usaquén combinan privacidad, practicidad y seguridad con la comodidad de tu propio espacio.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-12 mt-12 border-t border-border pt-8">
                            <div>
                                <h3 className="text-4xl text-accent font-logo mb-2">5.0</h3>
                                <span className="text-xs uppercase tracking-[0.1em] text-text-muted">Estrellas en TripAdvisor</span>
                            </div>
                            <div>
                                <h3 className="text-4xl text-accent font-logo mb-2">2</h3>
                                <span className="text-xs uppercase tracking-[0.1em] text-text-muted">Ubicaciones Prime</span>
                            </div>
                            <div>
                                <h3 className="text-4xl text-accent font-logo mb-2">∞</h3>
                                <span className="text-xs uppercase tracking-[0.1em] text-text-muted">Privacidad</span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="reveal-on-scroll">
                        <img
                            src="/images/calle-100/experiencia_suite.webp"
                            alt="Interior de lujo Kaza Living"
                            className="w-full border border-border grayscale-[20%]"
                            width="1600"
                            height="2400"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Narrative;
