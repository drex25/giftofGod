<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Room;
use App\Models\RoomAvailability;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rooms = Room::active()->with('availabilities')->get();
        
        return response()->json([
            'rooms' => $rooms
        ]);
    }

    /**
     * Check availability for rooms
     */
    public function checkAvailability(Request $request)
    {
        $request->validate([
            'check_in_date' => 'required|date|after:today',
            'check_out_date' => 'required|date|after:check_in_date',
            'guests_count' => 'required|integer|min:1',
        ]);

        $checkIn = $request->check_in_date;
        $checkOut = $request->check_out_date;
        $guestsCount = $request->guests_count;

        $availableRooms = Room::active()
            ->where('capacity', '>=', $guestsCount)
            ->whereDoesntHave('availabilities', function ($query) use ($checkIn, $checkOut) {
                $query->whereBetween('date', [$checkIn, $checkOut])
                      ->where('is_available', false);
            })
            ->with(['availabilities' => function ($query) use ($checkIn, $checkOut) {
                $query->whereBetween('date', [$checkIn, $checkOut]);
            }])
            ->get();

        return response()->json([
            'available_rooms' => $availableRooms,
            'check_in_date' => $checkIn,
            'check_out_date' => $checkOut,
            'guests_count' => $guestsCount,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $room = Room::with('availabilities')->findOrFail($id);
        
        return response()->json([
            'room' => $room
        ]);
    }
}
