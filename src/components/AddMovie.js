import { useState } from "react";

export const AddMovie = ({addMovie}) => {

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [imgURL, setImgURL] = useState("");

  const clickToAddMovie = (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      rating,
      imgURL, 
      year
    };
    addMovie(newMovie);

    setTitle("");
    setYear("");
    setRating("");
    setImgURL("");
    }

    return ( 
        <div id="create">
        <form onSubmit={clickToAddMovie}>
            <input required type="text" name="title" placeholder="title of the movie" value={title} onChange={(e) => { setTitle(e.target.value)}}/>
            <input type="number" min={1900} max={new Date().getFullYear()} name="year" placeholder="year" value={year} onChange={(e) => { setYear(e.target.value)}}/>
            <input type="number" min={1} max={10} name="rating" placeholder="rating" value={rating} onChange={(e) => { setRating(e.target.value)}}/>
            <input type="text" name="imgURL" placeholder="image url" value={imgURL} onChange={(e) => { setImgURL(e.target.value) }} />
            <button>Create</button>
        </form>
    </div>
    );
}
