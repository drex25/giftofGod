import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import RoomCard from '../../components/Rooms/RoomCard';
import SearchForm from '../../components/Booking/SearchForm';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import Button from '../../components/UI/Button';
import { Room, BookingSearchParams } from '../../types';
import { roomsAPI } from '../../services/api';

const RoomsList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    capacity: '',
  });

  const searchData: BookingSearchParams | undefined = searchParams.get('check_in_date') ? {
    check_in_date: searchParams.get('check_in_date')!,
    check_out_date: searchParams.get('check_out_date')!,
    guests_count: parseInt(searchParams.get('guests_count') || '1'),
  } : undefined;

  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);
      try {
        let response;
        if (searchData) {
          console.log('Fetching available rooms with search data:', searchData);
          response = await roomsAPI.checkAvailability(searchData);
          console.log('Available rooms response:', response.data);
          setRooms(response.data.available_rooms);
        } else {
          console.log('Fetching all rooms');
          response = await roomsAPI.getAll();
          console.log('All rooms response:', response.data);
          setRooms(response.data.rooms);
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [searchParams]);

  const filteredRooms = rooms.filter(room => {
    if (filters.type && room.type !== filters.type) return false;
    if (filters.minPrice && room.base_price < parseFloat(filters.minPrice)) return false;
    if (filters.maxPrice && room.base_price > parseFloat(filters.maxPrice)) return false;
    if (filters.capacity && room.capacity < parseInt(filters.capacity)) return false;
    return true;
  });

  const roomTypes = Array.from(new Set(rooms.map(room => room.type)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SearchForm />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
              
              <div className={`space-y-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de habitación
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Todos los tipos</option>
                    {roomTypes.map(type => (
                      <option key={type} value={type} className="capitalize">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Precio por noche
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Mín"
                      value={filters.minPrice}
                      onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                    <input
                      type="number"
                      placeholder="Máx"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Capacidad mínima
                  </label>
                  <select
                    value={filters.capacity}
                    onChange={(e) => setFilters(prev => ({ ...prev, capacity: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Cualquier capacidad</option>
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>
                        {num}+ personas
                      </option>
                    ))}
                  </select>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilters({ type: '', minPrice: '', maxPrice: '', capacity: '' })}
                  className="w-full"
                >
                  Limpiar filtros
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {searchData ? 'Habitaciones Disponibles' : 'Todas las Habitaciones'}
                </h1>
                <p className="text-gray-600">
                  {loading ? 'Cargando...' : `${filteredRooms.length} habitaciones encontradas`}
                </p>
                {searchData && (
                  <p className="text-sm text-gray-500 mt-1">
                    {searchData.check_in_date} - {searchData.check_out_date} • {searchData.guests_count} huéspedes
                  </p>
                )}
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="lg" />
              </div>
            ) : filteredRooms.length === 0 ? (
              <div className="text-center py-12">
                <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No se encontraron habitaciones
                </h3>
                <p className="text-gray-600">
                  Intenta ajustar tus filtros o fechas de búsqueda
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    searchParams={searchData}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsList;