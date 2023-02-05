<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=eZHsmb4ezEk',
                'thumbnail' => 'https://m.media-amazon.com/images/I/61MwEEt+NXL._AC_UF894,1000_QL80_.jpg',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=eZHsmb4ezEk',
                'thumbnail' => 'https://m.media-amazon.com/images/I/61MwEEt+NXL._AC_UF894,1000_QL80_.jpg',
                'rating' => 9.3,
                'is_featured' => 0
            ]
        ];

        Movie::insert($movies);
    }
}
