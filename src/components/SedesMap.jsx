import React from 'react';
import { MapPin } from 'lucide-react';
import { Map, MapMarker, MarkerContent, MarkerPopup, MapControls } from './ui/map';

// Mapa de sedes — se carga de forma diferida (lazy) para no meter MapLibre
// en el bundle inicial de la página.
const SedesMap = () => (
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
                <p className="font-serif text-sm font-medium">Kaza Living - Calle 100</p>
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
                <p className="font-serif text-sm font-medium">Kaza Living - Usaquén</p>
            </MarkerPopup>
        </MapMarker>
    </Map>
);

export default SedesMap;
