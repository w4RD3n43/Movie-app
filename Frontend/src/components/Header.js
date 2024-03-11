import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <div className='topnav' id='header'>
      <HashLink smooth to='#' >
        Movie
      </HashLink>
      <HashLink smooth to='#addmovie' className='add-button' >
        Add Movie
      </HashLink>
    </div>
  )
}

export default Header
