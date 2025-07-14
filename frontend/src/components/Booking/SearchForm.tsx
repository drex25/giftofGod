import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  CalendarDaysIcon, 
  MapPinIcon, 
  UsersIcon, 
  MagnifyingGlassIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface SearchFormProps {
  onSearch?: (searchData: SearchData) => void;
  className?: string;
}

export interface SearchData {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, className = '' }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<SearchData>({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(formData);
    }
  };

  const handleInputChange = (field: keyof SearchData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Get tomorrow's date for minimum checkout
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Location */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('home.search.location')}
          </label>
          <div className="relative">
            <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder={t('home.search.locationPlaceholder')}
              className="input-search pl-10"
            />
          </div>
        </motion.div>

        {/* Check-in */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('home.search.checkIn')}
          </label>
          <div className="relative">
            <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="date"
              value={formData.checkIn}
              onChange={(e) => handleInputChange('checkIn', e.target.value)}
              min={today}
              className="input-search pl-10"
            />
          </div>
        </motion.div>

        {/* Check-out */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('home.search.checkOut')}
          </label>
          <div className="relative">
            <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="date"
              value={formData.checkOut}
              onChange={(e) => handleInputChange('checkOut', e.target.value)}
              min={formData.checkIn || tomorrowStr}
              className="input-search pl-10"
            />
          </div>
        </motion.div>

        {/* Guests */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('home.search.guests')}
          </label>
          <div className="relative">
            <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <select
              value={formData.guests}
              onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
              className="input-search pl-10"
            >
              <option value={1}>1 {t('common.person')}</option>
              <option value={2}>2 {t('common.people')}</option>
              <option value={3}>3 {t('common.people')}</option>
              <option value={4}>4 {t('common.people')}</option>
              <option value={5}>5+ {t('common.people')}</option>
            </select>
          </div>
        </motion.div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center">
        <motion.button
          type="submit"
          className="btn btn-primary btn-lg group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MagnifyingGlassIcon className="w-5 h-5" />
          <span>{t('home.search.searchButton')}</span>
          <SparklesIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        </motion.button>
      </div>

      {/* Tip */}
      <motion.div 
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-sm text-neutral-500 flex items-center justify-center space-x-2">
          <SparklesIcon className="w-4 h-4 text-primary-500" />
          <span>{t('home.search.tip')}</span>
        </p>
      </motion.div>
    </motion.form>
  );
};

export default SearchForm;