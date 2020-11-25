import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Image, Card } from 'semantic-ui-react'
import defaultImg from '../defaultImg.png'

const Movie = props => {

    const [url, setUrl] = useState('')
    const { title, poster_path, popularity } = props.movieObj

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

    useEffect(() => {
        getImg()
    })

    return (
        <>
        {
            props.movieObj ? 
            <Card>
                    <Image src={url} alt={title} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{title}</Card.Header>
                        <Card.Meta>
                            <span>Popularity: {popularity}</span>
                        </Card.Meta>
                    </Card.Content>
            </Card>
            :
            <h1>nothing here</h1>
        }
        </>
    )
}

export default Movie