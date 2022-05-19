<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request) {
        return [
            'id' => $this->id,
            'movie_time_id' => $this->movie_time_id,
            'movie_time' => MovieTimeResource::make($this->whenLoaded('movie_time')),
            'IC' => $this->IC,
            'full_name' => $this->full_name,
            'phone_no' => $this->phone_no,
            'total' => $this->total,
            'quantity' => $this->quantity,
            'created_at' => $this->created_at->format('d/m/Y h:i:s A'),
            'updated_at' => $this->updated_at->format('d/m/Y h:i:s A')
        ];
    }
}
