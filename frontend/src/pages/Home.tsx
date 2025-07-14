import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Search,
  Clock,
  Award,
  Globe,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Zap,
  Building2,
  Database,
  Terminal,
  Code,
  Rocket,
  Eye,
  Brain,
  Atom,
  Hotel,
  Droplets,
  Heart as SpaIcon,
  UtensilsCrossed,
  Dumbbell,
  Car as ParkingIcon,
  Wifi as WifiIcon,
  CreditCard,
  Bell,
  Camera
} from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Home: React.FC = () => {
  const amenities = [
    { icon: WifiIcon, name: 'WiFi Gratuito', description: 'Conexión de alta velocidad', color: 'primary' },
    { icon: Droplets, name: 'Piscina', description: 'Piscina climatizada', color: 'secondary' },
    { icon: SpaIcon, name: 'Spa & Wellness', description: 'Tratamientos relajantes', color: 'primary' },
    { icon: UtensilsCrossed, name: 'Restaurante', description: 'Gastronomía local', color: 'secondary' },
    { icon: Dumbbell, name: 'Gimnasio', description: 'Equipos modernos', color: 'primary' },
    { icon: ParkingIcon, name: 'Estacionamiento', description: 'Estacionamiento gratuito', color: 'secondary' },
    { icon: Tv, name: 'TV Smart', description: 'Entretenimiento premium', color: 'primary' },
    { icon: Building2, name: 'Seguridad 24/7', description: 'Monitoreo continuo', color: 'secondary' },
  ];

  const roomTypes = [
    {
      name: 'Habitación Individual',
      description: 'Ideal para viajeros solos',
      price: 'Desde $50/noche',
      image: '/images/room-single.jpg',
      features: ['Cama individual', 'Baño privado', 'WiFi gratuito', 'Desayuno incluido'],
      color: 'primary'
    },
    {
      name: 'Habitación Doble',
      description: 'Perfecta para parejas',
      price: 'Desde $75/noche',
      image: '/images/room-double.jpg',
      features: ['Cama doble', 'Baño privado', 'WiFi gratuito', 'Desayuno incluido'],
      color: 'secondary'
    },
    {
      name: 'Suite Familiar',
      description: 'Espaciosa para familias',
      price: 'Desde $120/noche',
      image: '/images/room-family.jpg',
      features: ['2 habitaciones', 'Sala de estar', 'WiFi gratuito', 'Desayuno incluido'],
      color: 'primary'
    },
  ];

  const testimonials = [
    {
      name: 'María González',
      country: 'Madrid, España',
      text: 'Excelente servicio y habitaciones muy limpias. El personal fue muy amable.',
      rating: 5,
      avatar: 'MG',
      color: 'primary'
    },
    {
      name: 'John Smith',
      country: 'New York, USA',
      text: 'Perfect location and great amenities. Will definitely stay here again.',
      rating: 5,
      avatar: 'JS',
      color: 'secondary'
    },
    {
      name: 'Carlos Rodríguez',
      country: 'Buenos Aires, Argentina',
      text: 'Muy buena experiencia. Las instalaciones son modernas y cómodas.',
      rating: 5,
      avatar: 'CR',
      color: 'primary'
    }
  ];

  const stats = [
    { number: '500+', label: 'Huéspedes Felices', icon: Users, color: 'primary' },
    { number: '50', label: 'Habitaciones', icon: Building, color: 'secondary' },
    { number: '4.9★', label: 'Calificación', icon: Star, color: 'primary' },
    { number: '24/7', label: 'Soporte', icon: Shield, color: 'secondary' }
  ];

  const features = [
    { 
      icon: Hotel, 
      title: 'Ubicación Privilegiada', 
      description: 'En el corazón de la ciudad, cerca de todo',
      color: 'primary'
    },
    { 
      icon: Award, 
      title: 'Servicio Premium', 
      description: 'Atención personalizada y profesional',
      color: 'secondary'
    },
    { 
      icon: Sparkles, 
      title: 'Instalaciones Modernas', 
      description: 'Equipamiento de última generación',
      color: 'primary'
    },
    { 
      icon: Heart, 
      title: 'Experiencia Única', 
      description: 'Cada estadía es memorable',
      color: 'secondary'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
        
        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-neutral-900"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
            >
              <Hotel className="h-12 w-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-1 mb-6 gradient-text"
            >
              Gift of God
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="body-large text-neutral-600 mb-8 max-w-2xl mx-auto"
            >
              Descubre el lujo y la comodidad en nuestro exclusivo hotel. 
              Ofrecemos experiencias únicas y servicios de primera clase para hacer de tu estadía algo inolvidable.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" href="/rooms" icon={Search}>
                Ver Habitaciones
              </Button>
              <Button variant="secondary" size="lg" href="/contact" icon={Phone}>
                Contactar
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
                <div className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-500 to-${stat.color === 'primary' ? 'secondary' : 'primary'}-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="heading-3 text-neutral-900 mb-2">{stat.number}</h3>
                <p className="text-neutral-600 body-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">¿Por qué elegirnos?</h2>
            <p className="body-large text-neutral-600 max-w-2xl mx-auto">
              Ofrecemos una experiencia hotelera excepcional con servicios de primera clase
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
              >
                <Card variant="hover" className="text-center p-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color === 'primary' ? 'secondary' : 'primary'}-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="heading-4 mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 body-medium">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Nuestras Amenidades</h2>
            <p className="body-large text-neutral-600 max-w-2xl mx-auto">
              Disfruta de servicios y comodidades de primera clase durante tu estadía
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
              >
                <Card variant="default" className="text-center p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${amenity.color}-500 to-${amenity.color === 'primary' ? 'secondary' : 'primary'}-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <amenity.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{amenity.name}</h3>
                  <p className="text-sm text-neutral-600">{amenity.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Lo que dicen nuestros huéspedes</h2>
            <p className="body-large text-neutral-600 max-w-2xl mx-auto">
              Experiencias reales de nuestros clientes satisfechos
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
              >
                <Card variant="testimonial" className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${testimonial.color}-500 to-${testimonial.color === 'primary' ? 'secondary' : 'primary'}-500 rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-white font-semibold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-600">{testimonial.country}</p>
                    </div>
                  </div>
                  <p className="text-neutral-700 body-medium mb-4">{testimonial.text}</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-warning-500 fill-current" />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-4">¿Listo para tu próxima aventura?</h2>
            <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
              Reserva ahora y disfruta de una experiencia hotelera excepcional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" href="/rooms" variant="secondary" icon={Search}>
                Ver Habitaciones
              </Button>
              <Button size="lg" href="/register" variant="ghost" className="text-white border-white hover:bg-white hover:text-primary-600" icon={Building}>
                Registrarse
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;