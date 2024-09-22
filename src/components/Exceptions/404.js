import * as myConstants from '../../constants'
import { Link } from 'react-router-dom'
import React from 'react'

export default function NotFound () {
  return (
    <div className='ml-5 mt-5'>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to={myConstants.HOME_PATH}>Home</Link>
    </div>
  )
}
