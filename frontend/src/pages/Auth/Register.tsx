import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import { User, Mail, Lock, Phone, MapPin, UserPlus } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await register(formData);
      navigate('/dashboard');
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: error.response?.data?.message || 'Error al registrarse' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card variant="elegant" className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <UserPlus className="h-8 w-8 text-white" />
            </div>
            <h2 className="heading-3 text-neutral-900 mb-2">
              Crear Cuenta
            </h2>
            <p className="text-neutral-600 body-medium">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-500 font-medium transition-colors">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {errors.general && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-error-50 border border-error-200 text-error-600 px-4 py-3 rounded-xl body-medium"
              >
                {errors.general}
              </motion.div>
            )}
            
            <div className="space-y-4">
              <Input
                label="Nombre completo"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                autoComplete="name"
                fullWidth
                icon={User}
                placeholder="Ingresa tu nombre completo"
              />
              
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                autoComplete="email"
                fullWidth
                icon={Mail}
                placeholder="tu@email.com"
              />
              
              <Input
                label="Teléfono (opcional)"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                autoComplete="tel"
                fullWidth
                icon={Phone}
                placeholder="+1 234 567 890"
              />
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Dirección (opcional)
                </label>
                <div className="relative">
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/80 backdrop-blur-sm placeholder:text-neutral-400 resize-none"
                    placeholder="Tu dirección completa"
                  />
                  <div className="absolute left-4 top-4 text-neutral-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="pl-12"></div>
                </div>
                {errors.address && (
                  <p className="mt-2 text-sm text-error-600">{errors.address}</p>
                )}
              </div>
              
              <Input
                label="Contraseña"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                required
                autoComplete="new-password"
                fullWidth
                icon={Lock}
                placeholder="Mínimo 8 caracteres"
              />
              
              <Input
                label="Confirmar contraseña"
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                error={errors.password_confirmation}
                required
                autoComplete="new-password"
                fullWidth
                icon={Lock}
                placeholder="Repite tu contraseña"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded mt-1"
              />
              <label htmlFor="terms" className="text-sm text-neutral-700 body-medium">
                Acepto los{' '}
                <Link to="/terms" className="text-primary-600 hover:text-primary-500 font-medium">
                  términos y condiciones
                </Link>{' '}
                y la{' '}
                <Link to="/privacy" className="text-primary-600 hover:text-primary-500 font-medium">
                  política de privacidad
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              fullWidth
              icon={UserPlus}
            >
              Crear Cuenta
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;