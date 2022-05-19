<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Resources\BookingResource;
use Illuminate\Support\Facades\Validator;

class BookingController extends BaseController {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $booking = Booking::with('movie_time')->get();
        foreach($booking as $book){
            $book->movie = Movie::with('movie_times')->firstWhere('id',$book->movie_time->movie_id);
        }
        return $this->sendResponse($booking , 'Bookings retrieved succesfully.');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'movie_time_id' => 'required|integer',
            'IC' => 'required|regex:/^[0-9]{12}$/',
            'full_name' => 'required',
            'phone_no' => 'required|regex:/^01[0-9]{1}[0-9]{7,8}$/',
            'total' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $booking = Booking::create($request->post());
        $success['id'] =  $booking->id;

        return $this->sendResponse($success, 'Booking inserted successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $booking) {
        if (is_null($booking)) {
            return $this->sendError('Booking not found.');
        }

        return $this->sendResponse(new BookingResource($booking), 'Booking retrieved successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Booking $booking) {
        $input = $request->all();

        $validator = Validator::make($input, [
            'movie_time_id' => 'required|integer',
            'IC' => 'required|regex:/^[0-9]{12}$/',
            'full_name' => 'required',
            'phone_no' => 'required|regex:/^01[0-9]{1}[0-9]{7,8}$/',
            'total' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $booking->movie_time_id = $input['movie_time_id'];
        $booking->IC = $input['IC'];
        $booking->full_name = $input['full_name'];
        $booking->phone_no = $input['phone_no'];
        $booking->total = $input['total'];
        $booking->save();

        return $this->sendResponse(new BookingResource($booking), 'Booking updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking) {
        $booking->delete();
   
        return $this->sendResponse([], 'Booking deleted successfully.');
    }
}
