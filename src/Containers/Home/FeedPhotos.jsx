import { useEffect, useState } from "react";
import FeedPhotoItens from "./FeedPhotoItens";
import apiDogs from "../../Services/Api";
import PropTypes from "prop-types";
import Loading from "../../Components/Loading";

// eslint-disable-next-line react/prop-types
const FeedPhotos = ({ setModal, user }) => {
  const [feed, setFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos({ page, total, user }) {
      const response = await apiDogs.get(
        `/api/photo/?_page=${page}&_total=${total}&_user=${user}`
      );

      setFeed(response.data);
      setIsLoading(false);
    }
    setTimeout(
      () => {
        // eslint-disable-next-line react/prop-types
        fetchPhotos({ page: 1, total: 9, user: user });
      },

      100
    );
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <ul className="grid grid-cols-2 gap-4 mb-4 md:grid md:grid-cols-3">
        {feed.map((photo, index) => (
          <FeedPhotoItens
            key={photo.id}
            photo={photo}
            setModal={setModal}
            index={index}
          />
        ))}
      </ul>
    </>
  );
};

FeedPhotos.prototype = {
  setModal: PropTypes.func,
};

export default FeedPhotos;
