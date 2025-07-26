import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Star, 
  Wifi, 
  Tv, 
  Coffee, 
  Car, 
  Shield, 
  Sun,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RoomCardProps {
  room: {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviewCount: number;
    capacity: number;
    amenities: string[];
    location: string;
    popular?: boolean;
    discount?: number;
  };
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const { t } = useTranslation();

  const amenitiesIcons = {
    wifi: Wifi,
    tv: Tv,
    coffee: Coffee,
    parking: Car,
    security: Shield,
    terrace: Sun
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="card card-hover overflow-hidden group"
    >
      {/* Popular Badge */}
      {room.popular && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            {t('rooms.popular')}
          </span>
        </div>
      )}

      {/* Discount Badge */}
      {room.discount && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-error-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            -{room.discount}%
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Rating */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-neutral-900">{room.rating}</span>
          <span className="text-xs text-neutral-600">({room.reviewCount})</span>
        </div>

        {/* Capacity */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-neutral-600" />
            <span className="text-sm font-medium text-neutral-900">{room.capacity}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center space-x-2 mb-3">
          <MapPin className="h-4 w-4 text-neutral-500" />
          <span className="text-sm text-neutral-600">{room.location}</span>
        </div>

        {/* Title and Description */}
        <h3 className="heading-5 mb-2 group-hover:text-primary-600 transition-colors">
          {room.name}
        </h3>
        <p className="body-sm text-neutral-600 mb-4 line-clamp-2">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 4).map((amenity, index) => {
            const Icon = amenitiesIcons[amenity as keyof typeof amenitiesIcons];
            return Icon ? (
              <div
                key={index}
                className="flex items-center space-x-1 bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs"
              >
                <Icon className="h-3 w-3" />
                <span>{t(`amenities.${amenity}`)}</span>
              </div>
            ) : null;
          })}
          {room.amenities.length > 4 && (
            <span className="text-xs text-neutral-500">
              +{room.amenities.length - 4} {t('amenities.more')}
            </span>
          )}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-bold text-primary-600">
              ${room.price}
            </span>
            {room.originalPrice && room.originalPrice > room.price && (
              <span className="text-sm text-neutral-500 line-through">
                ${room.originalPrice}
              </span>
            )}
            <span className="text-sm text-neutral-500">/{t('common.night')}</span>
          </div>
          
          <Link
            to={`/rooms/${room.id}`}
            className="btn btn-primary btn-sm group/btn"
          >
            <span>{t('rooms.viewDetails')}</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;