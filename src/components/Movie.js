import React from 'react';
import axios from 'axios'


const Movie = props => {
    // debugger

    const { id, title, poster_path, backdrop_path, overview, release_date, popularity } = props.movieObj

    const getImg = () => {
        let response = axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
        console.log(response)
    }

    return (
        <>
        {
            props.movieObj ? 
            <li>
                <p>{ title } </p>
                {/* <img height='220px' width='360px' src={ props.movieObj.picture } alt={props.movieObj.name} /> */}
            </li>
            :
            <h1>nothing here</h1>
        }
        </>
    )
}

export default Movie