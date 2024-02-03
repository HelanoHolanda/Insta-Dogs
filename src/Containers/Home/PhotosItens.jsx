import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import apiDogs from '../../Services/Api'



const PhotosItens = () => {
    // minhas variaeis
    const [photosItens, setPhotoItens] = useState([])
   
    // chamando a api
    useEffect (() => {
      async function feed (){
       let {data: response} = await apiDogs.get("https://dogsapi.origamid.dev/json/api/photo")
       setPhotoItens(response)
       console.log(response)
      }
    feed()
    },[])


    useEffect (() => {
      async function api (){
       let {data: response} = await axios.get("https://dogsapi.origamid.dev/json")
      
       console.log(response)
      }
    api()
    },[])
   
   return (
     <div className='box-border'>
      <ul className='grid grid-cols-2 gap-4 mb-4 items-center'>
        {photosItens.map((photo) => (
          <li className='grid rounded overflow-hidden cursor-pointer '  key={photo.id} > 
          <div style={{gridArea: '1/1'}} >
          <img className=' block opacity-100 max-w-full 'style={{gridArea: '1/1'}}  src={photo.src} alt={photo.title} />
          </div>
           <span className="bg-bg-span text-white text-center items-center justify-center flex" style={{ gridArea: '1/1'}}>   { photo.acessos }</span>
          </li>
          ))}
     </ul>
    </div> 
  )
} 

export default PhotosItens