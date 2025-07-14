import React from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  MapPin,
  Users,
  CreditCard
} from 'lucide-react';

const Reservations: React.FC = () => {
  const reservations = [
    {
      id: 1,
      roomName: 'Habitación Individual',
      checkIn: '2024-01-15',
      checkOut: '2024-01-18',
      status: 'confirmed',
      total: 75.00,
      nights: 3,
      guests: 1,
      reservationCode: 'RES-ABC12345',
      paymentStatus: 'paid'
    },
    {
      id: 2,
      roomName: 'Dormitorio Compartido',
      checkIn: '2024-02-01',
      checkOut: '2024-02-05',
      status: 'pending',
      total: 60.00,
      nights: 4,
      guests: 2,
      reservationCode: 'RES-DEF67890',
      paymentStatus: 'pending'
    },
    {
      id: 3,
      roomName: 'Suite Privada',
      checkIn: '2024-03-10',
      checkOut: '2024-03-12',
      status: 'cancelled',
      total: 160.00,
      nights: 2,
      guests: 2,
      reservationCode: 'RES-GHI11111',
      paymentStatus: 'refunded'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-100 border-green-200';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'cancelled':
        return 'text-red-600 bg-red-100 border-red-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
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
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'refunded':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mis Reservas</h1>
          <p className="text-gray-600">Gestiona todas tus reservas en un solo lugar</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Todas
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Confirmadas
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Pendientes
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Canceladas
            </button>
          </div>
        </div>

        {/* Reservations List */}
        <div className="space-y-6">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{reservation.roomName}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center space-x-1 ${getStatusColor(reservation.status)}`}>
                        {getStatusIcon(reservation.status)}
                        <span className="capitalize">{reservation.status}</span>
                      </span>
                    </div>
                    <p className="text-gray-600">Código: {reservation.reservationCode}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <p className="text-2xl font-bold text-gray-900">${reservation.total}</p>
                    <p className="text-sm text-gray-600">{reservation.nights} noches</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Check-in</p>
                      <p className="text-sm text-gray-600">{reservation.checkIn}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Check-out</p>
                      <p className="text-sm text-gray-600">{reservation.checkOut}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Huéspedes</p>
                      <p className="text-sm text-gray-600">{reservation.guests}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Pago</p>
                      <p className={`text-sm font-medium ${getPaymentStatusColor(reservation.paymentStatus)}`}>
                        {reservation.paymentStatus === 'paid' ? 'Pagado' : 
                         reservation.paymentStatus === 'pending' ? 'Pendiente' : 'Reembolsado'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Ver Detalles
                  </button>
                  {reservation.status === 'pending' && (
                    <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                      Cancelar Reserva
                    </button>
                  )}
                  {reservation.status === 'confirmed' && (
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                      Descargar Comprobante
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {reservations.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No tienes reservas</h3>
            <p className="text-gray-600 mb-6">Comienza explorando nuestras habitaciones disponibles</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Ver Habitaciones Disponibles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservations; 