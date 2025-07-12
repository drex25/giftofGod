import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CreditCard, User, MapPin, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Reservation } from '../../types';
import { reservationsAPI } from '../../services/api';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import Button from '../../components/UI/Button';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await reservationsAPI.getAll();
        setReservations(response.data.reservations);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      case 'completed':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmada';
      case 'pending':
        return 'Pendiente';
      case 'cancelled':
        return 'Cancelada';
      case 'completed':
        return 'Completada';
      default:
        return status;
    }
  };

  const handleCancelReservation = async (reservationId: number) => {
    if (!window.confirm('¿Estás seguro de que quieres cancelar esta reserva?')) {
      return;
    }

    try {
      await reservationsAPI.cancel(reservationId);
      setReservations(prev =>
        prev.map(reservation =>
          reservation.id === reservationId
            ? { ...reservation, status: 'cancelled' as const }
            : reservation
        )
      );
    } catch (error) {
      console.error('Error cancelling reservation:', error);
      alert('Error al cancelar la reserva. Inténtalo de nuevo.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mi Dashboard</h1>
          <p className="text-gray-600">Bienvenido de vuelta, {user?.name}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-primary-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Reservas</p>
                <p className="text-2xl font-bold text-gray-900">{reservations.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Confirmadas</p>
                <p className="text-2xl font-bold text-gray-900">
                  {reservations.filter(r => r.status === 'confirmed').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Pendientes</p>
                <p className="text-2xl font-bold text-gray-900">
                  {reservations.filter(r => r.status === 'pending').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reservations List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Mis Reservas</h2>
              <Link to="/rooms">
                <Button>Nueva Reserva</Button>
              </Link>
            </div>
          </div>

          {reservations.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No tienes reservas aún
              </h3>
              <p className="text-gray-600 mb-4">
                ¡Explora nuestras habitaciones y haz tu primera reserva!
              </p>
              <Link to="/rooms">
                <Button>Explorar Habitaciones</Button>
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {reservations.map((reservation) => (
                <div key={reservation.id} className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 mr-3">
                          {reservation.room?.name}
                        </h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(reservation.status)}`}>
                          {getStatusIcon(reservation.status)}
                          <span className="ml-1">{getStatusText(reservation.status)}</span>
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>
                            {format(new Date(reservation.check_in_date), 'dd MMM', { locale: es })} - {' '}
                            {format(new Date(reservation.check_out_date), 'dd MMM yyyy', { locale: es })}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          <span>{reservation.guests_count} huéspedes</span>
                        </div>
                        <div className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2" />
                          <span>${reservation.total_amount}</span>
                        </div>
                      </div>
                      
                      <div className="mt-2 text-sm text-gray-500">
                        Código: {reservation.reservation_code}
                      </div>
                      
                      {reservation.special_requests && (
                        <div className="mt-2 text-sm text-gray-600">
                          <strong>Solicitudes especiales:</strong> {reservation.special_requests}
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col sm:flex-row gap-2">
                      <Link to={`/reservations/${reservation.id}`}>
                        <Button variant="outline" size="sm">
                          Ver Detalles
                        </Button>
                      </Link>
                      {(reservation.status === 'pending' || reservation.status === 'confirmed') && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleCancelReservation(reservation.id)}
                          className="text-red-600 border-red-300 hover:bg-red-50"
                        >
                          Cancelar
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;