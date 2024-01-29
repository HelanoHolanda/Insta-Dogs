import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import H1 from '../../Components/H1'
import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'

const LostPassword = () => {


  return (
    <>
    <Header />
    <div className='flex-1'>
    <div className=''>
   <div className='min-h-screen md:grid grid-cols-2 gap-8 before:block before:bg-auth before:bg-cover before:bg-center'>        
    <div className='max-w-full  p-4 mt-48 md:max-w-lg'>
        <div>
            <H1>Perdeu a Senha?</H1>
            <Label></Label>
            <Input />
            <Button>Enviar Email</Button>
        </div>
    </div>
    </div> 
    </div>
</div>
<Footer /> 
</>
  )
}

export default LostPassword