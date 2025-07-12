<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'description',
        'capacity',
        'base_price',
        'images',
        'amenities',
        'is_active',
    ];

    protected $casts = [
        'images' => 'array',
        'amenities' => 'array',
        'is_active' => 'boolean',
        'base_price' => 'decimal:2',
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }

    public function availabilities()
    {
        return $this->hasMany(RoomAvailability::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
