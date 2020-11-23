import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'

function App() {

  const [data, setData] = useState({})
  const [query, setQuery] = useState('')

  const doSearch = input => setQuery(input)

  const options = {
    method: 'GET',
    url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
    params: {term: query},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_MOVIE_API_KEY,
      'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
    }
  }

  useEffect(() => {
    axios.request(options) 
    .then(response => setData(response.data))
    .catch(error => console.log('Error fetching and parsing data', error))
  }, [query])

  return (
    <div className="App">
      <h1>Flix-O-Mania</h1>
      <SearchForm onSearch={doSearch} />

      <div>
        <MovieList data={data} />
      </div>
    </div>
  )
}

export default App
