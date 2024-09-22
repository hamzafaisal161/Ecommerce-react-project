import BeatLoader from 'react-spinners/BeatLoader'
import React from 'react'
import './loading.css'

const Loading = () => {
  return (
    <div className='my-style'>
      <p>Loading</p>
      <BeatLoader color='#08184E' size={85} />
    </div>
  )
}

export default Loading
