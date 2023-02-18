import { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './styles.css';

const YearMovies = () => {
  const [start, setStart] = useState(5);
  const [end, setEnd] = useState(11);
  const [searchResults, setSearchResults] = useState([]);
  const filt = "2018";

  const searchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${filt}&apikey=23bf4ab2`);
      const data = await response.json();
      setSearchResults(data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { searchMovies() }, []);

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
      <div className="year-movies__links-cont">
        <a href="/" className="year-movies__links">Today </a>&nbsp;<span className="year-movies__slash"> / </span>&nbsp;
        <a href="/" className="year-movies__links">This week </a>&nbsp;<span className="year-movies__slash"> / </span>&nbsp;
        <a href="/" className="year-movies__links">Last 30 days</a>
      </div>
      <article className="year-movies__container">
        <div className="year-movies__movies__cont">
          <p className="year-movies__top"> </p>
          <h2 className="year-movies__category-title">Funniest Comedy Movies 0f 2018</h2>
          <div>
            <button className="year-movies__btn"><ion-icon name="chevron-back-outline" onClick={handleNext} /></button>
            <button className="year-movies__btn"><ion-icon name="chevron-forward-outline" onClick={handleLast} /></button>
          </div>
          <p className="year-movies__bottom"> </p>
          <p className="year-movies__text">VIEW ALL &gt;</p>
        </div>
        <ul className="year-movies__subcont">
          {
            elements.map((movie) => (
              <li className="year-movies__li" key={movie.id}>
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
      </article>
    </>
  );
}

export default YearMovies;
