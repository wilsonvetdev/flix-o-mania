import React from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'
import NoMovies from './NoMovies'

const MovieList = props => {
    let movies;
    if(props.movies.length) {
        movies = props.movies.map(movie => {
            return (
                <Grid.Column key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <Movie {...props.routerProps} movieObj={movie} />
                    </Link>
                    <br></br>
                </Grid.Column>
            )
        })
    } 
    
    return (
        <Segment inverted>
        {
            props.movies.length ?
            <Grid container>
            <h1>Movies Found</h1>
                <Grid.Row columns={4}>
                    { movies }
                </Grid.Row>
            </Grid>
            :
            <NoMovies />
        }
        </Segment>
    )
}

export default MovieList
