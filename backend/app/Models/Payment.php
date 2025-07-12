<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'reservation_id',
        'payment_method',
        'status',
        'amount',
        'payment_reference',
        'payment_data',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'payment_data' => 'array',
    ];

    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}
