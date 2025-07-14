import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Users, Search, Filter } from 'lucide-react';

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

  return (
    <form onSubmit={handleSubmit} className={`search-form ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location */}
        <div className="relative">
          <label className="block text-sm font-medium text-earth-700 mb-2">
            {t('home.search.location')}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-earth-400" />
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder={t('home.search.locationPlaceholder')}
              className="input-search pl-10"
            />
          </div>
        </div>

        {/* Check-in */}
        <div>
          <label className="block text-sm font-medium text-earth-700 mb-2">
            {t('home.search.checkIn')}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-earth-400" />
            <input
              type="date"
              value={formData.checkIn}
              onChange={(e) => handleInputChange('checkIn', e.target.value)}
              className="input-search pl-10"
            />
          </div>
        </div>

        {/* Check-out */}
        <div>
          <label className="block text-sm font-medium text-earth-700 mb-2">
            {t('home.search.checkOut')}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-earth-400" />
            <input
              type="date"
              value={formData.checkOut}
              onChange={(e) => handleInputChange('checkOut', e.target.value)}
              className="input-search pl-10"
            />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-sm font-medium text-earth-700 mb-2">
            {t('home.search.guests')}
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-earth-400" />
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
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="btn-primary group px-8 py-3"
        >
          <Search className="w-5 h-5 mr-2" />
          <span>{t('home.search.searchButton')}</span>
        </button>
      </div>

      {/* Tip */}
      <div className="text-center mt-4">
        <p className="text-sm text-earth-500">
          {t('home.search.tip')}
        </p>
      </div>
    </form>
  );
};

export default SearchForm;