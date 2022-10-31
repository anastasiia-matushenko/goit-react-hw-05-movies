import { CastSubPage } from "pages/CastSubPage/CastSubPage";
import { HomePage } from "pages/HomePage/HomePage";
import { MoviesDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { ReviesSubPage } from "pages/ReviewsSubPage/ReviesSubPage";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<CastSubPage />} />
            <Route path="reviews" element={<ReviesSubPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
