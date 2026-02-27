import React, { useEffect } from 'react';
import { X, Dumbbell, Laptop, Car, Shield, Utensils, Landmark, ShoppingBag, Leaf, Wifi } from 'lucide-react';

const LocationModal = ({ isOpen, onClose, locationData }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !locationData) return null;

    // Map string names to lucide-react instances
    const renderIcon = (iconName) => {
        const props = { className: "text-accent", size: 32 }; // Larger icons
        switch (iconName) {
            case 'Dumbbell': return <Dumbbell {...props} />;
            case 'Laptop': return <Laptop {...props} />;
            case 'Car': return <Car {...props} />;
            case 'Shield': return <Shield {...props} />;
            case 'Utensils': return <Utensils {...props} />;
            case 'Landmark': return <Landmark {...props} />;
            case 'ShoppingBag': return <ShoppingBag {...props} />;
            case 'Leaf': return <Leaf {...props} />;
            case 'Wifi': return <Wifi {...props} />;
            default: return null;
        }
    };

    return (
        <div className="fixed inset-0 z-[200] flex justify-end">
            {/* Backdrop Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
                aria-label="Cerrar panel"
            />

            {/* Slide-over Panel Box */}
            <div className="relative w-full sm:w-[500px] lg:w-[600px] xl:w-[40%] bg-zinc-50 border-l border-gray-200 shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.1)] flex flex-col h-full overflow-hidden animate-in slide-in-from-right duration-500 ease-out-custom">

                {/* Elegant Close Button over the carousel */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-3 text-zinc-900 hover:text-accent transition-colors z-20 bg-white/70 rounded-full backdrop-blur-md border border-gray-200 shadow-sm"
                >
                    <X size={24} />
                </button>

                {/* Content Scrollable Area */}
                <div className="overflow-y-auto flex-1 custom-scrollbar pb-10">

                    {/* Snap Carousel */}
                    <div className="relative w-full h-[35vh] min-h-[300px] flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                        {locationData.images.map((imgUrl, idx) => (
                            <div key={idx} className="w-full shrink-0 h-full snap-start relative">
                                <img
                                    src={imgUrl}
                                    alt={`${locationData.title} vista ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom overlay gradient for readable text overlapping */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent opacity-90" />
                            </div>
                        ))}
                    </div>

                    {/* Body Content */}
                    <div className="p-8 sm:p-10 -mt-10 relative z-10">

                        <div className="mb-10 pt-10 pb-4">
                            <span className="text-xs uppercase tracking-[0.2em] text-accent mb-3 block font-bold">
                                {locationData.tag}
                            </span>
                            <h2 className="font-serif text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
                                {locationData.title}
                            </h2>
                            <p className="text-zinc-600 leading-relaxed text-lg font-medium">
                                {locationData.description}
                            </p>
                        </div>

                        {/* Minimalist Card Grid: Amenities */}
                        <div className="mb-12">
                            <h3 className="uppercase tracking-[0.1em] text-sm text-zinc-900 mb-6 border-b border-gray-200 pb-3 font-semibold">
                                Refinamientos
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {locationData.amenities.map((item, idx) => (
                                    <div key={idx} className="p-5 bg-white border border-gray-200 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-300">
                                        <div className="mb-4">
                                            {renderIcon(item.icon)}
                                        </div>
                                        <h4 className="text-zinc-900 font-semibold mb-1 text-[1.05rem]">{item.label}</h4>
                                        <p className="text-zinc-500 text-sm leading-snug">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Neighborhood Storytelling */}
                        {locationData.neighborhood && (
                            <div className="p-6 sm:p-8 bg-white border border-gray-200 shadow-sm italic text-zinc-600 border-l-2 border-l-accent mt-8 mb-4">
                                <p className="leading-relaxed text-[1.05rem] font-medium">
                                    "{locationData.neighborhood}"
                                </p>
                            </div>
                        )}

                    </div>
                </div>

                {/* Fixed CTA Footer */}
                <div className="p-6 bg-white border-t border-gray-200 mt-auto shrink-0 relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                    <a
                        href={locationData.bookingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-5 px-8 bg-accent text-white font-sans uppercase tracking-[0.15em] text-[0.9rem] font-bold hover:bg-zinc-900 transition-all duration-300 shadow-[0_4px_14px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1"
                    >
                        Ver Disponibilidad y Reservar
                    </a>
                </div>

            </div>
        </div>
    );
};

export default LocationModal;
