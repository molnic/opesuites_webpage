import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "¿Cuál es la hora de llegada y salida?",
        answer: "Check-in a partir de las 2:00 pm, check-out hasta las 11:00 am."
    },
    {
        question: "¿Ofrecen servicios de limpieza?",
        answer: "Contamos con servicio de limpieza disponible durante tu estadía, el cual puedes solicitar con un costo adicional. Para reservas de más de 8 días, incluimos un servicio de aseo cada 8 días sin costo adicional."
    },
    {
        question: "¿Es un espacio Pet-Friendly?",
        answer: "Para garantizar la comodidad de todos nuestros huéspedes, normalmente no admitimos mascotas. No obstante, en situaciones puntuales podemos evaluar el caso con anticipación. Escríbenos antes de reservar."
    },
    {
        question: "¿Hay parqueadero disponible?",
        answer: "Contamos con parqueadero privado y seguridad 24/7 en nuestra sede Calle 100."
    }
];

const PreguntasFrecuentes = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const sectionRef = useRef(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
        <section className="py-24 bg-zinc-50 border-t border-gray-200" ref={sectionRef}>
            <div className="container max-w-[800px] mx-auto px-8">

                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="font-serif text-[2.5rem] mb-4 text-zinc-900">Detalles que Importan</h2>
                    <p className="text-zinc-600">Todo lo que necesitas saber antes de tu llegada.</p>
                </div>

                <div className="space-y-4 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-accent/40"
                        >
                            <button
                                onClick={() => toggleAccordion(idx)}
                                className="w-full flex justify-between items-center p-6 text-left cursor-pointer transition-colors focus:outline-none"
                            >
                                <span className="font-semibold text-zinc-900 text-[1.05rem]">{faq.question}</span>
                                <ChevronDown
                                    className={`text-accent transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`}
                                    size={20}
                                />
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-zinc-600 font-medium">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PreguntasFrecuentes;
