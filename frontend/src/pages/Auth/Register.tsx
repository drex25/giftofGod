import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
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

  const handleChange = (value: string, name?: string) => {
    const field = name || '';
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Fondo animado de burbujas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-400 opacity-30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 opacity-30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="backdrop-blur-2xl bg-white/70 dark:bg-neutral-900/70 shadow-2xl rounded-3xl px-10 py-12 border border-white/30 dark:border-neutral-800/40">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-white/40">
              <UserPlus className="h-12 w-12 text-white drop-shadow-lg" />
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-2 tracking-tight">
              ¡Crea tu cuenta!
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-base">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-500 font-semibold transition-colors underline underline-offset-2">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {errors.general && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-error-50 border border-error-200 text-error-600 px-4 py-3 rounded-xl text-center font-medium shadow"
              >
                {errors.general}
              </motion.div>
            )}
            <div className="grid grid-cols-1 gap-5">
              <Input
                label="Nombre completo"
                type="text"
                name="name"
                value={formData.name}
                onChange={value => handleChange(value, 'name')}
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
                onChange={value => handleChange(value, 'email')}
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
                onChange={value => handleChange(value, 'phone')}
                error={errors.phone}
                autoComplete="tel"
                fullWidth
                icon={Phone}
                placeholder="+1 234 567 890"
              />
              <div className="relative">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                  Dirección (opcional)
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={e => handleChange(e.target.value, 'address')}
                  rows={3}
                  className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/80 dark:bg-neutral-800/60 backdrop-blur-sm placeholder:text-neutral-400 resize-none pr-12"
                  placeholder="Tu dirección completa"
                />
                <div className="absolute right-4 top-4 text-neutral-400 pointer-events-none">
                  <MapPin className="w-5 h-5" />
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
                onChange={value => handleChange(value, 'password')}
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
                onChange={value => handleChange(value, 'password_confirmation')}
                error={errors.password_confirmation}
                required
                autoComplete="new-password"
                fullWidth
                icon={Lock}
                placeholder="Repite tu contraseña"
              />
            </div>
            <div className="flex items-start space-x-3 mt-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 dark:border-neutral-700 rounded mt-1"
              />
              <label htmlFor="terms" className="text-sm text-neutral-700 dark:text-neutral-200 font-medium">
                Acepto los{' '}
                <Link to="/terms" className="text-primary-600 hover:text-primary-500 font-semibold underline underline-offset-2">
                  términos y condiciones
                </Link>{' '}
                y la{' '}
                <Link to="/privacy" className="text-primary-600 hover:text-primary-500 font-semibold underline underline-offset-2">
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
              className="mt-2 shadow-lg hover:scale-[1.02] transition-transform"
            >
              Crear Cuenta
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;