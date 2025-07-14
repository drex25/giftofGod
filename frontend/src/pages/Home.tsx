import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  Building,
  TreePine,
  Mountain,
  Waves,
  Building2,
  Search,
  Clock,
  Award,
  Globe,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import Button from '../components/UI/Button';
import Card, { CardHeader, CardBody, CardFooter } from '../components/UI/Card';
import Input from '../components/UI/Input';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const amenities = [
    { icon: Wifi, name: t('home.amenities.wifi'), description: t('home.amenities.wifiDesc') },
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

  const features = [
    { icon: Award, title: t('home.features.quality.title'), description: t('home.features.quality.description') },
    { icon: Clock, title: t('home.features.service.title'), description: t('home.features.service.description') },
    { icon: Globe, title: t('home.features.location.title'), description: t('home.features.location.description') },
    { icon: Heart, title: t('home.features.comfort.title'), description: t('home.features.comfort.description') },
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>
        </div>

        <div className="relative container-modern text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-6">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium mb-4"
              >
                ✨ {t('home.hero.tagline')}
              </motion.span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading-1 mb-6"
            >
              <span className="gradient-text-warm">{t('home.hero.title')}</span>
              <br />
              <span className="text-white">{t('home.hero.subtitle')}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              {t('home.hero.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                href="/rooms"
                className="group"
              >
                {t('home.hero.exploreButton')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/register"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                {t('home.hero.bookButton')}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary-300 mr-2" />
                    <span className="text-2xl font-bold text-white">{stat.number}</span>
                  </div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-modern bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-elegant p-8 shadow-xl"
          >
            <div className="text-center mb-8">
              <h2 className="heading-3 text-neutral-900 mb-4">
                {t('home.search.title')}
              </h2>
              <p className="text-neutral-600">
                {t('home.search.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Input
                type="text"
                variant="search"
                placeholder={t('home.search.locationPlaceholder')}
                icon={MapPin}
                iconPosition="left"
              />
              <Input
                type="date"
                variant="search"
                placeholder={t('home.search.checkIn')}
                icon={Calendar}
                iconPosition="left"
              />
              <Input
                type="date"
                variant="search"
                placeholder={t('home.search.checkOut')}
                icon={Calendar}
                iconPosition="left"
              />
              <select className="input-search">
                <option>1 {t('common.person')}</option>
                <option>2 {t('common.people')}</option>
                <option>3 {t('common.people')}</option>
                <option>4+ {t('common.people')}</option>
              </select>
            </div>
            
            <div className="flex justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={Search}
                iconPosition="right"
                className="w-full md:w-auto"
              >
                {t('home.search.searchButton')}
              </Button>
            </div>

            <div className="text-center mt-4">
              <p className="text-sm text-neutral-500">
                {t('home.search.tip')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-modern bg-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-neutral-900 mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elegant" className="text-center h-full">
                  <CardBody>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                    <p className="text-neutral-600 text-sm">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-modern bg-gradient-to-br from-neutral-50 to-warm-50">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-neutral-900 mb-4">
              {t('home.amenities.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
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
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{amenity.name}</h3>
                <p className="text-neutral-600 text-sm">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="section-modern bg-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-neutral-900 mb-4">
              {t('home.roomTypes.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
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
              >
                <Card variant="hover" className="h-full">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-t-2xl flex items-center justify-center">
                    <Bed className="w-16 h-16 text-primary-500" />
                  </div>
                  <CardBody>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{room.name}</h3>
                    <p className="text-neutral-600 mb-4">{room.description}</p>
                    <div className="space-y-2 mb-6">
                      {room.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-500" />
                          <span className="text-sm text-neutral-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                  <CardFooter>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-lg font-bold text-primary-600">{room.price}</span>
                      <Button
                        variant="primary"
                        size="sm"
                        href="/rooms"
                      >
                        {t('home.roomTypes.viewDetails')}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-modern bg-gradient-to-br from-neutral-50 to-warm-50">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-neutral-900 mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
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
              >
                <Card variant="testimonial" className="h-full">
                  <CardBody>
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                        <p className="text-sm text-neutral-600">{testimonial.country}</p>
                      </div>
                      <div className="ml-auto flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-warm-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-neutral-600 italic">"{testimonial.text}"</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-modern bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="container-modern text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                href="/register"
              >
                {t('home.cta.bookNow')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                {t('home.cta.contact')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="container-modern">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Gift of God</h3>
              <p className="text-neutral-400 mb-4">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li><a href="/rooms" className="text-neutral-400 hover:text-white transition-colors">{t('nav.rooms')}</a></li>
                <li><a href="/about" className="text-neutral-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
                <li><a href="/contact" className="text-neutral-400 hover:text-white transition-colors">{t('nav.contact')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t('footer.accommodation')}</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t('footer.tours')}</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t('footer.transport')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-500" />
                  <span className="text-neutral-400">+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-500" />
                  <span className="text-neutral-400">info@giftofgod.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span className="text-neutral-400">{t('footer.address')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
            <p className="text-neutral-400">
              © 2024 Gift of God. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;