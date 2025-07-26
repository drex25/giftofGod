import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  MapPin, 
  Users, 
  Star,
  X
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import RoomCard from '../../components/Rooms/RoomCard';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

const RoomsList: React.FC = () => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    roomType: '',
    priceRange: '',
    capacity: '',
    amenities: [] as string[]
  });

  // Mock data - replace with API call
  const rooms = [
    {
      id: 1,
      name: 'Single Room',
      description: 'Perfect for solo travelers seeking comfort and privacy',
      price: 25,
      originalPrice: 30,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      rating: 4.8,
      reviewCount: 124,
      capacity: 1,
      amenities: ['wifi', 'tv', 'coffee'],
      location: 'Downtown',
      popular: true,
      discount: 15
    },
    {
      id: 2,
      name: 'Double Room',
      description: 'Ideal for couples or friends traveling together',
      price: 35,
      originalPrice: 40,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      rating: 4.9,
      reviewCount: 89,
      capacity: 2,
      amenities: ['wifi', 'tv', 'coffee', 'parking'],
      location: 'Downtown',
      popular: false
    },
    {
      id: 3,
      name: 'Shared Dormitory',
      description: 'Economical option to meet other travelers',
      price: 15,
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg',
      rating: 4.6,
      reviewCount: 203,
      capacity: 6,
      amenities: ['wifi', 'security'],
      location: 'Downtown',
      popular: false
    }
  ];

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = !selectedFilters.roomType || room.name.includes(selectedFilters.roomType);
    const matchesCapacity = !selectedFilters.capacity || room.capacity >= parseInt(selectedFilters.capacity);
    
    return matchesSearch && matchesType && matchesCapacity;
  });

  const clearFilters = () => {
    setSelectedFilters({
      roomType: '',
      priceRange: '',
      capacity: '',
      amenities: []
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container-modern py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="heading-2 mb-4">{t('rooms.title')}</h1>
          <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </motion.div>

        {/* Search and Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 w-full lg:w-auto">
              <Input
                type="search"
                placeholder={t('rooms.searchPlaceholder')}
                value={searchTerm}
                onChange={setSearchTerm}
                icon={Search}
                fullWidth
              />
            </div>

            {/* Filters Button */}
            <Button
              variant="outline"
              icon={Filter}
              onClick={() => setShowFilters(!showFilters)}
              className="whitespace-nowrap"
            >
              {t('rooms.filters.title')}
            </Button>

            {/* View Mode Toggle */}
            <div className="flex bg-neutral-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'list' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-neutral-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Room Type */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('rooms.filters.roomType')}
                  </label>
                  <select
                    value={selectedFilters.roomType}
                    onChange={(e) => setSelectedFilters(prev => ({ ...prev, roomType: e.target.value }))}
                    className="input-modern"
                  >
                    <option value="">{t('rooms.filters.allTypes')}</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Shared">Shared</option>
                  </select>
                </div>

                {/* Capacity */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('rooms.filters.capacity')}
                  </label>
                  <select
                    value={selectedFilters.capacity}
                    onChange={(e) => setSelectedFilters(prev => ({ ...prev, capacity: e.target.value }))}
                    className="input-modern"
                  >
                    <option value="">{t('rooms.filters.anyCapacity')}</option>
                    <option value="1">1 {t('rooms.filters.person')}</option>
                    <option value="2">2 {t('rooms.filters.people')}</option>
                    <option value="3">3+ {t('rooms.filters.people')}</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('rooms.filters.priceRange')}
                  </label>
                  <select
                    value={selectedFilters.priceRange}
                    onChange={(e) => setSelectedFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                    className="input-modern"
                  >
                    <option value="">{t('rooms.filters.anyPrice')}</option>
                    <option value="0-20">$0 - $20</option>
                    <option value="20-40">$20 - $40</option>
                    <option value="40+">$40+</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <Button
                    variant="ghost"
                    icon={X}
                    onClick={clearFilters}
                    className="w-full"
                  >
                    {t('rooms.clearFilters')}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-neutral-600">
            {filteredRooms.length} {t('rooms.availableRooms')}
          </p>
        </div>

        {/* Rooms Grid/List */}
        {filteredRooms.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }
          >
            {filteredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <RoomCard room={room} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-neutral-400" />
            </div>
            <h3 className="heading-4 mb-2">{t('rooms.noRooms')}</h3>
            <p className="text-neutral-600 mb-6">{t('rooms.noRoomsDesc')}</p>
            <Button
              variant="outline"
              onClick={clearFilters}
            >
              {t('rooms.clearFilters')}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RoomsList;