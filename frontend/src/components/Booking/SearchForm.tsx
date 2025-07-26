import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Users, Search, MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SearchFormProps {
  onSearch: (data: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(formData);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getMinCheckOutDate = () => {
    if (!formData.checkIn) return '';
    const checkInDate = new Date(formData.checkIn);
    const nextDay = new Date(checkInDate);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.toISOString().split('T')[0];
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location */}
        <div className="relative">
          <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
            {t('search.location')}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder={t('search.locationPlaceholder')}
              className="input-search pl-10"
            />
          </div>
        </div>

        {/* Check-in Date */}
        <div className="relative">
          <label htmlFor="checkIn" className="block text-sm font-medium text-neutral-700 mb-2">
            {t('search.checkIn')}
          </label>
          <div className="relative">
            <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="date"
              id="checkIn"
              value={formData.checkIn}
              onChange={(e) => handleInputChange('checkIn', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="input-search pl-10"
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="relative">
          <label htmlFor="checkOut" className="block text-sm font-medium text-neutral-700 mb-2">
            {t('search.checkOut')}
          </label>
          <div className="relative">
            <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="date"
              id="checkOut"
              value={formData.checkOut}
              onChange={(e) => handleInputChange('checkOut', e.target.value)}
              min={getMinCheckOutDate()}
              disabled={!formData.checkIn}
              className={`input-search pl-10 ${!formData.checkIn ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </div>
        </div>

        {/* Guests */}
        <div className="relative">
          <label htmlFor="guests" className="block text-sm font-medium text-neutral-700 mb-2">
            {t('search.guests')}
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <select
              id="guests"
              value={formData.guests}
              onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
              className="input-search pl-10"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? t('search.guest') : t('search.guests')}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="btn btn-primary btn-lg group"
        >
          <Search className="h-5 w-5" />
          <span>{t('search.searchButton')}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap justify-center gap-3 pt-4 border-t border-neutral-200">
        <button
          type="button"
          onClick={() => {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const nextWeek = new Date(today);
            nextWeek.setDate(nextWeek.getDate() + 7);
            
            setFormData({
              ...formData,
              checkIn: today.toISOString().split('T')[0],
              checkOut: tomorrow.toISOString().split('T')[0]
            });
          }}
          className="px-4 py-2 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
        >
          {t('search.quickFilters.today')}
        </button>
        <button
          type="button"
          onClick={() => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const dayAfter = new Date(tomorrow);
            dayAfter.setDate(dayAfter.getDate() + 1);
            
            setFormData({
              ...formData,
              checkIn: tomorrow.toISOString().split('T')[0],
              checkOut: dayAfter.toISOString().split('T')[0]
            });
          }}
          className="px-4 py-2 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
        >
          {t('search.quickFilters.tomorrow')}
        </button>
        <button
          type="button"
          onClick={() => {
            const nextWeek = new Date();
            nextWeek.setDate(nextWeek.getDate() + 7);
            const weekAfter = new Date(nextWeek);
            weekAfter.setDate(weekAfter.getDate() + 7);
            
            setFormData({
              ...formData,
              checkIn: nextWeek.toISOString().split('T')[0],
              checkOut: weekAfter.toISOString().split('T')[0]
            });
          }}
          className="px-4 py-2 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
        >
          {t('search.quickFilters.nextWeek')}
        </button>
      </div>
    </motion.form>
  );
};

export default SearchForm;