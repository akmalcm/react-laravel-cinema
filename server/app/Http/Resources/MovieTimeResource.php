<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MovieTimeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'movie_id' => $this->movie_id,
            //'movie' => MovieResource::make($this->whenLoaded('movie')),
            'date' => $this->date,
            'time' => $this->time,
            //'booking' => BookingResource::make($this->whenLoaded('bookings')),
            //'booking' => BookingResource::make($this->bookings),
            'created_at' => $this->created_at->format('d/m/Y h:i:s A'),
            'updated_at' => $this->updated_at->format('d/m/Y h:i:s A')
        ];
    }
}
