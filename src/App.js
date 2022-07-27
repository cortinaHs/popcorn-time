import './App.css';
import { Header } from './components/Header';
import { MovieList } from './components/MovieList';
import { Footer } from './components/Footer';
import moviesData from './data/movies-data.json';
import { useState } from 'react';
import { AddMovie } from './components/AddMovie';

function App() {

  const [movies, setMovies] = useState(moviesData);
  
  const deleteMovie = movieId => {
    setMovies( (prevMovies) => {
    return prevMovies.filter(element => element.id !== movieId);

    });
  }

  const addNewMovie = (movie) => {
    setMovies( (prevMovies) => {
      return [movie, ...prevMovies];
    });
  }


  return (
    <div className="App">

      <Header numberOfMovies={movies.length}/>
      

      <div className='options'>
        <AddMovie addMovie={addNewMovie}/>
      </div>

      <div className='Main'>
        <MovieList movies={movies} clickToDelete={deleteMovie}/>
      </div>


      <Footer/>

    </div>
  );
}

export default App;
