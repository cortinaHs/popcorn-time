import './Header.css'

export const Header = ({numberOfMovies}) => {


    let message;

    if(numberOfMovies > 0) {
        message = <h2>There's {numberOfMovies} movies in our DB</h2>;
    } else {
        message = <h2>No movies.... 😔</h2>
    }



    return (
        <header className="Header">
            <h1>Popcorn Time!</h1>
            {message}
        </header>
    );
}