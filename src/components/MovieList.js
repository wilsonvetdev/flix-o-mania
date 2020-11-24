import React from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'

const MovieList = props => {
    // adult: false
    // backdrop_path: "/q5uZqd324Tug2xWxL72j18ZzK2Z.jpg"
    // genre_ids: (3) [35, 16, 12]
    // id: 315064
    // original_language: "en"
    // original_title: "Animal Crackers"
    // overview: "A family must use a magical box of Animal Crackers to save a rundown circus from being taken over by their evil uncle Horatio P. Huntington."
    // popularity: 22.285
    // poster_path: "/dxFqZiO5MqqVoFZuWOjTdjmDh6d.jpg"
    // release_date: "2017-06-12"
    // title: "Animal Crackers"
    // video: false
    // vote_average: 6.4
    // vote_count: 99
    
    let movies;
    if(props.movies) {
        movies = props.movies.map(movie => {
            console.log(movie)
            return (
                <div key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <Movie movieObj={movie} />
                    </Link>
                </div>
            )
        })
    } else {
        console.log('no movies here yet')
        // movies = <NoMovies />
    }


    return (
        <div>
            <h1>Movies Container</h1>
            <ul>
                { movies }
            </ul>
        </div>
    )
}

export default MovieList

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