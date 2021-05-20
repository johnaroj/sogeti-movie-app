import React, { useState, useEffect } from 'react'
import Highlights from '../components/Highlights'
import MovieList from '../components/MovieList'
import Search from '../components/Search'

const SearchPage = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('');

    const searchMovies = async (search) => {
        const data = await fetch(`https://omdbapi.com/?s=${search}&apiKey=6c3a2d45`);
        const response = await data.json();
        setMovies(response.Search);
    }

    useEffect(() => {
        searchMovies(search);
    }, [search])

    return (
        <>
            <div className="row d-flex align-items-center mt-4 mb-4">
                <Search searchValue={search} setSearchValue={setSearch} />
            </div>
            <div className="row">
                {
                    movies ?
                        <MovieList movies={movies} count={5} />
                        :
                        <Highlights />
                }
            </div>
        </>
    );
}

export default SearchPage
