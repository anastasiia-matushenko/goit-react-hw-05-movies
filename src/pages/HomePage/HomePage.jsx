import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { MoviesApi } from "services/moviesApi"

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MoviesApi.fetchTrendingMovies().then(setMovies).catch(err => {
            alert(err.message);
        });
    }, [])

    return (
        <div>
            <h1>Trending Today</h1>
            <ul>
                {movies.length > 0 && movies.map(({ id, title, poster_path }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                    </li>))}
            </ul>
        </div>
    )
}