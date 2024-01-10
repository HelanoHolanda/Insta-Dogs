// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../Public/Logo.svg'


const Header = () => {



  return (
    <div className='w-full bg-white fixed mx-auto border-b-2 shadow-sm '>
        <div className='flex justify-around items-center h-16'>
            <img src={Logo} alt="" />
            <div className='flex items-center gap-2'>
                <p className='font-sans'>Login / Criar </p>
                <img src="https://dogs.origamid.dev/assets/usuario-106ce8c2.svg" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Header