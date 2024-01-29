import React from 'react';
import PhotosItens from './PhotosItens';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';


export const Home = () => {
  
  


  return (
    <> 
    <Header />
  <section className='mt-8 px-4 max-w-[800px] mx-auto'>
     <PhotosItens />
  </section>
  <Footer />
  </>
  )
}

export default Home;