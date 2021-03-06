import './App.css'
import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { Container, Grid, Header } from 'semantic-ui-react'


import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

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
        console.log(data)
      } catch(error) {
        console.error('Error fetching and parsing data', error)
      }
    }
  }

  const singleMovie = (routerProps) => {
    let movie_id = routerProps.match.params.id
    let foundMovie = data.find(movie => movie.id === parseInt(movie_id))

    if(foundMovie) {
      return <MovieDetail {...routerProps} movieObj={foundMovie} />
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
    <Container id='app-container' textAlign='center'>
      <Header as='h1' style={{padding: '1rem'}}><Link style={{color: 'black'}} to='/'>Flix-O-Mania</Link></Header>
      <br></br>
      <Grid textAlign='center'>
      <SearchForm onSearch={doSearch} />
      </Grid>
      <br></br>
      <Switch>
          <Route path='/movies' render={movieList} exact />
          <Route path='/movies/:id' render={singleMovie} />
      </Switch>
    </Container>
  )
}

export default App
