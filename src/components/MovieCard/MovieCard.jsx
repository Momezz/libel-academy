import PropTypes from 'prop-types';
import './styles.css';

const MovieCard = ({ movieImage, category, year, title  }) => {
  return (
    <article className="movie-card__container">
      <img className="movie-card__image" src={movieImage} alt={title} />
      <p className="movie-card__category">{category}, <span className="movie-card__year">{year}</span></p>
      <h2 className="movie-card__title">{title}</h2>
    </article>
  )
}

MovieCard.propTypes = {
  movieImage: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default MovieCard;
