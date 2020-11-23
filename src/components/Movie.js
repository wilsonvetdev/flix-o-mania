import React from 'react';

const Movie = props => {

    const { picture, name, locations } = props.movieObj
    console.log('LOCATIONS', locations)

    return (
        <li>
            <p>{ name } </p>
            <img height='220px' width='360px' src={ picture } alt={name} />
        </li>
    )
}

export default Movie