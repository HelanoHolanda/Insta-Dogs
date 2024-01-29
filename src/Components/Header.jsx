// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../Public/Logo.svg'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <div className='w-full bg-white  mx-auto border-b-2 shadow-sm '>
        <div className='flex justify-around items-center h-16'>
        <Link to="/">
            <img    src={Logo} alt="" />
            </Link>
            <div  className='flex items-center gap-2'>
              <Link to="/login"> <p className='font-sans'>Login / Criar </p> </Link>           
                <img src="https://dogs.origamid.dev/assets/usuario-106ce8c2.svg" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Header


