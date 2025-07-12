<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RoomAvailability extends Model
{
    use HasFactory;

    protected $fillable = [
        'room_id',
        'date',
        'is_available',
        'price',
    ];

    protected $casts = [
        'date' => 'date',
        'is_available' => 'boolean',
        'price' => 'decimal:2',
    ];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function scopeAvailable($query)
    {
        return $query->where('is_available', true);
    }
}
