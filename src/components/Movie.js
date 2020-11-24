import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Movie = props => {
    // debugger
    const [url, setUrl] = useState('')
    const { id, title, poster_path, backdrop_path, overview, release_date, popularity } = props.movieObj

    const getImg = async() => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
            const { base_url, poster_sizes, profile_sizes, backdrop_sizes, still_sizes } = response.data.images
            let profilePic = base_url + 'w500' + poster_path
            setUrl(profilePic)
        } catch(error) {
            console.error('Error fetching and parsing data', error)
        }
        // {
        // backdrop_sizes: (4) ["w300", "w780", "w1280", "original"]
        // base_url: "http://image.tmdb.org/t/p/"
        // logo_sizes: (7) ["w45", "w92", "w154", "w185", "w300", "w500", "original"]
        // poster_sizes: (7) ["w92", "w154", "w185", "w342", "w500", "w780", "original"]
        // profile_sizes: (4) ["w45", "w185", "h632", "original"]
        // secure_base_url: "https://image.tmdb.org/t/p/"
        // still_sizes: (4) ["w92", "w185", "w300", "original"]
        // }
    }

    useEffect(() => {
        getImg()
    })


    return (
        <>
        {
            props.movieObj ? 
            <li>
                <p>{ title } </p>
                <img src={url} alt={title} />
            </li>
            :
            <h1>nothing here</h1>
        }
        </>
    )
}

export default Movie