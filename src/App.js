import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'

function App() {

  const [data, setData] = useState([])
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
  // results: Array(5)
  // 0:
  // external_ids: {iva_rating: null, imdb: {…}, tmdb: {…}, wiki_data: {…}, iva: {…}, …}
  // id: "5d91400f302b840050ac9d87"
  // locations: (2) [{…}, {…}]
  // name: "Clifford the Big Red Dog"
  // picture: "https://utellyassets9-1.imgix.net/api/Images/fd11d934c5c51b9e051359922cf751cb/Redirect"
  // provider: "iva"
  // weight: 9954
  // __proto__: Object
  // 1: {id: "5d992d7d302b840050536664", picture: "https://utellyassets9-1.imgix.net/api/Images/7822a22de48db7b12e490b5d0377887c/Redirect", name: "Dog the Bounty Hunter", locations: Array(2), provider: "iva", …}
  // 2: {id: "5d914084302b840050acc4a2", picture: "https://utellyassets9-1.imgix.net/api/Images/42766ab1561abcd9ff02e0d52cb38d06/Redirect", name: "Dogs 101", locations: Array(2), provider: "iva", …}
  // 3: {id: "5d91408d302b840050acd07f", picture: "https://utellyassets9-1.imgix.net/api/Images/cc89c97d957e482e9f31ac936f1c247a/Redirect", name: "Dogs of Berlin", locations: Array(1), provider: "iva", …}
  // 4: {id: "5d97daae9a76a40056de6324", picture: "https://utellyassets9-1.imgix.net/api/Images/daddbc2c1139369b7b6390bef902be5c/Redirect", name: "The Good Doctor", locations: Array(2), provider: "iva", …}
  // length: 5
  // __proto__: Array(0)
  // status_code: 200
  // term: "dog"
  // updated: "2020-11-22T05:19:33+0000"
  // variant: "ivafull"
  // __proto__: Object

  useEffect(() => {
    axios(options)
    .then(response => setData(response.data))
    .catch(error => console.log('Error fetching and parsing data', error))
  }, [options])

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
