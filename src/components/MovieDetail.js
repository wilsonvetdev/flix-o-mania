import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Segment, Grid, Image, Card, Button, Header, Icon } from 'semantic-ui-react'
import defaultImg from '../defaultImg.png'

const MovieDetail = (props) => {

    const [url, setUrl] = useState('')
    const [liked, setLike] = useState(false)
    const { id, title, poster_path, backdrop_path, overview, release_date, popularity } = props.movieObj

    const getImg = async() => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
            const { base_url, poster_sizes, profile_sizes, backdrop_sizes, still_sizes } = response.data.images
            let poster;
            if(props.location.pathname === '/movies' && poster_path !== null) {
                poster = base_url + 'w342' + poster_path
                setUrl(poster)
            } else if( poster_path !== null) {
                poster = base_url + 'w342' + poster_path
                setUrl(poster)
            } else {
                poster = defaultImg 
                setUrl(poster)
            }
        } catch(error) {
            console.error('Error fetching and parsing data', error)
        }
    }

    useEffect(() => {
        getImg()
    })

    return(
        <Grid columns='equal' inverted container padded relaxed stackable>
            <Grid.Row color='black' textAlign='center'>
                <Grid.Column width={6}>
                <Segment inverted color='black'>
                <Card>
                    <Image src={url} />
                </Card>
                </Segment>
                </Grid.Column>
                <Grid.Column>
                <Segment inverted color='black'>
                    <Header>Title: {title}</Header>
                    <Header as='h5'>Released: {release_date}</Header>
                    <Header as='h5'>Overview:</Header>
                    <p>{overview}</p>
                    <Button icon onClick={() => setLike(!liked)} color={liked ? 'green' : null}><Icon name='thumbs up' /></Button>
                    <Button icon onClick={() => setLike(!liked)} color={!liked ? 'red' : null}><Icon name='thumbs down' /></Button>
                </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default MovieDetail