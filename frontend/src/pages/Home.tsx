import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Wifi, 
  MapPin, 
  Users, 
  Star, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Shield,
  Heart,
  Sparkles,
  Coffee,
  Bed,
  Utensils,
  Car,
  WashingMachine,
  Tv,
  Wifi as WifiIcon,
  Building,
  TreePine,
  Mountain,
  Waves,
  Building2
} from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const amenities = [
    { icon: WifiIcon, name: t('home.amenities.wifi'), description: t('home.amenities.wifiDesc') },
    { icon: Coffee, name: t('home.amenities.breakfast'), description: t('home.amenities.breakfastDesc') },
    { icon: Bed, name: t('home.amenities.beds'), description: t('home.amenities.bedsDesc') },
    { icon: Utensils, name: t('home.amenities.kitchen'), description: t('home.amenities.kitchenDesc') },
    { icon: Car, name: t('home.amenities.parking'), description: t('home.amenities.parkingDesc') },
    { icon: WashingMachine, name: t('home.amenities.laundry'), description: t('home.amenities.laundryDesc') },
    { icon: Tv, name: t('home.amenities.tv'), description: t('home.amenities.tvDesc') },
    { icon: Building, name: t('home.amenities.security'), description: t('home.amenities.securityDesc') },
  ];

  const roomTypes = [
    {
      name: t('home.roomTypes.single.name'),
      description: t('home.roomTypes.single.description'),
      price: t('home.roomTypes.single.price'),
      image: '/images/room-single.jpg',
      features: t('home.roomTypes.single.features', { returnObjects: true }) as string[]
    },
    {
      name: t('home.roomTypes.double.name'),
      description: t('home.roomTypes.double.description'),
      price: t('home.roomTypes.double.price'),
      image: '/images/room-double.jpg',
      features: t('home.roomTypes.double.features', { returnObjects: true }) as string[]
    },
    {
      name: t('home.roomTypes.family.name'),
      description: t('home.roomTypes.family.description'),
      price: t('home.roomTypes.family.price'),
      image: '/images/room-family.jpg',
      features: t('home.roomTypes.family.features', { returnObjects: true }) as string[]
    },
  ];

  const testimonials = [
    {
      name: t('home.testimonials.maria.name'),
      country: t('home.testimonials.maria.country'),
      text: t('home.testimonials.maria.text'),
      rating: 5,
      avatar: '👩‍🦰'
    },
    {
      name: t('home.testimonials.carlos.name'),
      country: t('home.testimonials.carlos.country'),
      text: t('home.testimonials.carlos.text'),
      rating: 5,
      avatar: '👨‍🦱'
    },
    {
      name: t('home.testimonials.ana.name'),
      country: t('home.testimonials.ana.country'),
      text: t('home.testimonials.ana.text'),
      rating: 5,
      avatar: '👩‍🦳'
    }
  ];

  const stats = [
    { number: '500+', label: t('home.stats.happyGuests'), icon: Users },
    { number: '50+', label: t('home.stats.destinations'), icon: MapPin },
    { number: '4.9★', label: t('home.stats.rating'), icon: Star },
    { number: '24/7', label: t('home.stats.support'), icon: Shield }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-4">
                ✨ {t('home.hero.tagline')}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text-warm">{t('home.hero.title')}</span>
              <br />
              <span className="text-white">{t('home.hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('home.hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/rooms"
                className="btn-primary group"
              >
                <span>{t('home.hero.exploreButton')}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/register"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
              >
                {t('home.hero.bookButton')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary-300 mr-2" />
                    <span className="text-2xl font-bold text-white">{stat.number}</span>
                  </div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-8 shadow-elegant"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-earth-800 mb-4">
                {t('home.search.title')}
              </h2>
              <p className="text-earth-600">
                {t('home.search.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  {t('home.search.location')}
                </label>
                <input
                  type="text"
                  className="input-search"
                  placeholder={t('home.search.locationPlaceholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  {t('home.search.checkIn')}
                </label>
                <input
                  type="date"
                  className="input-search"
                  placeholder={t('home.search.checkIn')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  {t('home.search.checkOut')}
                </label>
                <input
                  type="date"
                  className="input-search"
                  placeholder={t('home.search.checkOut')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  {t('home.search.guests')}
                </label>
                <select className="input-search">
                  <option>1 {t('common.person')}</option>
                  <option>2 {t('common.people')}</option>
                  <option>3 {t('common.people')}</option>
                  <option>4+ {t('common.people')}</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <button className="btn-primary w-full md:w-auto px-8 group">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{t('home.search.searchButton')}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="text-sm text-earth-500">
                {t('home.search.tip')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-earth-800 mb-4">
              {t('home.amenities.title')}
            </h2>
            <p className="text-xl text-earth-600 max-w-3xl mx-auto">
              {t('home.amenities.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-warm">
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-earth-800 mb-2">{amenity.name}</h3>
                <p className="text-earth-600 text-sm">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20 bg-gradient-to-br from-earth-50 to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-earth-800 mb-4">
              {t('home.roomTypes.title')}
            </h2>
            <p className="text-xl text-earth-600 max-w-3xl mx-auto">
              {t('home.roomTypes.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-t-2xl flex items-center justify-center">
                  <Bed className="w-16 h-16 text-primary-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-earth-800 mb-2">{room.name}</h3>
                  <p className="text-earth-600 mb-4">{room.description}</p>
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-earth-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">{room.price}</span>
                    <Link
                      to="/rooms"
                      className="btn-primary text-sm"
                    >
                      {t('home.roomTypes.viewDetails')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-earth-800 mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-earth-600 max-w-3xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-earth-800">{testimonial.name}</h4>
                    <p className="text-sm text-earth-600">{testimonial.country}</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-warm-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-earth-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="btn-secondary group"
              >
                <span>{t('home.cta.bookNow')}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
              >
                {t('home.cta.contact')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;