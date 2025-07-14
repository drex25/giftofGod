import React, { useEffect, useState } from 'react';
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
  Cpu,
  Database,
  Terminal,
  Code,
  Rocket,
  Eye,
  Brain,
  Atom
} from 'lucide-react';
import ParticleBackground from '../components/UI/ParticleBackground';
import AnimatedGradient from '../components/UI/AnimatedGradient';
import ShimmerButton from '../components/UI/ShimmerButton';

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    { icon: Wifi, name: 'Neural WiFi', description: 'Quantum-speed connection', color: 'neon-cyan' },
    { icon: Coffee, name: 'Energy Pods', description: 'Molecular gastronomy', color: 'neon-pink' },
    { icon: Bed, name: 'Sleep Chambers', description: 'Zero-gravity comfort', color: 'neon-purple' },
    { icon: Utensils, name: 'Food Synthesizer', description: 'AI-powered nutrition', color: 'neon-green' },
    { icon: Car, name: 'Hover Parking', description: 'Anti-gravity zones', color: 'neon-yellow' },
    { icon: WashingMachine, name: 'Nano Cleaning', description: 'Molecular purification', color: 'neon-orange' },
    { icon: Tv, name: 'Holographic Display', description: '8K neural interface', color: 'neon-cyan' },
    { icon: Building, name: 'Quantum Security', description: 'Biometric encryption', color: 'neon-pink' },
  ];

  const roomTypes = [
    {
      name: 'Cyber Pod',
      description: 'Single neural interface chamber',
      price: 'From ¥25/night',
      image: '/images/room-single.jpg',
      features: ['Neural bed', 'Holographic bathroom', 'Quantum WiFi', 'Energy breakfast'],
      color: 'neon-cyan'
    },
    {
      name: 'Dual Matrix',
      description: 'Synchronized reality for two',
      price: 'From ¥35/night',
      image: '/images/room-double.jpg',
      features: ['Twin neural beds', 'Shared holospace', 'Quantum WiFi', 'Energy breakfast'],
      color: 'neon-pink'
    },
    {
      name: 'Family Nexus',
      description: 'Multi-dimensional family space',
      price: 'From ¥50/night',
      image: '/images/room-family.jpg',
      features: ['4 neural beds', 'Family holospace', 'Quantum WiFi', 'Energy breakfast'],
      color: 'neon-purple'
    },
  ];

  const testimonials = [
    {
      name: 'Aria-7',
      country: 'Neo Tokyo',
      text: 'The neural interface was mind-blowing. Best sleep I\'ve had in the metaverse.',
      rating: 5,
      avatar: '🤖',
      color: 'neon-cyan'
    },
    {
      name: 'Zyx-Prime',
      country: 'Cyber City',
      text: 'Quantum amenities exceeded all expectations. Will definitely jack in again.',
      rating: 5,
      avatar: '👾',
      color: 'neon-pink'
    },
    {
      name: 'Nova-X',
      country: 'Digital Realm',
      text: 'The holographic breakfast was incredible. Felt like I was in the future.',
      rating: 5,
      avatar: '🚀',
      color: 'neon-purple'
    }
  ];

  const stats = [
    { number: '∞', label: 'Digital Guests', icon: Users, color: 'neon-cyan' },
    { number: '42', label: 'Dimensions', icon: MapPin, color: 'neon-pink' },
    { number: '9.9★', label: 'Neural Rating', icon: Star, color: 'neon-purple' },
    { number: '24/7', label: 'Quantum Support', icon: Shield, color: 'neon-green' }
  ];

  const features = [
    { 
      icon: Brain, 
      title: 'Neural Interface', 
      description: 'Direct mind-machine connection for ultimate comfort',
      color: 'neon-cyan'
    },
    { 
      icon: Atom, 
      title: 'Quantum Service', 
      description: 'Instantaneous response across all dimensions',
      color: 'neon-pink'
    },
    { 
      icon: Rocket, 
      title: 'Cosmic Location', 
      description: 'Centrally located in the digital multiverse',
      color: 'neon-purple'
    },
    { 
      icon: Eye, 
      title: 'Augmented Reality', 
      description: 'Enhanced reality experiences in every room',
      color: 'neon-green'
    },
  ];

  return (
    <div className="min-h-screen neural-bg relative overflow-hidden">
      {/* Cursor personalizado */}
      <div 
        className="custom-cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* Fondo de partículas */}
      <ParticleBackground />

      {/* Línea de escaneo */}
      <div className="scan-line" />

      {/* Fondo Matrix */}
      <div className="matrix-bg" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedGradient className="absolute inset-0" />
        
        <div className="relative container mx-auto px-4 text-center z-10">
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
                className="inline-block px-6 py-3 glass-primary border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-mono mb-4 animate-pulse-neon"
              >
                <Terminal className="inline w-4 h-4 mr-2" />
                SYSTEM.ONLINE.READY
              </motion.span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl lg:text-8xl font-cyber font-bold mb-6"
            >
              <span className="hologram-text">CYBER</span>
              <br />
              <span className="neon-text">HOSTEL</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto font-mono"
            >
              <Code className="inline w-5 h-5 mr-2 text-neon-cyan" />
              Experience the future of hospitality in our quantum-enhanced reality
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <ShimmerButton className="group">
                <Rocket className="w-5 h-5 mr-2" />
                INITIALIZE.EXPERIENCE
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </ShimmerButton>
              <button className="glass-primary px-8 py-4 rounded-xl border border-neon-pink/30 text-neon-pink hover:bg-neon-pink/10 transition-all duration-300 font-mono font-bold">
                <Database className="w-5 h-5 mr-2 inline" />
                ACCESS.MATRIX
              </button>
            </motion.div>

            {/* Stats Futuristas */}
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
                  className="hologram-card p-4 text-center hover-levitate"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className={`w-6 h-6 text-${stat.color} mr-2`} />
                    <span className={`text-2xl font-bold text-${stat.color} font-cyber`}>{stat.number}</span>
                  </div>
                  <p className="text-gray-300 text-sm font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search Section Cuántica */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hologram-card p-8 max-w-4xl mx-auto hover-glow"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-cyber font-bold neon-text mb-4">
                <Search className="inline w-8 h-8 mr-3" />
                QUANTUM.SEARCH.PROTOCOL
              </h2>
              <p className="text-gray-300 font-mono">
                Initialize your neural booking sequence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <input
                type="text"
                placeholder="DESTINATION.COORDINATES"
                className="quantum-input"
              />
              <input
                type="date"
                placeholder="ENTRY.TIMESTAMP"
                className="quantum-input"
              />
              <input
                type="date"
                placeholder="EXIT.TIMESTAMP"
                className="quantum-input"
              />
              <select className="quantum-input">
                <option>1 NEURAL.USER</option>
                <option>2 NEURAL.USERS</option>
                <option>3 NEURAL.USERS</option>
                <option>4+ NEURAL.USERS</option>
              </select>
            </div>
            
            <div className="flex justify-center">
              <ShimmerButton className="w-full md:w-auto">
                <Zap className="w-5 h-5 mr-2" />
                EXECUTE.SEARCH.PROTOCOL
                <Terminal className="w-5 h-5 ml-2" />
              </ShimmerButton>
            </div>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-400 font-mono">
                <Sparkles className="inline w-4 h-4 mr-1" />
                TIP: Book in advance for quantum discounts
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-cyber font-bold hologram-text mb-4">
              NEURAL.FEATURES.ARRAY
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Experience next-generation hospitality technology
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
                className="hologram-card p-6 text-center hover-levitate data-stream"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color} to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4 animate-quantum`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-cyber font-bold text-${feature.color} mb-2`}>{feature.title}</h3>
                <p className="text-gray-300 text-sm font-mono">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-cyber font-bold neon-text mb-4">
              QUANTUM.AMENITIES.MATRIX
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Advanced technology for the ultimate experience
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
                className="text-center group hover-morph"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${amenity.color} to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-rotate-3d transition-all duration-300`}>
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-cyber font-bold text-${amenity.color} mb-2`}>{amenity.name}</h3>
                <p className="text-gray-300 text-sm font-mono">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-cyber font-bold hologram-text mb-4">
              NEURAL.CHAMBERS.CATALOG
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Choose your digital reality experience
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
                className="hologram-card hover-levitate"
              >
                <div className={`h-48 bg-gradient-to-br from-${room.color}/20 to-neon-purple/20 rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                  <Bed className={`w-16 h-16 text-${room.color} animate-float`} />
                  <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-cyber font-bold text-${room.color} mb-2`}>{room.name}</h3>
                  <p className="text-gray-300 mb-4 font-mono text-sm">{room.description}</p>
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`w-4 h-4 text-${room.color}`} />
                        <span className="text-sm text-gray-300 font-mono">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-lg font-cyber font-bold text-${room.color}`}>{room.price}</span>
                    <ShimmerButton variant="cyber">
                      <Eye className="w-4 h-4 mr-2" />
                      ACCESS.DATA
                    </ShimmerButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-cyber font-bold neon-text mb-4">
              USER.FEEDBACK.LOGS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Neural testimonials from satisfied users
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
                className="hologram-card p-6 hover-glow"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className={`font-cyber font-bold text-${testimonial.color}`}>{testimonial.name}</h4>
                    <p className="text-sm text-gray-400 font-mono">{testimonial.country}</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 text-${testimonial.color} fill-current`} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 italic font-mono text-sm">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <AnimatedGradient className="absolute inset-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-cyber font-bold hologram-text mb-4">
              READY.TO.JACK.IN?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-mono">
              Join the neural network and experience the future of hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShimmerButton>
                <Rocket className="w-5 h-5 mr-2" />
                INITIALIZE.BOOKING
                <ArrowRight className="w-5 h-5 ml-2" />
              </ShimmerButton>
              <button className="glass-primary px-8 py-4 rounded-xl border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 font-mono font-bold">
                <Terminal className="w-5 h-5 mr-2 inline" />
                CONTACT.ADMIN
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;