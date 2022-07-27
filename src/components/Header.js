import './Header.css'

export const Header = ({numberOfMovies}) => {

    let message;

    if(numberOfMovies > 0) {
        message = <h2>Currently {numberOfMovies} movies available. Happy watching!</h2>;
    } else {
        message = <h2>No movies.... 😔</h2>
    }



    return (
        <header className="Header">
            <img src="../logo192.png" alt="popcorn"/>
            <h1>Popcorn Time!</h1>
            {message}
        </header>
    );
}