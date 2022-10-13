import { Routes, Route } from 'react-router-dom'
import HomePage from 'pages/HomePage/HomePage'
import SharedLayout from './SharedLayout/SharedLayout'
import MoviesPage from 'pages/MoviesPage/MoviesPage'
import Cast from 'pages/Cast/Cast'
import Reviews from 'pages/Reviews/Reviews'
import MoviesDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movies/:id' element={<MoviesDetailsPage />} >
            <Route path='cast' element={<Cast />} />
            <Route path='review' element={ <Reviews/>} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
