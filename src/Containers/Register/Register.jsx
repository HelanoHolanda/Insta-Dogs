import React from 'react'
import Header from '../../Components/Header'
import H1 from '../../Components/H1'
import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Footer from '../../Components/Footer'
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Register = () => {

    const schema = yup.object({
        username: yup.string().required("Usúario é Obrigatorio!"),
        email: yup.string().email().required("Email e Obrigatorio!"),
        password: yup.string().required("Senha é Obrigatoria!"),
      })
      
      const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        formState: { errors },
      } = useForm({resolver: yupResolver(schema),})
    
      const onSubmit = (data) => console.log(data)

      

    return (
     <div>
         <Header />       
        <div className='flex-1'>
            <div className=''>
           <div className='min-h-screen md:grid grid-cols-2 gap-8 before:block before:bg-auth before:bg-cover before:bg-center'>        
            <div className='max-w-full  p-4 mt-48 md:max-w-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-8'>
                  <div>
                    <H1>Cadastre-se</H1>
                    <Label>Usuário</Label>
                    <Input {...register("username")}/>
                    <p className='text-red-600 block'>{errors.username?.message}</p>
                    <Label>Email</Label>
                    <Input {...register("email")}/>
                    <p className='text-red-600 block'>{errors.email?.message}</p>
                    <Label>Senha </Label>
                    <Input type="password" 
                    {...register("password")}/>
                    <p className='text-red-600'>{errors.password?.message}</p>
                    <Button type="submit">Entrar </Button>
                    </div>
                </form>
            </div>
            </div> 
            </div>
        </div>
       <Footer /> 
    </div>

  )
}

export default Register