import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const MoviesPage = ({ match }) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false)
    const [plot, setPlot] = useState('full')
    const [more, setMore] = useState(false)

    let history = useHistory();

    const getMovieById = async (id, plot) => {
        setLoading(true)
        const data = await fetch(`https://www.omdbapi.com/?i=${id}&plot=${plot}&apikey=6c3a2d45`)
        const response = await data.json();
        setMovie(response);
        setLoading(false)
    }
    useEffect(() => {
        getMovieById(match.params.id, plot)
    }, [match, plot])

    const handleMore = (e) => {
        e.preventDefault();
        setMore(!more);
    }
    return (
        <>

            {loading ?
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                :
                movie &&
                <>
                    <div className="row">
                        <button style={{ width: 250 }} className="btn btn-primary m-3" onClick={() => history.push("/")}>Back to Search</button>
                    </div>
                    <div className="row">
                        <div className="col-sm col-lg-4">
                            <img src={movie?.Poster} alt={movie?.Title} />
                        </div>
                        <div className="col-sm col-lg-8">
                            <h5>{movie.Title}</h5>
                            <p className="card-text">Type: {movie?.Type}</p>
                            <p className="card-text">Year: {movie?.Year}</p>
                            <p className="card-text">Rated: {movie.Rated}</p>
                            <p className="card-text">Genre: {movie.Genre}</p>
                            <p className="card-text">Director: {movie.Director}</p>
                            <p className="card-text">Actors: {movie.Actors}</p>
                            {
                                movie.Plot.length > 200 && !more ?
                                    <p className="card-text">
                                        Plot{<button className="btn btn-link plot" onClick={() => {
                                            setPlot(plot === 'short' ? 'full' : 'short')
                                        }
                                        }
                                            title="click to change plot"
                                        >{plot === 'short' ? 'full' : 'short'}</button>}: {movie.Plot.slice(0, 200)}...<button onClick={handleMore} className="btn btn-link">more</button>

                                    </p> : <p className="card-text">
                                        Plot<button className="btn btn-link plot" onClick={() => {
                                            setPlot(plot === 'short' ? 'full' : 'short')
                                        }
                                        }
                                            title="click to change plot">{plot === 'short' ? 'full' : 'short'}</button>
                                       : {movie.Plot}
                                        <button onClick={handleMore} className="btn btn-link">less</button></p>
                            }

                            <p className="card-text">Awards: {movie.Awards}</p>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default MoviesPage
