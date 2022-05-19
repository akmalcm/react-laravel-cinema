<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;
use Illuminate\Support\Str;

class AuthController extends Controller {

    private $apiToken;
    public function __construct() {
        $this->apiToken = uniqid(base64_encode(Str::random(40)));
    }
    /** 
     * 
     * @return \Illuminate\Http\Response 
     */

    public function login(Request $request) {
        //User check
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            //Setting login response 
            $success['token'] = $this->apiToken;
            $success['name'] =  $user->name;
            return response()->json([
                'status' => 'success',
                'data' => $success
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => 'Unauthorized Access'
            ]);
        }
    }
}
