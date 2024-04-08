import { useEffect, useState } from "react";
import FeedPhotoItens from "./FeedPhotoItens";
import apiDogs from "../../Services/Api";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const FeedPhotos = ({ setModal }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function fetchPhotos({ page, total, user }) {
      const response = await apiDogs.get(
        `/api/photo/?_page=${page}&_total=${total}&_user=${user}`
      );

      setFeed(response.data);
    }
    setTimeout(
      () => {
        fetchPhotos({ page: 1, total: 6, user: 0 });
      },

      1000
    );
  }, []);

  return (
    <ul className="grid grid-cols-2 gap-4 mb-4">
      {feed.map((photo) => (
        <FeedPhotoItens key={photo.id} photo={photo} setModal={setModal} />
      ))}
    </ul>
  );
};

FeedPhotos.prototype = {
  setModal: PropTypes.func,
};

export default FeedPhotos;
