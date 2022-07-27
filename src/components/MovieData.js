import './MovieList.css'

export const MovieData = ({ movie, clickToDelete }) => {

    return (
        <div className="movie">
            {/* {movie.imgURL && <img src={movie.imgURL} alt={movie.title}/>} */}

            {movie.imgURL ? <img src={movie.imgURL} alt={movie.title}/> : <div className="whitespace"></div>}

            <h2>{movie.title}</h2>
            <p>{movie.year}</p> 
            {movie.rating && <p>Rating: {movie.rating}</p>}
            {movie.genres
            && 
            <ul>
                {movie.genres.map((genre, index) => {
                 return <li className="genre" key={index}>{genre}</li>
                }
                )}
            </ul>
            }
            
            <br/>
            <button onClick={() => clickToDelete(movie.id)} className="btn-delete">
                Delete 
            </button>
        </div>
    );
}