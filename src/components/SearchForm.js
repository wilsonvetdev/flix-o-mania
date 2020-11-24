import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

const SearchForm = props => {
    const [input, setInputValue] = useState('')

    const handleChange = (event) => { 
        // Update state 
        event.persist()
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onSearch(input)
        event.currentTarget.reset()
        props.history.push('/movies')
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="search"
            onChange={handleChange}
            name="search"
            placeholder="Search for movies..."
        />
        <button type="submit" id="submit">search</button>
        </form>
    )
}

export default withRouter(SearchForm)