// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Label = ({children}) => {
  return (
     
    <label
     htmlFor="" className='block text-base leading-4  my-4'>{children}
    </label>
  )
}

export default Label