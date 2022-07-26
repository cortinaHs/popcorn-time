import './Main.css'

export const Movie = (props) => {

    const { movie, clickToDelete } = props;

    return (
        <div className="movie">
            {/* {movie.imgURL && <img src={movie.imgURL} alt={movie.title}/>} */}

            {movie.imgURL ? <img src={movie.imgURL} alt={movie.title}/> : <div className="whitespace"></div>}

            <h2>{movie.title}</h2>
            <p>{movie.year}, Rating: {movie.rating}</p>
            <ul>
                {movie.genres.map((genre, index) => {
                 return <li className="genre" key={index}>{genre}</li>
                }
                )}
            </ul>
            <br/>
            <button onClick={() => clickToDelete(movie.id)} className="btn-delete">
                Delete 
            </button>
        </div>
    );
}