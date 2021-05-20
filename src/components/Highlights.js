import React, { useState, useEffect } from 'react'
import MovieList from './MovieList'

const Highlights = () => {
    const [movies, setMovies] = useState([])

    const searchHighlights = async () => {
        const data = await fetch(`http://omdbapi.com/?s=john wick&plot=full&apiKey=6c3a2d45`);
        const response = await data.json();
        setMovies(response.Search);
    }

    useEffect(() => {
        searchHighlights()
    }, [])

    return (
        <div className="row">
            <h1>Highlights</h1>
            <MovieList movies={movies} count={2} />
        </div>
    )
}

export default Highlights
