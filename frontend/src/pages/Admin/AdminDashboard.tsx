import React from 'react';
import { 
  Users, 
  Bed, 
  Calendar, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Clock,
  XCircle,
  Star,
  MapPin
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Reservas Totales',
      value: '156',
      change: '+12%',
      trend: 'up',
      icon: Calendar,
      color: 'blue'
    },
    {
      title: 'Ocupación Actual',
      value: '78%',
      change: '+5%',
      trend: 'up',
      icon: Bed,
      color: 'green'
    },
    {
      title: 'Ingresos del Mes',
      value: '$12,450',
      change: '+8%',
      trend: 'up',
      icon: DollarSign,
      color: 'purple'
    },
    {
      title: 'Huéspedes Activos',
      value: '24',
      change: '-2',
      trend: 'down',
      icon: Users,
      color: 'orange'
    }
  ];

  const recentReservations = [
    {
      id: 1,
      guestName: 'María González',
      roomName: 'Habitación Individual',
      checkIn: '2024-01-15',
      checkOut: '2024-01-18',
      status: 'confirmed',
      total: 75.00
    },
    {
      id: 2,
      guestName: 'Carlos Rodríguez',
      roomName: 'Dormitorio Compartido',
      checkIn: '2024-01-16',
      checkOut: '2024-01-20',
      status: 'pending',
      total: 80.00
    },
    {
      id: 3,
      guestName: 'Ana Martínez',
      roomName: 'Suite Privada',
      checkIn: '2024-01-17',
      checkOut: '2024-01-19',
      status: 'confirmed',
      total: 160.00
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
          <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
          <p className="text-gray-600">Gestiona tu hostel desde un solo lugar</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                    <IconComponent className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-600 ml-1">vs mes anterior</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Reservations */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Reservas Recientes</h2>
              <p className="text-gray-600">Últimas reservas realizadas</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentReservations.map((reservation) => (
                  <div key={reservation.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{reservation.guestName}</h3>
                      <p className="text-sm text-gray-600">{reservation.roomName}</p>
                      <p className="text-xs text-gray-500">
                        {reservation.checkIn} - {reservation.checkOut}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${reservation.total}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(reservation.status)}`}>
                        {getStatusIcon(reservation.status)}
                        <span className="capitalize">{reservation.status}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Ver Todas las Reservas
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Acciones Rápidas</h2>
              <p className="text-gray-600">Gestiona tu hostel</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Bed className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Gestionar Habitaciones</h3>
                      <p className="text-sm text-gray-600">Agregar o editar habitaciones</p>
                    </div>
                  </div>
                </button>

                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Ver Reservas</h3>
                      <p className="text-sm text-gray-600">Gestionar todas las reservas</p>
                    </div>
                  </div>
                </button>

                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Gestionar Usuarios</h3>
                      <p className="text-sm text-gray-600">Administrar usuarios del sistema</p>
                    </div>
                  </div>
                </button>

                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <DollarSign className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Reportes</h3>
                      <p className="text-sm text-gray-600">Ver reportes financieros</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Calificación Promedio</h3>
                <p className="text-2xl font-bold text-gray-900">4.8/5</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Basado en 127 reseñas</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Habitaciones Disponibles</h3>
                <p className="text-2xl font-bold text-gray-900">8/12</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">67% de ocupación</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Próximas Llegadas</h3>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Hoy y mañana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 