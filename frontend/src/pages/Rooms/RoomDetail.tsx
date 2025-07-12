import React, { useEffect, useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { Users, Wifi, Car, Coffee, MapPin, Star, ArrowLeft } from 'lucide-react';
import { Room } from '../../types';
import { roomsAPI } from '../../services/api';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import Button from '../../components/UI/Button';

const RoomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  const searchData = searchParams.get('check_in_date') ? {
    check_in_date: searchParams.get('check_in_date')!,
    check_out_date: searchParams.get('check_out_date')!,
    guests_count: parseInt(searchParams.get('guests_count') || '1'),
  } : null;

  useEffect(() => {
    const fetchRoom = async () => {
      if (!id) return;
      
      try {
        const response = await roomsAPI.getById(parseInt(id));
        setRoom(response.data.room);
      } catch (error) {
        console.error('Error fetching room:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Habitación no encontrada</h2>
          <Link to="/rooms">
            <Button>Volver a habitaciones</Button>
          </Link>
        </div>
      </div>
    );
  }

  const amenityIcons: { [key: string]: React.ReactNode } = {
    wifi: <Wifi className="h-5 w-5" />,
    parking: <Car className="h-5 w-5" />,
    breakfast: <Coffee className="h-5 w-5" />,
    location: <MapPin className="h-5 w-5" />,
  };

  const images = room.images && room.images.length > 0 ? room.images : [
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
  ];

  const bookingUrl = searchData 
    ? `/booking/${room.id}?${new URLSearchParams(searchData as any).toString()}`
    : `/booking/${room.id}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/rooms"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a habitaciones
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Images */}
            <div>
              <div className="mb-4">
                <img
                  src={images[selectedImage]}
                  alt={room.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-md overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-primary-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${room.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Room Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{room.name}</h1>
                  <p className="text-lg text-gray-600 capitalize">{room.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary-600">${room.base_price}</p>
                  <p className="text-sm text-gray-500">por noche</p>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <Users className="h-5 w-5 mr-2" />
                <span>Hasta {room.capacity} huéspedes</span>
              </div>

              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">(4.8) • 124 reseñas</span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h3>
                <p className="text-gray-600 leading-relaxed">{room.description}</p>
              </div>

              {room.amenities && room.amenities.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Servicios</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        {amenityIcons[amenity.toLowerCase()] || <span className="w-5 h-5 mr-2">•</span>}
                        <span className="ml-2 capitalize">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {searchData && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Detalles de tu búsqueda</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Check-in: {searchData.check_in_date}</p>
                    <p>Check-out: {searchData.check_out_date}</p>
                    <p>Huéspedes: {searchData.guests_count}</p>
                  </div>
                </div>
              )}

              <Link to={bookingUrl}>
                <Button size="lg" className="w-full">
                  {searchData ? 'Reservar Ahora' : 'Verificar Disponibilidad'}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Políticas de la habitación</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Check-in:</span>
                <span>15:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Check-out:</span>
                <span>08:00 - 11:00</span>
              </div>
              <div className="flex justify-between">
                <span>Cancelación:</span>
                <span>Gratuita hasta 24h antes</span>
              </div>
              <div className="flex justify-between">
                <span>Mascotas:</span>
                <span>No permitidas</span>
              </div>
              <div className="flex justify-between">
                <span>Fumar:</span>
                <span>No permitido</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ubicación</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mt-1 mr-2 text-primary-600" />
                <div>
                  <p className="font-medium">Centro de la ciudad</p>
                  <p>A 5 minutos caminando de la estación de metro</p>
                </div>
              </div>
              <div className="bg-gray-100 h-32 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Mapa interactivo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;