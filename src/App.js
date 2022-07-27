import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import moviesData from './data/movies-data.json';
import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = movieId => {
    setMovies( (prevMovies) => {
    return prevMovies.filter(element => element.id !== movieId);

    });
}

  return (
    <div className="App">

      <Header numberOfMovies={movies.length}/>

      <Main movies={movies} clickToDelete={deleteMovie}/>

      <Footer/>

    </div>
  );
}

export default App;
