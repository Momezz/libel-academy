import HeadBoard from "../../components/HeadBoard/HeadBoard";
import MoviesList from "../../components/MoviesList/MoviesList";
import YearMovies from "../../components/YearMovies/YearMovies";
import './styles.css';

const PlayList = () => {
  return (
    <section className="play-list__container">
      <HeadBoard />
      <MoviesList />
      <YearMovies />
    </section>
  )
}

export default PlayList;
