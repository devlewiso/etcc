import React from 'react';
import { MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function ServiceArea() {
  const areas = [
    {
      name: 'San Luis Obispo',
      position: [35.2828, -120.6596] as LatLngExpression
    },
    {
      name: 'Pismo Beach',
      position: [35.1428, -120.6412] as LatLngExpression
    },
    {
      name: 'Arroyo Grande',
      position: [35.1186, -120.5903] as LatLngExpression
    },
    {
      name: 'Morro Bay',
      position: [35.3658, -120.8499] as LatLngExpression
    },
    {
      name: 'Los Osos',
      position: [35.3102, -120.8343] as LatLngExpression
    },
    {
      name: 'Atascadero',
      position: [35.4894, -120.6707] as LatLngExpression
    },
    {
      name: 'Paso Robles',
      position: [35.6266, -120.6910] as LatLngExpression
    }
  ];

  const center: LatLngExpression = [35.2828, -120.6596]; // San Luis Obispo center

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proudly serving San Luis Obispo County and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area) => (
                <div key={area.name} className="flex items-center">
                  <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-gray-700">{area.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden h-[400px] shadow-sm">
            <MapContainer 
              center={center} 
              zoom={10} 
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {areas.map((area) => (
                <Marker 
                  key={area.name} 
                  position={area.position}
                >
                  <Popup>
                    <div className="font-semibold">{area.name}</div>
                    <div className="text-sm text-gray-600">Service Available</div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}