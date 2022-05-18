<?php

namespace App\Http\Controllers;

use App\Models\MovieTime;
use Illuminate\Http\Request;

class MovieTimeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MovieTime::select('id', 'date', 'time', 'movie_id')->with('movie')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MovieTime  $movieTime
     * @return \Illuminate\Http\Response
     */
    public function show(MovieTime $movieTime)
    {
        $movieTime->with('movie');
        $movieTime->with('bookings');
        return response()->json([
            'movie_time' => $movieTime
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MovieTime  $movieTime
     * @return \Illuminate\Http\Response
     */
    public function edit(MovieTime $movieTime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MovieTime  $movieTime
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MovieTime $movieTime)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MovieTime  $movieTime
     * @return \Illuminate\Http\Response
     */
    public function destroy(MovieTime $movieTime)
    {
        //
    }
}
