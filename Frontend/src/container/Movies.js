import React from 'react'
import SingleMovie from './SingleMovie'
import { gql, useQuery } from '@apollo/client'

const listAllMovies = gql`
  query {
    listMovies {
      name
      genre
      year
    }
  }
`

const Movies = () => {

  const { loading, error, data } = useQuery(listAllMovies)
  console.log(data)
  if (loading) return <p>We are loading your movies</p>
  if (error) return <p>Cannot Fetch: {error.message}</p>
  if(data.listMovies.length === 0) return <p className='no-movies'>
    Please Add Your Movies to list
  </p>
  return (
    <div className='movies'>
      {
        data.listMovies.map((movie, index) => {
          return (
            <SingleMovie
            key={index}
            movieName = { movie.name }
            movieGenre = { movie.genre }
            movieYear = { movie.year }
            />
          )
        })
      }
    </div>
  )
}

export default Movies
