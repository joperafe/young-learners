"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
  type: 'school' | 'hotel' | 'restaurant' | 'attraction';
}

const locations: Location[] = [
  {
    id: 'ih-braga',
    name: 'IH Braga',
    description: 'Conference venue - International House Braga',
    coordinates: [41.5454, -8.4263], // Note: Leaflet uses [lat, lng] format
    type: 'school'
  },
  {
    id: 'hotel-bracara',
    name: 'Hotel Bracara Augusta',
    description: 'Recommended accommodation near the venue',
    coordinates: [41.5470, -8.4240],
    type: 'hotel'
  },
  {
    id: 'se-cathedral',
    name: 'Braga Cathedral',
    description: 'Historic cathedral and city landmark',
    coordinates: [41.5505, -8.4268],
    type: 'attraction'
  },
  {
    id: 'restaurant-tradicional',
    name: 'Restaurante Tradicional',
    description: 'Authentic Portuguese cuisine',
    coordinates: [41.5490, -8.4280],
    type: 'restaurant'
  }
];

const getMarkerColor = (type: string): string => {
  switch (type) {
    case 'school': return '#002b5c'; // Navy blue for IH Braga
    case 'hotel': return '#b51c2c'; // Red for hotels
    case 'restaurant': return '#ff6b35'; // Orange for restaurants
    case 'attraction': return '#4a90e2'; // Light blue for attractions
    default: return '#666666';
  }
};

const getMarkerIcon = (type: string): string => {
  switch (type) {
    case 'school': return '🏫';
    case 'hotel': return '🏨';
    case 'restaurant': return '🍽️';
    case 'attraction': return '🏛️';
    default: return '📍';
  }
};

// Create custom markers
const createCustomIcon = (type: string) => {
  const color = getMarkerColor(type);
  const icon = getMarkerIcon(type);
  
  return L.divIcon({
    html: `
      <div style="
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${color};
        border: 3px solid white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        cursor: pointer;
      ">
        ${icon}
      </div>
    `,
    className: 'custom-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

export default function Map() {
  const center: [number, number] = [41.5454, -8.4263]; // Braga coordinates [lat, lng]

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{
        width: '100%',
        height: '400px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <MapContainer
          center={center}
          zoom={14}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.coordinates}
              icon={createCustomIcon(location.type)}
            >
              <Popup>
                <div style={{ padding: '8px', maxWidth: '200px' }}>
                  <h3 style={{
                    margin: '0 0 8px 0',
                    color: getMarkerColor(location.type),
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}>
                    {location.name}
                  </h3>
                  <p style={{
                    margin: '0',
                    color: '#666',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}>
                    {location.description}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      {/* Map Legend */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '12px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        fontSize: '12px',
        minWidth: '150px'
      }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#002b5c', fontWeight: 'bold' }}>
          Map Legend
        </h4>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ marginRight: '8px' }}>🏫</span>
          <span>Conference Venue</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ marginRight: '8px' }}>🏨</span>
          <span>Hotels</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ marginRight: '8px' }}>🍽️</span>
          <span>Restaurants</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>🏛️</span>
          <span>Attractions</span>
        </div>
      </div>
    </div>
  );
}