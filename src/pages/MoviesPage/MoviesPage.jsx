import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { MoviesApi } from "services/moviesApi";
import { Container, SearchForm, SearchInput, SearchButton, Title } from "./MoviesPage.styled";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("movie");
    const location = useLocation();

    useEffect(() => {
        if (!query) return;
        function fetchMovies() {
            MoviesApi.fetchMovies(query)
                .then(resp => {
                    if (!resp.length) {
                        throw new Error("Nothing was found for your query.")
                    }
                    setMovies(resp);
                }).catch(err => {
                    setError(err.message);
                })
        };

        fetchMovies();
    }, [query]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const value = evt.currentTarget.elements.search.value.trim();
        if (!value) {
            evt.target.reset();
            return;
        }
        setSearchParams({ movie: value });
        setMovies([]);
        setError("");
        evt.target.reset();
    }

    return (
        <Container>
            <h1>Movies Page</h1>
            <SearchForm onSubmit={handleSubmit}>
                <SearchInput
                    type="text"
                    name="search"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search movies..."
                />
                <SearchButton type="submit">Search</SearchButton>
            </SearchForm>
            {error && <p>{error}</p>}
            {movies.length > 0 && <ul>
                {movies.map(({ id, title }) => (
                    <li key={id}><Title>{title}</Title>
                        <Link to={`/movies/${id}`} state={{ from: location }}>More details</Link>
                    </li>
                ))}
            </ul>}
        </Container>
    )
}

export default MoviesPage;