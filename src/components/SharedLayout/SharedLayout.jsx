import NavBar from 'components/NavBar/NavBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
      <>
          <NavBar />
          <Outlet/>
          <footer>Copyright 2022</footer>
      </>
  )
}
