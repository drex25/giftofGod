import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  User, 
  Calendar, 
  MapPin, 
  CreditCard,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const mockReservations = [
    {
      id: 1,
      roomName: 'Habitación Individual',
      checkIn: '2024-01-15',
      checkOut: '2024-01-18',
      status: 'confirmed',
      total: 75.00,
      nights: 3
    },
    {
      id: 2,
      roomName: 'Dormitorio Compartido',
      checkIn: '2024-02-01',
      checkOut: '2024-02-05',
      status: 'pending',
      total: 60.00,
      nights: 4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mi Cuenta</h1>
          <p className="text-gray-600">Bienvenido de vuelta, {user?.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{user?.name}</h2>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Miembro desde 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">3 reservas completadas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Método de pago guardado</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Editar Perfil
                </button>
              </div>
            </div>
          </div>

          {/* Reservations */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Mis Reservas</h2>
                <p className="text-gray-600">Historial de tus reservas recientes</p>
              </div>
              
              <div className="p-6">
                {mockReservations.length > 0 ? (
                  <div className="space-y-4">
                    {mockReservations.map((reservation) => (
                      <div key={reservation.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{reservation.roomName}</h3>
                            <p className="text-sm text-gray-600">
                              {reservation.checkIn} - {reservation.checkOut} ({reservation.nights} noches)
                            </p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(reservation.status)}`}>
                            {getStatusIcon(reservation.status)}
                            <span className="capitalize">{reservation.status}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold text-gray-900">
                            ${reservation.total}
                          </span>
                          <div className="space-x-2">
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                              Ver Detalles
                            </button>
                            {reservation.status === 'pending' && (
                              <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                                Cancelar
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No tienes reservas</h3>
                    <p className="text-gray-600 mb-4">Comienza explorando nuestras habitaciones disponibles</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Ver Habitaciones
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 