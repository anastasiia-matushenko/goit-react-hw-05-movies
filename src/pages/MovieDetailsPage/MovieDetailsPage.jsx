import { Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "./MovieDetailsPage.styled";
import { useFetchMovie } from "hooks/useFetchMovie";
import { Container } from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {
    const movie = useFetchMovie();
    const navigate = useNavigate();
    const location = useLocation();
    if (!movie) {
        return;
    }

    const { title, overview, release_date, vote_average, genres, poster_path
    } = movie;
    const voteAverage = Math.floor(vote_average * 10);

    return (

        <>
            {movie && (<>
                <button
                    onClick={() => {
                        navigate(location?.state?.from ?? "/");
                    }}
                >
                    Go back
                </button>
                <Container>
                    <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                    <div>
                        <h2>{title} ({release_date.slice(0, 4)})</h2>
                        <p>User score: {voteAverage}%</p>
                        <p>Overview: {overview}</p>
                        <p>{genres.map(({ id, name }) => <span key={id}>{name} </span>)}</p>
                    </div>
                </Container>
                <h3>Additional information</h3>
                <ul>
                    <li><Link to="cast" state={location.state}>CastSubPage</Link></li>
                    <li><Link to="reviews" state={location.state}>ReviesSubPage</Link></li>
                </ul>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </>
            )}

        </>

    );
};

export default MovieDetailsPage;