/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import apiDogs from "../../Services/Api";
import PhotoContent from "../Photo/PhotoContent";

// eslint-disable-next-line react/prop-types
const FeedModal = ({ photo, setModal }) => {
  const [photodata, setPhotoData] = useState(null);
  useEffect(() => {
    async function fetchPhoto() {
      try {
        const { data } = await apiDogs.get(`/api/photo/${photo.id}`);
        setPhotoData(data);
      } catch (error) {
        console.error("Erro ao buscar foto:", error.response.data.message);
      }
    }

    if (photo && photo.id) {
      fetchPhoto();
    }
  }, [photo]);

  function handleOutsideClick(event) {
    // function para clicar fora do modal
    if (event.target === event.currentTarget) setModal(null);
  }

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed top-0 left-0 z-50 flex py-8 px-8  w-screen h-screen bg-bg-span rounded md:py-8 md:px-16"
    >
      {photodata && <PhotoContent photodata={photodata} />}
    </div>
  );
};

export default FeedModal;
