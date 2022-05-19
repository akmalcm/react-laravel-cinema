<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'poster' => $this->poster,
            'length' => $this->length,
            'genre' => $this->genre,
            'price' => $this->price,
            'mpaa_rating' => $this->mpaa_rating,
            // 'movie_time'=> MovieTimeResource::collection($this->whenLoaded('movie_times')),
            'movie_times'=> MovieTimeResource::collection($this->movie_times),
            'created_at' => $this->created_at->format('d/m/Y h:i:s A'),
            'updated_at' => $this->updated_at->format('d/m/Y h:i:s A')
        ];
    }
}
