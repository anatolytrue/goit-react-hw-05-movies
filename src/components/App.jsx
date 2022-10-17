import css from './App.module.css';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import HomePage from 'pages/HomePage/HomePage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import SharedLayout from './SharedLayout/SharedLayout';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import MoviesDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <div className={css.app}>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="home/:id" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast  />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>

    </div>
  );
}

export default App;