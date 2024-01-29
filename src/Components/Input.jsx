// eslint-disable-next-line no-unused-vars
import React from 'react'


// eslint-disable-next-line react/display-name
const Input =  React.forwardRef(({...props }, ref) => {

  return (
    <input
      type="text"
      ref={ref}
      {...props}
      className='
      block
      w-full  
     p-3 
     mb-2
     rounded-lg
     text-base
     outline-none
     bg-gray-100
      border-solid
       border-2
       border-gray-100
       duration-200
       hover:bg-slate-50
       hover:outline-none
        hover:border-yellow-400
        hover:shadow
        hover:shadow-yellow-300
        focus:shadow-yellow-100
        focus:outline-none
        focus:outline-none focus:yellow-200' // Spread the remaining props
    />
  );
});



export default Input