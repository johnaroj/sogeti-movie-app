import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ movies, count }) => {
    return (
        <>
            {movies.slice(0, count).map((movie) => (
                <div key={movie.imdbID} className="image-container col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="card">
                        <Link to={`/movie/${movie.imdbID}`}>
                            <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', objectFit: 'cover' }} className="card-img-top"></img>
                            <div className="overlay d-flex align-items-center justify-content-center">
                                {movie.Title}
                            </div>
                        </Link>

                    </div>

                </div>))
            }
        </>
    )
}

export default MovieList
