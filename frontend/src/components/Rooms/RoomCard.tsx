import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Wifi, Car, Coffee, MapPin } from 'lucide-react';
import { Room } from '../../types';
import Button from '../UI/Button';

interface RoomCardProps {
  room: Room;
  searchParams?: {
    check_in_date: string;
    check_out_date: string;
    guests_count: number;
  };
}

const RoomCard: React.FC<RoomCardProps> = ({ room, searchParams }) => {
  const amenityIcons: { [key: string]: React.ReactNode } = {
    wifi: <Wifi className="h-4 w-4" />,
    parking: <Car className="h-4 w-4" />,
    breakfast: <Coffee className="h-4 w-4" />,
    location: <MapPin className="h-4 w-4" />,
  };

  const bookingUrl = searchParams 
    ? `/booking/${room.id}?${new URLSearchParams(searchParams as any).toString()}`
    : `/rooms/${room.id}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={room.images?.[0] || 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-sm font-medium">
          ${room.base_price}/noche
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{room.name}</h3>
          <span className="text-sm text-gray-500 capitalize">{room.type}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{room.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Users className="h-4 w-4 mr-1" />
          <span>Hasta {room.capacity} huéspedes</span>
        </div>
        
        {room.amenities && room.amenities.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {room.amenities.slice(0, 4).map((amenity, index) => (
              <div key={index} className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {amenityIcons[amenity.toLowerCase()] || <span className="w-4 h-4 mr-1">•</span>}
                <span className="capitalize">{amenity}</span>
              </div>
            ))}
            {room.amenities.length > 4 && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                +{room.amenities.length - 4} más
              </span>
            )}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <Link
            to={`/rooms/${room.id}`}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Ver detalles
          </Link>
          <Link to={bookingUrl}>
            <Button size="sm">
              {searchParams ? 'Reservar' : 'Ver disponibilidad'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;