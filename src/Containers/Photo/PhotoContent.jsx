/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";

// eslint-disable-next-line react/prop-types
const PhotoContent = ({ photodata }) => {
  const { photo, comments } = photodata;
  return (
    <div className="m-auto h-auto max-h-feedSm  grid grid-cols-1 overflow-y-auto rounded bg-white overflow-hidden md:grid md:grid-cols-feedMD grid-rows-feedMD md:h-[36rem]">
      <div className="grid-rows-1 md:row-span-4">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="px-8 pt-8">
        <div>
          <p className="opacity-1 mb-4 flex justify-between items-center hover:underline ">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="before:w-4 before:h-2.5 before:inline-block before:mr-1 before:bg-viewBlack">
              {photo.acessos}
            </span>
          </p>
          <h1 className="font-serif font-medium leading-none text-5xl my-4 relative z-10 after:content-[''] after:w-6 after:h-6 after:bg-yellow-500 after:absolute after:bottom-0 after:-left-1 after:rounded after:-z-10	">
            <Link to={`/foto/${photo.id}`}> {photo.title} </Link>
          </h1>
          <ul className="flex gap-2 font-bold mt-4 mb-8">
            <li className="mr-8 before:inline-block before:h-[20px] before:mr-[.5rem] before:relative before:top-[3px] before:w-[2px] before:bg-black before:mt-[5px]">
              {photo.peso} Kg
            </li>
            <li className="mr-8 before:inline-block before:h-[20px] before:mr-[.5rem] before:relative before:top-[3px] before:w-[2px] before:bg-black before:mt-[5px]">
              {photo.idade} Anos
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments className="px-8" comments={comments} id={photo.id} />
    </div>
  );
};

export default PhotoContent;
