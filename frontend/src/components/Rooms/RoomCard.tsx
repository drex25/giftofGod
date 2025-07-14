import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  MapPin, 
  Users, 
  Star, 
  Wifi, 
  Coffee, 
  Car, 
  Bed,
  ArrowRight,
  Heart
} from 'lucide-react';

interface RoomCardProps {
  room: {
    id: number;
    name: string;
    description: string;
    price: number;
    capacity: number;
    room_type: string;
    amenities: string[];
    rating: number;
    image: string;
    location: string;
  };
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const { t } = useTranslation();

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'breakfast':
        return <Coffee className="w-4 h-4" />;
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'bed':
        return <Bed className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="card card-hover group">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-t-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
        <div className="absolute top-4 right-4">
          <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300">
            <Heart className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < room.rating ? 'text-warm-500 fill-current' : 'text-earth-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-earth-800 mb-2">{room.name}</h3>
            <div className="flex items-center text-earth-600 text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {room.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-600">${room.price}</div>
            <div className="text-sm text-earth-500">{t('rooms.card.perNight')}</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-earth-600 mb-4 line-clamp-2">{room.description}</p>

        {/* Capacity */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-earth-500" />
            <span className="text-sm text-earth-600">
              {t('rooms.card.capacity', { count: room.capacity })}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Bed className="w-4 h-4 text-earth-500" />
            <span className="text-sm text-earth-600 capitalize">{room.room_type}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <p className="text-sm font-medium text-earth-700 mb-2">
            {t('rooms.card.includedAmenities')}
          </p>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 4).map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 px-2 py-1 bg-earth-50 rounded-lg text-xs text-earth-600"
              >
                {getAmenityIcon(amenity)}
                <span>{amenity}</span>
              </div>
            ))}
            {room.amenities.length > 4 && (
              <div className="flex items-center space-x-1 px-2 py-1 bg-primary-50 rounded-lg text-xs text-primary-600">
                <span>+{room.amenities.length - 4}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/rooms/${room.id}`}
          className="btn-primary w-full group"
        >
          <span>{t('rooms.card.viewDetails')}</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;