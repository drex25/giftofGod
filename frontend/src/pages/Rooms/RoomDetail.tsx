import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  Users, 
  MapPin, 
  Wifi, 
  Tv, 
  Coffee, 
  Car, 
  Shield, 
  Sun,
  Calendar,
  Clock,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

const RoomDetail: React.FC = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [selectedDates, setSelectedDates] = useState({
    checkIn: '',
    checkOut: ''
  });
  const [guests, setGuests] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock room data - replace with API call
  const room = {
    id: parseInt(id || '1'),
    name: 'Single Room',
    description: 'Perfect for solo travelers seeking comfort and privacy. This cozy room features a comfortable single bed, private bathroom, and all the amenities you need for a relaxing stay.',
    price: 25,
    originalPrice: 30,
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg'
    ],
    rating: 4.8,
    reviewCount: 124,
    capacity: 1,
    amenities: ['wifi', 'tv', 'coffee', 'security'],
    location: 'Downtown',
    popular: true,
    discount: 15,
    features: [
      'Comfortable single bed',
      'Private bathroom',
      'Free WiFi',
      'Smart TV',
      'Air conditioning',
      'Daily housekeeping',
      '24/7 front desk'
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
      pets: 'Not allowed',
      smoking: 'Not allowed'
    }
  };

  const amenitiesIcons = {
    wifi: Wifi,
    tv: Tv,
    coffee: Coffee,
    parking: Car,
    security: Shield,
    terrace: Sun
  };

  const calculateTotal = () => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) return room.price;
    const checkIn = new Date(selectedDates.checkIn);
    const checkOut = new Date(selectedDates.checkOut);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    return room.price * nights;
  };

  const handleBooking = () => {
    // Implement booking logic
    console.log('Booking:', { room, selectedDates, guests });
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container-modern py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 mb-6"
        >
          <Link to="/rooms" className="text-neutral-600 hover:text-primary-600 transition-colors">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <span className="text-neutral-400">/</span>
          <Link to="/rooms" className="text-neutral-600 hover:text-primary-600 transition-colors">
            {t('nav.rooms')}
          </Link>
          <span className="text-neutral-400">/</span>
          <span className="text-neutral-900 font-medium">{room.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                      isFavorite 
                        ? 'bg-error-500 text-white' 
                        : 'bg-white/80 text-neutral-700 hover:bg-white'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-3 rounded-full bg-white/80 text-neutral-700 hover:bg-white backdrop-blur-sm transition-all">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                {room.popular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('rooms.popular')}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Room Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg mb-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="heading-2 mb-2">{room.name}</h1>
                  <div className="flex items-center space-x-4 text-neutral-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{room.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{room.capacity} {t('rooms.guests')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{room.rating} ({room.reviewCount})</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-primary-600">${room.price}</span>
                    {room.originalPrice && (
                      <span className="text-lg text-neutral-500 line-through">${room.originalPrice}</span>
                    )}
                    <span className="text-sm text-neutral-500">/{t('common.night')}</span>
                  </div>
                  {room.discount && (
                    <span className="text-sm text-error-600 font-medium">-{room.discount}%</span>
                  )}
                </div>
              </div>

              <p className="body-lg text-neutral-700 mb-6">{room.description}</p>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="heading-5 mb-4">{t('rooms.amenities')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {room.amenities.map((amenity) => {
                    const Icon = amenitiesIcons[amenity as keyof typeof amenitiesIcons];
                    return Icon ? (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Icon className="h-5 w-5 text-primary-500" />
                        <span className="text-sm text-neutral-700">{t(`amenities.${amenity}`)}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="heading-5 mb-4">{t('rooms.features')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-500" />
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div>
                <h3 className="heading-5 mb-4">{t('rooms.policies')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-neutral-500" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{t('rooms.checkIn')}</p>
                      <p className="text-sm text-neutral-600">{room.policies.checkIn}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-neutral-500" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{t('rooms.checkOut')}</p>
                      <p className="text-sm text-neutral-600">{room.policies.checkOut}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="heading-4 mb-6">{t('rooms.bookNow')}</h3>
              
              <div className="space-y-4">
                {/* Check-in */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('booking.checkIn')}
                  </label>
                  <Input
                    type="date"
                    value={selectedDates.checkIn}
                    onChange={(value) => setSelectedDates(prev => ({ ...prev, checkIn: value }))}
                    icon={Calendar}
                    min={undefined}
                  />
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('booking.checkOut')}
                  </label>
                  <Input
                    type="date"
                    value={selectedDates.checkOut}
                    onChange={(value) => setSelectedDates(prev => ({ ...prev, checkOut: value }))}
                    icon={Calendar}
                    min={undefined}
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('booking.guests')}
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="input-modern"
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? t('search.guest') : t('search.guests')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Total */}
                <div className="border-t border-neutral-200 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-neutral-600">{t('booking.totalPrice')}</span>
                    <span className="text-xl font-bold text-primary-600">${calculateTotal()}</span>
                  </div>
                  
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleBooking}
                    disabled={!selectedDates.checkIn || !selectedDates.checkOut}
                  >
                    {t('booking.bookNow')}
                  </Button>
                </div>

                {/* Policies */}
                <div className="text-xs text-neutral-500 space-y-1">
                  <p>{room.policies.cancellation}</p>
                  <p>{room.policies.pets}</p>
                  <p>{room.policies.smoking}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;