import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const FeedPhotoItens = ({ photo, setModal }) => {
  function handleClick() {
    setModal(photo);
  }

  return (
    <li className="relative" onClick={handleClick}>
      <img
        src={photo.src}
        alt={photo.title}
        className="w-full h-auto rounded"
      />
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
