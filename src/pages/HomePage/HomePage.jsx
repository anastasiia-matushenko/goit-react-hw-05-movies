import { useEffect, useState } from "react"
import { MoviesApi } from "services/moviesApi"
import { Container, Gallery, Item, Title } from "./HomePage.styled";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MoviesApi.fetchTrendingMovies().then(setMovies);
        console.log("HOME started fetching movies");
    }, [])

    return (
        <Container>
            <h1>Trending Today</h1>
            <Gallery>
                {movies.length > 0 && movies.map(({ id, title, poster_path }) => (
                    <Item key={id}>
                        <Title>{title}</Title>
                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                    </Item>))}
            </Gallery>
        </Container>
    )
}