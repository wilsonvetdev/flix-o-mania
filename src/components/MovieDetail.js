import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Segment, Grid, Image, Card, Button, Header} from 'semantic-ui-react'
import defaultImg from '../defaultImg.png'

const MovieDetail = (props) => {

    const [url, setUrl] = useState('')
    const [likes, setLikes] = useState(0) 
    const [dislikes, setDislikes] = useState(0) 
    const { id, title, poster_path, overview, release_date } = props.movieObj

    const getImg = async() => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
            const { base_url } = response.data.images
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

    const getLikes = async() => {
        try {
            let response = await axios.get(`http://localhost:3000/movies/${id}`)
            setLikes(response.data.like)
            setDislikes(response.data.dislike)
        } catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getImg()
    })

    useEffect(() => {
        getLikes()
    })

    const handleLike = async(event) => {
        if(event.target.id === 'like-button'){
            try {
                let response = await axios.post('http://localhost:3000/movies', {
                    movie_id: id,
                    name: title,
                    like: 1
                })
                setLikes(response.data.likes)
            } catch(error) {
                console.error('Error fetching and parsing data from Rails API', error)
            }
        } else {
            try {
                let response = await axios.post('http://localhost:3000/movies/dislike', {
                    movie_id: id,
                    name: title,
                    dislike: 1
                })
                setDislikes(response.data.dislike)
            } catch(error) {
                console.error('Error fetching and parsing data from Rails API', error)
            }
        }
    }

    return(
        <Grid columns='equal' inverted container padded stackable>
            <Grid.Row color='black' textAlign='center'>
                <Grid.Column width={6}>
                <Segment inverted color='black'>
                <Card style={{margin: '1rem'}}>
                    <Image src={url} fluid />
                </Card>
                </Segment>
                </Grid.Column>
                <Grid.Column>
                <Segment inverted color='black'>
                    <Header>Title: {title}</Header>
                    <Header as='h5'>Released: {release_date}</Header>
                    <Header as='h5'>Overview:</Header>
                    <p>{overview}</p>
                    <p>Likes: {likes}</p><p>Dislikes: {dislikes}</p>
                    <Button id='like-button' onClick={handleLike} color='green'>Like</Button>
                    <Button id='dislike-button' onClick={handleLike} color='red'>Dislike</Button>
                </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default MovieDetail
