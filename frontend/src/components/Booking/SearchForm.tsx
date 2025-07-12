import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Users } from 'lucide-react';
import { format, addDays } from 'date-fns';
import Button from '../UI/Button';
import Input from '../UI/Input';

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    check_in_date: format(new Date(), 'yyyy-MM-dd'),
    check_out_date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
    guests_count: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchData as any);
    navigate(`/search?${params.toString()}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: name === 'guests_count' ? parseInt(value) : value,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Encuentra tu habitación perfecta
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="inline h-4 w-4 mr-1" />
              Check-in
            </label>
            <Input
              type="date"
              name="check_in_date"
              value={searchData.check_in_date}
              onChange={handleChange}
              min={format(new Date(), 'yyyy-MM-dd')}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="inline h-4 w-4 mr-1" />
              Check-out
            </label>
            <Input
              type="date"
              name="check_out_date"
              value={searchData.check_out_date}
              onChange={handleChange}
              min={searchData.check_in_date}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Users className="inline h-4 w-4 mr-1" />
              Huéspedes
            </label>
            <select
              name="guests_count"
              value={searchData.guests_count}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'huésped' : 'huéspedes'}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <Button type="submit" size="lg" className="w-full">
          <Search className="h-5 w-5 mr-2" />
          Buscar Habitaciones
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;