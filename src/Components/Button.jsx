// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export const Button = ({ children }) => {
  return (
    <button
      className="
    block
    text-base
     cursor-pointer 
     border-0 
     rounded-md
      bg-yellow-500
       text-amber-800 
       min-w-32 
       mt-6
       box-border	
       py-3
       px-1.5
       hover:outline-none
       hover:opacity-75
       hover:border-yellow-200
       hover:shadow-sm
       hover:shadow-yellow-300"
    >
      {children}
    </button>
  );
};
export default Button;
