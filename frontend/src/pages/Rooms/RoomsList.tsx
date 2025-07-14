import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Filter, 
  Search, 
  MapPin, 
  Users, 
  DollarSign,
  X,
  Bed,
  Star,
  Heart
} from 'lucide-react';
import RoomCard from '../../components/Rooms/RoomCard';
import SearchForm from '../../components/Booking/SearchForm';

interface Room {
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
}

const RoomsList: React.FC = () => {
  const { t } = useTranslation();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    roomType: '',
    minPrice: '',
    maxPrice: '',
    minCapacity: '',
  });

  // Mock data - replace with API call
  useEffect(() => {
    const mockRooms: Room[] = [
      {
        id: 1,
        name: 'Habitación Individual Premium',
        description: 'Habitación individual con todas las comodidades para viajeros solos.',
        price: 25,
        capacity: 1,
        room_type: 'single',
        amenities: ['WiFi', 'Breakfast', 'TV', 'Private Bathroom'],
        rating: 4.8,
        image: '/images/room-1.jpg',
        location: 'Centro de la ciudad'
      },
      {
        id: 2,
        name: 'Habitación Doble Deluxe',
        description: 'Habitación doble perfecta para parejas o amigos.',
        price: 35,
        capacity: 2,
        room_type: 'double',
        amenities: ['WiFi', 'Breakfast', 'TV', 'Private Bathroom', 'Balcony'],
        rating: 4.9,
        image: '/images/room-2.jpg',
        location: 'Centro de la ciudad'
      },
      {
        id: 3,
        name: 'Habitación Familiar Espaciosa',
        description: 'Habitación familiar con espacio para toda la familia.',
        price: 50,
        capacity: 4,
        room_type: 'family',
        amenities: ['WiFi', 'Breakfast', 'TV', 'Private Bathroom', 'Kitchen', 'Parking'],
        rating: 4.7,
        image: '/images/room-3.jpg',
        location: 'Centro de la ciudad'
      },
      {
        id: 4,
        name: 'Habitación Triple Comfort',
        description: 'Habitación triple ideal para grupos pequeños.',
        price: 45,
        capacity: 3,
        room_type: 'triple',
        amenities: ['WiFi', 'Breakfast', 'TV', 'Private Bathroom'],
        rating: 4.6,
        image: '/images/room-4.jpg',
        location: 'Centro de la ciudad'
      }
    ];

    setTimeout(() => {
      setRooms(mockRooms);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (searchData: any) => {
    console.log('Search data:', searchData);
    // Implement search logic
  };

  const handleFilterChange = (filter: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filter]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      roomType: '',
      minPrice: '',
      maxPrice: '',
      minCapacity: '',
    });
  };

  const filteredRooms = rooms.filter(room => {
    if (filters.roomType && room.room_type !== filters.roomType) return false;
    if (filters.minPrice && room.price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && room.price > parseInt(filters.maxPrice)) return false;
    if (filters.minCapacity && room.capacity < parseInt(filters.minCapacity)) return false;
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-earth-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 to-warm-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              {t('rooms.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('rooms.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="card p-6 sticky top-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-earth-800 flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    {t('rooms.filters.title')}
                  </h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {t('rooms.clearFilters')}
                  </button>
                </div>

                {/* Room Type Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-earth-700 mb-3">
                    {t('rooms.filters.roomType')}
                  </label>
                  <select
                    value={filters.roomType}
                    onChange={(e) => handleFilterChange('roomType', e.target.value)}
                    className="input-search"
                  >
                    <option value="">{t('rooms.filters.allTypes')}</option>
                    <option value="single">{t('rooms.filters.single')}</option>
                    <option value="double">{t('rooms.filters.double')}</option>
                    <option value="triple">{t('rooms.filters.triple')}</option>
                    <option value="family">{t('rooms.filters.family')}</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-earth-700 mb-3">
                    {t('rooms.filters.minPrice')}
                  </label>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-earth-500" />
                    <input
                      type="number"
                      value={filters.minPrice}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                      placeholder="0"
                      className="input-search"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-earth-700 mb-3">
                    {t('rooms.filters.maxPrice')}
                  </label>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-earth-500" />
                    <input
                      type="number"
                      value={filters.maxPrice}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                      placeholder="1000"
                      className="input-search"
                    />
                  </div>
                </div>

                {/* Capacity */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-earth-700 mb-3">
                    {t('rooms.filters.minCapacity')}
                  </label>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-earth-500" />
                    <select
                      value={filters.minCapacity}
                      onChange={(e) => handleFilterChange('minCapacity', e.target.value)}
                      className="input-search"
                    >
                      <option value="">{t('rooms.filters.anyCapacity')}</option>
                      <option value="1">1 {t('rooms.filters.person')}</option>
                      <option value="2">2 {t('rooms.filters.people')}</option>
                      <option value="3">3 {t('rooms.filters.people')}</option>
                      <option value="4">4+ {t('rooms.filters.people')}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:w-3/4">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-earth-800">
                    {t('rooms.availableRooms')}
                  </h2>
                  <p className="text-earth-600">
                    {filteredRooms.length} {filteredRooms.length === 1 ? 'habitación' : 'habitaciones'} encontradas
                  </p>
                </div>
              </div>

              {/* Rooms Grid */}
              {filteredRooms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredRooms.map((room, index) => (
                    <motion.div
                      key={room.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <RoomCard room={room} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Bed className="w-16 h-16 text-earth-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-earth-800 mb-2">
                    {t('rooms.noRooms')}
                  </h3>
                  <p className="text-earth-600 mb-6">
                    {t('rooms.noRoomsDesc')}
                  </p>
                  <button
                    onClick={clearFilters}
                    className="btn-primary"
                  >
                    {t('rooms.clearFilters')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsList;