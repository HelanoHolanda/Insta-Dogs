/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import apiDogs from "../../Services/Api";
import PhotoContent from "../Photo/PhotoContent";

// eslint-disable-next-line react/prop-types
const FeedModal = ({ photo, setModal }) => {
  useEffect(() => {
    async function fetchPhoto() {
      try {
        const response = await apiDogs.get(`/api/photo/${photo.id}`);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar foto:", error.response.data.message);
      }
    }

    if (photo && photo.id) {
      fetchPhoto();
    }
  }, []);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModal(null);
  }

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed top-0 left-0 z-50 flex py-8 px-16 w-screen h-screen bg-bg-span rounded"
    >
      {photo && <PhotoContent contentPhoto={photo} />}
    </div>
  );
};

export default FeedModal;
