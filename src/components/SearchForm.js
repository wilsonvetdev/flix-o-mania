import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'

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

    const goToResults = (event) => {
        props.history.push('/movies')
    } 

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Input type="search"
            onChange={handleChange}
            name="search"
            placeholder="Search for movies..."
        />
        <Button onClick={goToResults} type="submit" id="submit">search</Button>
        </Form>
    )
}

export default withRouter(SearchForm)