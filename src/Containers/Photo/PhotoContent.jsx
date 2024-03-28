/* eslint-disable react/prop-types */
import H1 from "../../Components/H1";
import { Link, NavLink } from "react-router-dom";
import PhotoComments from "./PhotoComments";

// eslint-disable-next-line react/prop-types
const PhotoContent = ({ contentPhoto }) => {
  console.log(contentPhoto);
  return (
    <div className="h-auto max-h-max-sm overflow-y-auto m-auto rounded bg-white  grid grid-cols-modalsm grid-rows-row md:grid md:grid-cols-gridtemplatecolumns md:grid-rows-row">
      <div>
        <img
          className="rounded-t-sm md:grid-rows-img"
          src={contentPhoto.src}
          alt={contentPhoto.title}
        />
      </div>
      <div className="p-8">
        <div>
          <p className="opacity-1 mb-4 flex justify-between items-center hover:underline ">
            <Link to={`/perfil/${contentPhoto.author}`}>
              @{contentPhoto.author}
            </Link>
            <span className="before:w-4 before:h-2.5 before:inline-block before:mr-1 before:bg-viewBlack">
              {contentPhoto.acessos}
            </span>
          </p>
          <h1 className="font-serif font-medium leading-none text-5xl my-4 relative z-10 after:content-[''] after:w-6 after:h-6 after:bg-yellow-500 after:absolute after:bottom-0 after:-left-1 after:rounded after:-z-10	">
            <Link to={`/foto/${contentPhoto.id}`}> {contentPhoto.title} </Link>
          </h1>
          <ul className="flex gap-2 font-bold mt-4 mb-8">
            <li className="mr-8 before:inline-block before:h-[20px] before:mr-[.5rem] before:relative before:top-[3px] before:w-[2px] before:bg-black before:mt-[5px]">
              {contentPhoto.peso} Kg
            </li>
            <li className="mr-8 before:inline-block before:h-[20px] before:mr-[.5rem] before:relative before:top-[3px] before:w-[2px] before:bg-black before:mt-[5px]">
              {contentPhoto.idade} Anos
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments comments={PhotoContent.comments} id={contentPhoto.id} />
    </div>
  );
};

export default PhotoContent;
