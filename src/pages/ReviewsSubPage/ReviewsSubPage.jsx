import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesApi } from "services/moviesApi";

const ReviewsSubPage = () => {
    const { movieId } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        MoviesApi.fetchMovieReviews(movieId).then(resp => {
            if (!resp.length) {
                throw new Error("We don`t have reviews for this movie.")
            }
            setData(resp);
        }).catch(err => {
            setError(err.message);
        });
    }, [movieId])

    return (
        <>  {error && <p>We don`t have reviews for this movie.</p>}
            {data.length > 0 && <ul>
                {data.map(({ id, author, content
                }) => <li key={id}>
                        <p>Author: {author}</p>
                        <p>{content}</p>
                    </li>)}
            </ul>}
        </>
    )
}

export default ReviewsSubPage;