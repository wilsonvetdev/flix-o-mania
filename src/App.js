import './App.css'
import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { Segment, Container, Grid } from 'semantic-ui-react'

import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'
import Movie from './components/Movie'

function App() {
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    searchMovies(query)
  }, [query])

  const doSearch = input => setQuery(input)

  const searchMovies = async(input) => {
    if(input){
      try {
        let response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
        setData(response.data.results)
      } catch(error) {
        console.error('Error fetching and parsing data', error)
      }
    }
  }


  const singleMovie = (routerProps) => {
    let movie_id = routerProps.match.params.id
    let foundMovie = data.find(movie => movie.id === parseInt(movie_id))

    if(foundMovie) {
      return <Movie {...routerProps} movieObj={foundMovie} />
    } else {
      console.log('no such movie here')
    }
  }

  const movieList = (routerProps) => {
    if(data) {
      return <MovieList routerProps={routerProps} movies={data} />
    }
  }

  return (
    <Segment>
      {/* <Grid> */}
      <h1><Link to='/'>Flix-O-Mania</Link></h1>
      <SearchForm onSearch={doSearch} />
      {/* </Grid> */}
      <Switch>
          <Route path='/movies' render={movieList} exact />
          <Route path='/movies/:id' render={singleMovie} />
      </Switch>
    </Segment>
  )
}

export default App
