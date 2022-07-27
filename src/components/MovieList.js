import './MovieList.css'
import { MovieData } from './MovieData';
import { useState } from 'react';

export const MovieList = ({movies, clickToDelete}) => {

    const [showMovies, setShowMovies] = useState(false);

    const toggleShowMovies = () => {
        setShowMovies(!showMovies);
      };

    // movies.forEach(movie => {
    //     if(movie.title === "Gladiator"){
    //         movie.rating = 10;
    //     }
    // })


    return (
        <div className="MovieList">
            <div className='toggle'>
                <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>
            </div> 

            <section className='movies'>

 
                {showMovies
                ?
                movies.map( (movie) => {

                    let props = {
                        movie: movie, 
                        clickToDelete: clickToDelete
                    }

                    return (
                        <MovieData {...props} key={movie.id}/>
                    )
                })
                :
                <div className='alternativeContent'>
                    <h2>Get some Popcorn & enjoy!</h2>
                    <img src="./logo512.png" alt="popcorn"/>
                </div>

                }
            </section>
        </div>
    );
}