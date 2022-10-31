import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MoviesApi } from "services/moviesApi";
import { Container, SearchForm, SearchInput, SearchButton } from "./MoviesPage.styled";

export const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        function fetchMovies() {

            MoviesApi.fetchMovies(query)
                .then(resp => {
                    console.log("resp", resp);
                    setMovies(state => [...state, ...resp])
                }
                )
        };

        if (query) {
            fetchMovies();
        }
    }, [query]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const value = evt.currentTarget.elements.search.value.trim();
        if (!value) {
            evt.target.reset();
            return;
        }
        // setPage(1);
        setQuery(value);
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
            {movies.length > 0 && <ul>
                {movies.map(({ id, title }) => (
                    <li key={id}>{title}
                        <Link to={`${id}`}>More details</Link>
                    </li>
                ))}
            </ul>}
            <Outlet />
        </Container>
    )
}