import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MoviesApi } from "services/moviesApi";

const CastSubPage = () => {
    const { movieId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        MoviesApi.fetchMovieCast(movieId).then(setData).catch(err => {
            alert(err.message);
        });
    }, [movieId])

    return (
        <>
            {data && <ul>
                {data.map(({ id, name, character, profile_path
                }) => <li key={id}>
                        {profile_path && <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />}
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </li>)}
            </ul>}
        </>
    )
}

export default CastSubPage;