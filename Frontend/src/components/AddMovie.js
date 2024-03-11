import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { gql, useMutation } from '@apollo/client'

const addNewMovie = gql`
  mutation addNewMovie($name: String!, $genre: String!, $year: String! ) {
    addMovie(name: $name, genre: $genre, year: $year){
    name
    genre
    year
  }
}
`
const listAllMovies = gql`
  query {
    listMovies {
      name
      genre
      year
    }
  }
`

const AddMovie = () => {  

  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [newMovieData, {  loading, error }] = useMutation(addNewMovie);

  const submitHandler = (e) => {
    e.preventDefault()
    newMovieData(
      {
        variables: {
          name: name,
          genre: genre,
          year: year
        },
        refetchQueries: [
          {
            query: listAllMovies 
          }
        ]
      }
    )
    
  }


  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  

  return (
    <div className='addMovie' id='addmovie'>
      <form onSubmit={submitHandler}>
        < input onChange={(e)=> setName(e.target.value)}  type='text' placeholder='movie name' required/>
        < input onChange={(e)=> setGenre(e.target.value)}  type='text' placeholder='movie genre' required/>
        < input onChange={(e)=> setYear(e.target.value)}  type='text' placeholder='movie year' />
        <button type='submit'>
          Add Movie
        </button>
      </form>
      <div className='top' >
        <Link smooth to='#header' className='top-button'>
          Back to Top
        </Link>
      </div>
    </div>
  )
}

export default AddMovie
