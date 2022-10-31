import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { NotFound } from "pages/NotFound/NotFound";
import { Layout } from "./Layout/Layout";

const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const CastSubPage = lazy(() => import("../pages/CastSubPage/CastSubPage"));
const ReviewsSubPage = lazy(() => import("../pages/ReviewsSubPage/ReviewsSubPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastSubPage />} />
          <Route path="reviews" element={<ReviewsSubPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
