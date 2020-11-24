import React from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'
import { Segment, Container, Grid } from 'semantic-ui-react'

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
            console.log(props)
            return (
                <div key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <Movie {...props.routerProps} movieObj={movie} />
                    </Link>
                </div>
            )
        })
    } else {
        console.log('no movies here yet')
        // movies = <NoMovies />
    }


    return (
        <Segment>
            <h1>Movies Found</h1>
            <div>
                { movies }
            </div>
        </Segment>
    )
}

export default MovieList
