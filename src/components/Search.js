import React from 'react'

const Search = ({ searchValue, setSearchValue }) => {
    return (
        <div className="col col-sm-4">
            <input type="text" className="form-control" placeholder="Search" style={{ border: '1px solid #00000' }} onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
        </div>
    )
}

export default Search
