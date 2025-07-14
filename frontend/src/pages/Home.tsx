import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  CalendarDaysIcon,
  MapPinIcon,
  UsersIcon,
  StarIcon,
  WifiIcon,
  CarIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  HeartIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  CameraIcon,
  TvIcon,
  FireIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';
import SearchForm from '../components/Booking/SearchForm';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [searchData, setSearchData] = useState(null);

  const handleSearch = (data: any) => {
    setSearchData(data);
    console.log('Search data:', data);
  };

  const features = [
    {
      icon: MapPinIcon,
      title: 'Ubicación Privilegiada',
      description: 'En el corazón de la ciudad, cerca de las principales atracciones',
      color: 'primary'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Seguridad 24/7',
      description: 'Personal de seguridad y monitoreo las 24 horas del día',
      color: 'secondary'
    },
    {
      icon: SparklesIcon,
      title: 'Instalaciones Modernas',
      description: 'Equipamiento de última generación y espacios renovados',
      color: 'primary'
    },
    {
      icon: HeartIcon,
      title: 'Atención Personalizada',
      description: 'Servicio cálido y profesional para una experiencia única',
      color: 'secondary'
    }
  ];

  const amenities = [
    { icon: WifiIcon, name: 'WiFi Gratuito', description: 'Internet de alta velocidad' },
    { icon: CarIcon, name: 'Estacionamiento', description: 'Parking gratuito' },
    { icon: TvIcon, name: 'TV Cable', description: 'Canales internacionales' },
    { icon: FireIcon, name: 'Calefacción', description: 'Ambiente climatizado' },
    { icon: CameraIcon, name: 'Seguridad', description: 'Cámaras de vigilancia' },
    { icon: HomeIcon, name: 'Cocina Común', description: 'Totalmente equipada' },
    { icon: SunIcon, name: 'Terraza', description: 'Espacio al aire libre' },
    { icon: MoonIcon, name: 'Área de Descanso', description: 'Zona de relajación' }
  ];

  const roomTypes = [
    {
      id: 1,
      name: 'Habitación Individual',
      description: 'Perfecta para viajeros solos que buscan comodidad y privacidad',
      price: 'Desde $25/noche',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      features: ['Cama individual', 'Baño privado', 'WiFi gratuito', 'Escritorio'],
      capacity: 1,
      popular: false
    },
    {
      id: 2,
      name: 'Habitación Doble',
      description: 'Ideal para parejas o amigos que viajan juntos',
      price: 'Desde $35/noche',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      features: ['Cama doble', 'Baño privado', 'WiFi gratuito', 'TV'],
      capacity: 2,
      popular: true
    },
    {
      id: 3,
      name: 'Dormitorio Compartido',
      description: 'Opción económica para conocer otros viajeros',
      price: 'Desde $15/noche',
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg',
      features: ['Literas cómodas', 'Lockers', 'WiFi gratuito', 'Baño compartido'],
      capacity: 6,
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      country: 'España',
      text: 'Excelente ubicación y muy limpio. El personal fue súper amable y me ayudaron con todas mis consultas.',
      rating: 5,
      avatar: 'MG',
      date: 'Hace 2 semanas'
    },
    {
      name: 'John Smith',
      country: 'Estados Unidos',
      text: 'Great hostel! Perfect location, clean rooms and friendly staff. I would definitely stay here again.',
      rating: 5,
      avatar: 'JS',
      date: 'Hace 1 mes'
    },
    {
      name: 'Carlos Rodríguez',
      country: 'México',
      text: 'Muy buena relación calidad-precio. Las instalaciones están en excelente estado y el ambiente es genial.',
      rating: 5,
      avatar: 'CR',
      date: 'Hace 3 semanas'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Huéspedes Felices', icon: UsersIcon },
    { number: '50', label: 'Habitaciones', icon: BuildingOfficeIcon },
    { number: '4.9★', label: 'Calificación', icon: StarIcon },
    { number: '24/7', label: 'Soporte', icon: ClockIcon }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative container-modern text-center text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/30"
            >
              <BuildingOfficeIcon className="h-10 w-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-1 mb-6 text-white"
            >
              {t('home.hero.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="body-large mb-8 max-w-2xl mx-auto text-white/90"
            >
              {t('home.hero.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/rooms" className="btn btn-primary btn-lg group">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span>{t('home.hero.exploreButton')}</span>
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-600">
                <PhoneIcon className="h-5 w-5" />
                <span>Contactar</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white relative -mt-20 z-20">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8 shadow-strong">
              <div className="text-center mb-8">
                <h2 className="heading-3 mb-4">{t('home.search.title')}</h2>
                <p className="body-large text-neutral-600">{t('home.search.subtitle')}</p>
              </div>
              <SearchForm onSearch={handleSearch} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-modern">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="heading-3 mb-2">{stat.number}</h3>
                <p className="text-neutral-600 body-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">¿Por qué elegir Gift Of God?</h2>
            <p className="body-large text-neutral-600 max-w-2xl mx-auto">
              Ofrecemos una experiencia única con servicios de primera clase y atención personalizada
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover p-6 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${
                  feature.color === 'primary' 
                    ? 'from-primary-500 to-primary-600' 
                    : 'from-secondary-500 to-secondary-600'
                } rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="heading-4 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 body-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">{t('home.amenities.title')}</h2>
            <p className="body-large text-neutral-600 max-w-2xl mx-auto">
              {t('home.amenities.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover p-6 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-medium group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1 body-medium">{amenity.name}</h3>
                <p className="text-neutral-600 body-small">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-16 bg-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">{t('home.roomTypes.title')}</h2>
            <p className="body-large text-neutral-600 max-w-2xl mx-auto">
              {t('home.roomTypes.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card card-hover overflow-hidden group relative ${
                  room.popular ? 'card-featured' : ''
                }`}
              >
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-medium">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-1">
                      <UsersIcon className="h-4 w-4" />
                      <span className="text-sm">{room.capacity} {room.capacity === 1 ? 'persona' : 'personas'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="heading-4">{room.name}</h3>
                    <span className="text-primary-600 font-bold body-large">{room.price}</span>
                  </div>
                  
                  <p className="text-neutral-600 body-medium mb-4">{room.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircleIcon className="h-4 w-4 text-success-500" />
                        <span className="text-neutral-700 body-small">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/rooms/${room.id}`}
                    className="btn btn-primary w-full group"
                  >
                    <span>{t('home.roomTypes.viewDetails')}</span>
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">{t('home.testimonials.title')}</h2>
            <p className="body-large text-neutral-600 max-w-2xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover p-6 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4 shadow-medium">
                    <span className="text-white font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 body-medium">{testimonial.name}</h4>
                    <p className="text-neutral-600 body-small">{testimonial.country}</p>
                  </div>
                </div>
                
                <p className="text-neutral-700 body-medium mb-4 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-warning-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-neutral-500 body-small">{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-modern text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-4">{t('home.cta.title')}</h2>
            <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/rooms" className="btn btn-lg bg-white text-primary-600 hover:bg-neutral-100 shadow-medium">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span>{t('home.cta.bookNow')}</span>
              </Link>
              <Link to="/contact" className="btn btn-lg bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-600">
                <PhoneIcon className="h-5 w-5" />
                <span>{t('home.cta.contact')}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;