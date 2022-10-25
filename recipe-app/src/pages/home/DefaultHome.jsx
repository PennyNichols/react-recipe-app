import React from 'react'
import { GiCupcake } from 'react-icons/gi'

const DefaultHome = () => {
  return (
    <div className="home-content-wrapper">
        <h2 className="home-content-title text-center mt-5">
            Search Your Favorite Family Recipes
        </h2>
        <GiCupcake className="home-brand d-flex m-auto mt-5" />
    </div>
  )
}

export default DefaultHome
