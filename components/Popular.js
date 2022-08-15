import React from 'react';
import MovieCard from './MovieCard';

function Popular({ movies }) {
    return (
        <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
            <h1 className="text-white text-2xl mt-8 mb-5">What's Popular</h1>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Popular;
