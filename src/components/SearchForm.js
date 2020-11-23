import React, { useState } from 'react';

function SearchForm(props) {
    const [input, setInputValue] = useState('')

    const handleChange = (e) => { 
        // Update state 
        e.persist()
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSearch(input)
        e.currentTarget.reset()
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search"
            onChange={handleChange}
            name="search"
            placeholder="Search..."
        />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        </form>
    )
}

export default SearchForm