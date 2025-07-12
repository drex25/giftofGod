import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Car, Coffee, Shield } from 'lucide-react';
import SearchForm from '../components/Booking/SearchForm';
import RoomCard from '../components/Rooms/RoomCard';
import Button from '../components/UI/Button';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { Room } from '../types';
import { roomsAPI } from '../services/api';

const Home: React.FC = () => {
  const [featuredRooms, setFeaturedRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedRooms = async () => {
      try {
        const response = await roomsAPI.getAll();
        setFeaturedRooms(response.data.rooms.slice(0, 3));
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedRooms();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tu hogar lejos de casa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Descubre habitaciones cómodas y asequibles para tu próxima aventura
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir HostelBooking?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos la mejor experiencia de hospedaje con servicios de calidad y precios accesibles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ubicación Privilegiada</h3>
              <p className="text-gray-600">
                Ubicados en el corazón de la ciudad, cerca de las principales atracciones turísticas
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seguridad 24/7</h3>
              <p className="text-gray-600">
                Tu seguridad es nuestra prioridad. Contamos con vigilancia las 24 horas del día
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">WiFi Gratuito</h3>
              <p className="text-gray-600">
                Internet de alta velocidad gratuito en todas las áreas del hostel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Habitaciones Destacadas
            </h2>
            <p className="text-lg text-gray-600">
              Descubre nuestras habitaciones más populares
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {featuredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
          
          <div className="text-center">
            <Link to="/rooms">
              <Button size="lg">Ver todas las habitaciones</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros huéspedes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Excelente ubicación y muy limpio. El personal es muy amable y siempre dispuesto a ayudar."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="María García"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900">María García</p>
                  <p className="text-sm text-gray-500">España</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Perfecto para viajeros jóvenes. Ambiente muy social y precios increíbles."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                  alt="John Smith"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900">John Smith</p>
                  <p className="text-sm text-gray-500">Estados Unidos</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Las instalaciones están muy bien mantenidas y el WiFi funciona perfecto."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Sophie Martin"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900">Sophie Martin</p>
                  <p className="text-sm text-gray-500">Francia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Reserva ahora y obtén los mejores precios para tu estadía
          </p>
          <Link to="/rooms">
            <Button variant="secondary" size="lg">
              Reservar Ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;