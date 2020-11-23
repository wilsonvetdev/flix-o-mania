import './App.css'
import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'
import Movie from './components/Movie'

function App() {

  const [data, setData] = useState({})
  const [query, setQuery] = useState('')

  const doSearch = input => setQuery(input)

  const searchMovies = query => {
      axios.get('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup', {
        params: {term: query},
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_MOVIE_API_KEY,
          'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        }
      })
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching and parsing data', error))
  }

  useEffect(() => {
    searchMovies(query)
  }, [query])

  const singleMovie = (routerProps) => {
    let movie_id = routerProps.match.params.id
    let foundMovie = data.results.find(movie => movie.id === movie_id)

    if(foundMovie) {
      return <Movie {...routerProps} movieObj={foundMovie} />
    } else {
      console.log('no such movie here')
    }
  }

  const movieList = () => {
    if(data) {
      return <MovieList data={data} />
    }
  }

  return (
    <div className="App">
      <h1><Link to='/'>Flix-O-Mania</Link></h1>
      <SearchForm onSearch={doSearch} />
      <Switch>
          <Route path='/movies' render={movieList} exact />
          <Route path='/movies/:id' render={singleMovie} />
      </Switch>
    </div>
  )
}

export default App
