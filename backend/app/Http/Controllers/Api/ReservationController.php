<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ReservationRequest;
use App\Models\Reservation;
use App\Models\Room;
use App\Models\RoomAvailability;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ReservationController extends Controller
{
    /**
     * Listar reservas del usuario autenticado
     */
    public function index(Request $request)
    {
        $user = $request->user();
        $reservations = $user->reservations()->with(['room', 'payments'])->get();
        
        return response()->json([
            'reservations' => $reservations
        ]);
    }

    /**
     * Crear una nueva reserva
     */
    public function store(ReservationRequest $request)
    {
        $request->validate([
            'room_id' => 'required|exists:rooms,id',
            'check_in_date' => 'required|date|after:today',
            'check_out_date' => 'required|date|after:check_in_date',
            'guests_count' => 'required|integer|min:1',
            'special_requests' => 'nullable|string',
        ]);

        $room = Room::findOrFail($request->room_id);
        
        // Verificar disponibilidad
        $isAvailable = RoomAvailability::where('room_id', $request->room_id)
            ->whereBetween('date', [$request->check_in_date, $request->check_out_date])
            ->where('is_available', false)
            ->doesntExist();

        if (!$isAvailable) {
            return response()->json([
                'message' => 'La habitación no está disponible para las fechas seleccionadas'
            ], 400);
        }

        // Calcular precio total
        $nights = \Carbon\Carbon::parse($request->check_in_date)
            ->diffInDays($request->check_out_date);
        $totalAmount = $room->base_price * $nights;

        $reservation = Reservation::create([
            'user_id' => $request->user()->id,
            'room_id' => $request->room_id,
            'check_in_date' => $request->check_in_date,
            'check_out_date' => $request->check_out_date,
            'guests_count' => $request->guests_count,
            'total_amount' => $totalAmount,
            'reservation_code' => 'RES-' . strtoupper(Str::random(8)),
            'special_requests' => $request->special_requests,
        ]);

        return response()->json([
            'reservation' => $reservation->load('room'),
            'message' => 'Reserva creada exitosamente'
        ], 201);
    }

    /**
     * Mostrar una reserva específica
     */
    public function show(string $id, Request $request)
    {
        $reservation = $request->user()->reservations()
            ->with(['room', 'payments'])
            ->findOrFail($id);
        
        return response()->json([
            'reservation' => $reservation
        ]);
    }

    /**
     * Cancelar una reserva
     */
    public function cancel(string $id, Request $request)
    {
        $reservation = $request->user()->reservations()->findOrFail($id);
        
        if ($reservation->status !== 'pending' && $reservation->status !== 'confirmed') {
            return response()->json([
                'message' => 'No se puede cancelar esta reserva'
            ], 400);
        }

        $reservation->update(['status' => 'cancelled']);

        return response()->json([
            'message' => 'Reserva cancelada exitosamente'
        ]);
    }
}
