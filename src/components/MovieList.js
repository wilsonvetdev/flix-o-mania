import React, { useState, useEffect } from 'react'
import Movie from './Movie'
import axios from 'axios'
import defaultImg from '../defaultImg.png'
import { Link } from 'react-router-dom'
import { Segment, Container, Grid, Card, Image, Icon } from 'semantic-ui-react'

const MovieList = props => {

    let movies;
    if(props.movies) {
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
    } else {
        console.log('no movies here yet')
        // movies = <NoMovies />
    }


    return (
        <Segment inverted>
            <h1>Movies Found</h1>
            <Grid container>
                <Grid.Row columns={4}>
                    { movies }
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default MovieList
