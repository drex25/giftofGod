<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class ReservationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'room_id' => 'required|exists:rooms,id',
            'check_in_date' => 'required|date|after:today',
            'check_out_date' => 'required|date|after:check_in_date',
            'guests_count' => 'required|integer|min:1',
            'special_requests' => 'nullable|string|max:1000',
        ];
    }

    public function messages(): array
    {
        return [
            'room_id.required' => 'La habitación es requerida.',
            'room_id.exists' => 'La habitación seleccionada no existe.',
            'check_in_date.required' => 'La fecha de check-in es requerida.',
            'check_in_date.after' => 'La fecha de check-in debe ser posterior a hoy.',
            'check_out_date.required' => 'La fecha de check-out es requerida.',
            'check_out_date.after' => 'La fecha de check-out debe ser posterior a la fecha de check-in.',
            'guests_count.required' => 'La cantidad de huéspedes es requerida.',
            'guests_count.min' => 'Debe haber al menos 1 huésped.',
        ];
    }
}
