import { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import data from '../../assets/data.json';
import './styles.css';

const YearMovies = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  const handleNext = () => {
    if (end < data.length) {
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
  const elements = data.slice(start, end);
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
          <h2 className="year-movies__category-title">Action & Drama Movies</h2>
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
                  title={movie.title}
                  movieImage={movie.image}
                  category={movie.category}
                  year={movie.year}
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
