import './Main.css'
import moviesData from '../data/movies-data.json';
import { useState } from 'react';
import { Movie } from './Movie';

export const Main = () => {

    const [movies, setMovies] = useState(moviesData);

    const [showMovies, setShowMovies] = useState(true);

    const deleteMovie = movieId => {
        setMovies( (prevMovies) => {

        return prevMovies.filter(element => element.id !== movieId);

        });
    }

    const toggleShowMovies = () => {
        setShowMovies(!showMovies);
      };

    // movies.forEach(movie => {
    //     if(movie.title === "Gladiator"){
    //         movie.rating = 10;
    //     }
    // })

    let message;

    if(movies.length > 0) {
        message = <h2>There's {movies.length} movies in our DB</h2>;
    } else {
        message = <h2>No movies.... 😔</h2>
    }


    return (
        <div className="Main">

            {message}

            
            <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>

            <section className='movies'>
 
                {showMovies &&
                movies.map( (movie) => {

                    let props = {
                        movie: movie, 
                        clickToDelete: deleteMovie
                    }

                    return (
                        <Movie {...props} key={movie.id}/>
                    )
                })}
            </section>
        </div>
    );
}