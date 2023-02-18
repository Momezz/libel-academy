import { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './styles.css';

const MoviesList = () => {
  const [start, setStart] = useState(5);
  const [end, setEnd] = useState(11);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchMovies()
  }, []);

  const filt = "all";
  const searchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${filt}&apikey=23bf4ab2&`);
      const data = await response.json();
      setSearchResults(data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    if (end < searchResults.length) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  }

  const handleLast = () => {
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  }
  const elements = searchResults.slice(start, end);
  return (
    <>
      <div className="movies-list-links-cont">
        <a href="/" className="movies-list__links">Today </a>&nbsp;<span className="movies-list__slash"> / </span>&nbsp;
        <a href="/" className="movies-list__links">This week </a>&nbsp;<span className="movies-list__slash"> / </span>&nbsp;
        <a href="/" className="movies-list__links">Last 30 days</a>
      </div>
      <article className="movies-list__container">
        <ul className="movies-list__subcont">
          {
            elements.map((movie) => (
              <li className="movies-list__li" key={movie.imdbID}>
                <MovieCard
                  title={movie.Title}
                  movieImage={movie.Poster}
                  category={movie.Type}
                  year={movie.Year}
                />
              </li>
            ))
          }
        </ul>
        <div className="movies-list__movies__cont">
          <p className="movies-list__top"> </p>
          <h2 className="movies-list__category-title">Action & Drama Movies</h2>
          <div>
            <button className="movies-list__btn"><ion-icon name="chevron-back-outline" onClick={handleNext} /></button>
            <button className="movies-list__btn"><ion-icon name="chevron-forward-outline" onClick={handleLast} /></button>
          </div>
          <p className="movies-list__bottom"> </p>
          <p className="movies-list__text">VIEW ALL &gt;</p>
        </div>
      </article>
    </>
  );
}

export default MoviesList;
