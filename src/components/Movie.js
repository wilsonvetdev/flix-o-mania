import React from 'react';


const Movie = props => {
    // debugger

    return (
        <>
        {
            props.movieObj ? 
            <li>
                <p>{ props.movieObj.name } </p>
                <img height='220px' width='360px' src={ props.movieObj.picture } alt={props.movieObj.name} />
            </li>
            :
            <h1>nothing here</h1>
        }
        </>
    )
}

export default Movie