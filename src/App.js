import './App.css'
import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'
import Movie from './components/Movie'

function App() {
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
  const [data, setData] = useState({})
  const [query, setQuery] = useState('')

  const doSearch = input => setQuery(input)

  const searchMovies = async(query) => {
    if(query){
      try {
        let response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
        console.log(response.data.results)
      } catch(error) {
        console.error('Error fetching and parsing data', error)
      }
      // .then(response => console.log(response))
      // .catch(error => console.error('Error fetching and parsing data', error))
    }
  }

  useEffect(() => {
    searchMovies(query)
  }, [searchMovies])

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
