import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const FeedPhotoItens = ({ photo, setModal, index }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Atraso de 500 milissegundos (meio segundo)

    return () => clearTimeout(timer);
  }, []);

  const handleLoad = () => {
    setIsImageLoaded(true);
  };

  function handleClick() {
    setModal(photo);
  }

  return (
    <li
      className={`relative ${
        index === 1 ? "md:col-span-2 md:row-span-2" : ""
      } ${index === 7 ? "md:col-span-2 md:row-span-2" : ""}`} //"relative md:even:col-span-2 md:even:row-span-2 last:col-start-3 last:row-span-1 "
      onClick={handleClick}
    >
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gradient-to-r from-white  to-gray-300 bg-auto animate-pulse">
            {/* Seu esqueleto de carregamento aqui */}
          </div>
        )}
        <img
          onLoad={handleLoad}
          src={photo.src}
          alt={photo.title}
          className={`block w-full h-auto rounded object-cover transition-opacity ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          } duration-1000 delay-500`}
        />
      </div>
      <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100 before:w-4 before:h-2.5 before:inline-block before:mr-1 before:bg-view">
        {photo.acessos}
      </span>
    </li>
  );
};

FeedPhotoItens.propTypes = {
  photo: PropTypes.object, // Assuming photo is a string representing the URL of the photo
};

export default FeedPhotoItens;
