import { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import data from '../../assets/data.json';
import './styles.css';

const MoviesList = () => {
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
      <div className="movies-list-links-cont">
        <a href="/" className="movies-list__links">Today </a>&nbsp;<span className="movies-list__slash"> / </span>&nbsp;
        <a href="/" className="movies-list__links">This week </a>&nbsp;<span className="movies-list__slash"> / </span>&nbsp;
        <a href="/" className="movies-list__links">Last 30 days</a>
      </div>
      <article className="movies-list__container">
        <ul className="movies-list__subcont">
          {
            elements.map((movie) => (
              <li className="movies-list__li" key={movie.id}>
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
