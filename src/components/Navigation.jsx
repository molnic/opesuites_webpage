import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-bg-deep/85 backdrop-blur-md py-4 border-b border-border' : 'py-8 bg-transparent'
            }`}>
            <div className="container max-w-[1400px] mx-auto px-8 flex justify-between items-center">
                <a href="#" className="font-serif text-2xl font-semibold tracking-[-0.02em] text-text-main reveal-on-scroll visible">
                    Ope Suites.
                </a>

                <ul className="hidden md:flex gap-8 list-none m-0 p-0 reveal-on-scroll visible">
                    <li>
                        <a href="#suites" className="text-sm uppercase tracking-[0.1em] text-text-muted font-medium hover:text-text-main transition-colors duration-300 bg-transparent">
                            Suites
                        </a>
                    </li>
                    <li>
                        <a href="#experiencia" className="text-sm uppercase tracking-[0.1em] text-text-muted font-medium hover:text-text-main transition-colors duration-300 bg-transparent">
                            Experiencia
                        </a>
                    </li>
                    <li>
                        <a href="#contacto" className="text-sm uppercase tracking-[0.1em] text-text-muted font-medium hover:text-text-main transition-colors duration-300 bg-transparent">
                            Contacto
                        </a>
                    </li>
                </ul>

                <div className="reveal-on-scroll visible">
                    <a
                        href="http://localhost:8080/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-3 px-6 bg-transparent border border-border text-text-main font-sans uppercase tracking-[0.1em] text-xs cursor-pointer interactive transition-all duration-400 ease-out-custom hover:bg-text-main hover:text-bg-deep hover:border-text-main"
                    >
                        Reservar Ahora
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
