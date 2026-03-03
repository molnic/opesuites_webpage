import React from 'react';
import { Wifi, Sofa, BellRing, MapPin, ChefHat } from 'lucide-react';

const Amenities = () => {
    return (
        <div className="py-20 border-y border-border bg-gradient-to-r from-bg-deep to-bg-surface">
            <div className="container max-w-[1400px] mx-auto px-8">
                <div className="flex justify-around flex-wrap gap-8">

                    <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <Wifi className="text-accent" size={24} />
                        <span>WiFi de Alta Velocidad</span>
                    </div>

                    <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <Sofa className="text-accent" size={24} />
                        <span>Espacios Amoblados</span>
                    </div>

                    <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <BellRing className="text-accent" size={24} />
                        <span>Atención Virtual o Presencial</span>
                    </div>

                    <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <MapPin className="text-accent" size={24} />
                        <span>Ubicación Estratégica</span>
                    </div>

                    <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <ChefHat className="text-accent shrink-0" size={24} />
                        <span className="leading-tight text-left">
                            Cocina Equipada<br />
                            <span className="text-xs opacity-75 whitespace-nowrap">(según tipo de unidad)</span>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Amenities;
