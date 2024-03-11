import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <p>
        &copy; Movie <span>
          {' '}
          {new Date().getFullYear()}
        </span>
      </p>
    </div>
  )
}

export default Footer
