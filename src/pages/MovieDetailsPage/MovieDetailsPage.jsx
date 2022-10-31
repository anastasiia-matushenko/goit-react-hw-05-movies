import { Outlet } from "react-router-dom";
// import { Link } from "./MoviesDetailsPage.styled";
import { useFetchMovie } from "hooks/useFetchMovie";

export const MoviesDetailsPage = () => {
    const movie = useFetchMovie();

    return (
        <>
            <>
                {movie && (<h2>DETAILS</h2>)}

                {/* {movie.length > 0 && movie.map((item) => <p key={item.id}>{item.title}</p>)} */}
                <Outlet />
            </>
        </>
    );
};


// export const MoviesDetailsPage = () => {
//     return (
//         <>
//             <h2>DETAILS</h2>
//             <ul>
//                 <li><Link>CastSubPage</Link></li>
//                 <li><Link>ReviesSubPage</Link></li>
//             </ul>
//         </>
//     )
// }