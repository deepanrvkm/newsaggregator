import React from 'react'
import spinnergif from '../assets/images/spinnergif.gif'

const Spinner = () => {
  return (
    <div className='spinner'>
        <img src={spinnergif} alt="Loading..." />
    </div>
  )
}

export default Spinner