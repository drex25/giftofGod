import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Services from '../components/Landing/Services';
import Gallery from '../components/Landing/Gallery';
import { 
  CalendarDaysIcon,
  MapPinIcon,
  UsersIcon,
  StarIcon,
  WifiIcon,
  TruckIcon,
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
  MoonIcon,
  HomeModernIcon,
  WifiIcon as WifiIconSolid,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';
import SearchForm from '../components/Booking/SearchForm';
import ParticleBackground from '../components/UI/ParticleBackground';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [searchData, setSearchData] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleSearch = (data: any) => {
    setSearchData(data);
    console.log('Search data:', data);
  };

  const features = [
    {
      icon: MapPinIcon,
      title: t('home.features.location.title'),
      description: t('home.features.location.description'),
      color: 'primary',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShieldCheckIcon,
      title: t('home.features.security.title'),
      description: t('home.features.security.description'),
      color: 'secondary',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: SparklesIcon,
      title: t('home.features.modern.title'),
      description: t('home.features.modern.description'),
      color: 'primary',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: HeartIcon,
      title: t('home.features.service.title'),
      description: t('home.features.service.description'),
      color: 'secondary',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const amenities = [
    { icon: WifiIconSolid, name: t('home.amenities.wifi'), description: t('home.amenities.wifiDesc') },
    { icon: TruckIcon, name: t('home.amenities.parking'), description: t('home.amenities.parkingDesc') },
    { icon: TvIcon, name: t('home.amenities.tv'), description: t('home.amenities.tvDesc') },
    { icon: FireIcon, name: t('home.amenities.heating'), description: t('home.amenities.heatingDesc') },
    { icon: CameraIcon, name: t('home.amenities.security'), description: t('home.amenities.securityDesc') },
    { icon: HomeModernIcon, name: t('home.amenities.kitchen'), description: t('home.amenities.kitchenDesc') },
    { icon: SunIcon, name: t('home.amenities.terrace'), description: t('home.amenities.terraceDesc') },
    { icon: MoonIcon, name: t('home.amenities.rest'), description: t('home.amenities.restDesc') }
  ];

  const roomTypes = [
    {
      id: 1,
      name: t('home.rooms.single.name'),
      description: t('home.rooms.single.description'),
      price: t('home.rooms.single.price'),
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      features: [t('home.rooms.single.features.bed'), t('home.rooms.single.features.bath'), t('home.rooms.single.features.wifi'), t('home.rooms.single.features.desk')],
      capacity: 1,
      popular: false
    },
    {
      id: 2,
      name: t('home.rooms.double.name'),
      description: t('home.rooms.double.description'),
      price: t('home.rooms.double.price'),
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      features: [t('home.rooms.double.features.bed'), t('home.rooms.double.features.bath'), t('home.rooms.double.features.wifi'), t('home.rooms.double.features.tv')],
      capacity: 2,
      popular: true
    },
    {
      id: 3,
      name: t('home.rooms.shared.name'),
      description: t('home.rooms.shared.description'),
      price: t('home.rooms.shared.price'),
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg',
      features: [t('home.rooms.shared.features.beds'), t('home.rooms.shared.features.lockers'), t('home.rooms.shared.features.wifi'), t('home.rooms.shared.features.bath')],
      capacity: 6,
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      country: 'España',
      text: t('home.testimonials.maria'),
      rating: 5,
      avatar: 'MG',
      date: t('home.testimonials.mariaDate'),
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'John Smith',
      country: 'Estados Unidos',
      text: t('home.testimonials.john'),
      rating: 5,
      avatar: 'JS',
      date: t('home.testimonials.johnDate'),
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Carlos Rodríguez',
      country: 'México',
      text: t('home.testimonials.carlos'),
      rating: 5,
      avatar: 'CR',
      date: t('home.testimonials.carlosDate'),
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
    }
  ];

  const stats = [
    { number: '1000+', label: t('home.stats.guests'), icon: UsersIcon, color: 'from-blue-500 to-cyan-500' },
    { number: '50', label: t('home.stats.rooms'), icon: BuildingOfficeIcon, color: 'from-green-500 to-emerald-500' },
    { number: '4.9★', label: t('home.stats.rating'), icon: StarIcon, color: 'from-yellow-500 to-orange-500' },
    { number: '24/7', label: t('home.stats.support'), icon: ClockIcon, color: 'from-purple-500 to-pink-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-20 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-40 left-20 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full"
          />
        </div>

        <div className="relative container-modern text-center text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8"
            >
              <SparklesIcon className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">{t('home.hero.tagline')}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('home.hero.title')}
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl font-light mb-8 text-white/80"
            >
              {t('home.hero.subtitle')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed"
            >
              {t('home.hero.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link 
                to="/rooms" 
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                  {t('home.hero.exploreButton')}
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <button 
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="group relative px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isVideoPlaying ? <PauseIcon className="h-6 w-6" /> : <PlayIcon className="h-6 w-6" />}
                  {t('home.hero.contactButton')}
                </span>
              </button>
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

      {/* Search Section - Enhanced */}
      <section className="py-16 bg-white relative -mt-20 z-20">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('home.search.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('home.search.subtitle')}
              </p>
            </div>
            <SearchForm onSearch={handleSearch} />
          </motion.div>
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Amenities Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.amenities.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.amenities.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <amenity.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {amenity.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Room Types Section - Kept as requested */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.rooms.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.rooms.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.id}
                variants={itemVariants}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {room.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {t('home.rooms.popular')}
                    </span>
                  </div>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {room.name}
                    </h3>
                    <span className="text-2xl font-bold text-primary-600">
                      {room.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {room.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <UsersIcon className="h-5 w-5" />
                      <span>{room.capacity} {room.capacity === 1 ? t('common.person') : t('common.people')}</span>
                    </div>
                    <Link
                      to={`/rooms/${room.id}`}
                      className="btn btn-primary group"
                    >
                      {t('home.rooms.viewDetails')}
                      <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircleIcon className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{testimonial.date}</span>
                  <div className="flex items-center gap-1">
                    <GlobeAltIcon className="h-4 w-4" />
                    <span>Verified Guest</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="container-modern">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container-modern text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t('home.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/rooms" 
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                  {t('home.cta.exploreButton')}
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/contact" 
                className="group relative px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <PhoneIcon className="h-6 w-6" />
                  {t('home.cta.contactButton')}
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;