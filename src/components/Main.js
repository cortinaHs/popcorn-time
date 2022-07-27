import './Main.css'
import { Movie } from './Movie';
import { useState } from 'react';

export const Main = ({movies, clickToDelete}) => {

    const [showMovies, setShowMovies] = useState(true);

    const toggleShowMovies = () => {
        setShowMovies(!showMovies);
      };

    // movies.forEach(movie => {
    //     if(movie.title === "Gladiator"){
    //         movie.rating = 10;
    //     }
    // })


    return (
        <div className="Main">
        
            <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>

            <section className='movies'>
 
                {showMovies &&
                movies.map( (movie) => {

                    let props = {
                        movie: movie, 
                        clickToDelete: clickToDelete
                    }

                    return (
                        <Movie {...props} key={movie.id}/>
                    )
                })}
            </section>
        </div>
    );
}