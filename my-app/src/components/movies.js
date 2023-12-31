import Movie from '../components/movie';

function Movies(props) {
const {movies} = props;
return <div className='movies'>
    {movies.map(movie =>
        <Movie key={movie.imdbiD} {...movie}/>
        )} Найдено фильмов: {movies.length}
</div>
} 

export default Movies;