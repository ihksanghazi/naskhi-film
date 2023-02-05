<?php

namespace App\Http\Controllers\User;

use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index(){
        $featuredMovies =  Movie::whereIsFeatured(true)->get();
        $movies = Movie::all();
        return inertia('User/Dashboard/Index',[
            'featuredMovies' => $featuredMovies,
            'movies' => $movies,
        ]);
    }
}
