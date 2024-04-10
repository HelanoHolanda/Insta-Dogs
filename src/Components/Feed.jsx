import { useState } from "react";
import FeedModal from "../Containers/Home/FeedModal";
import FeedPhotos from "../Containers/Home/FeedPhotos";

// eslint-disable-next-line react/prop-types
const Feed = ({ user }) => {
  const [modal, setModal] = useState(null);

  return (
    <div>
      {modal && <FeedModal photo={modal} setModal={setModal} />}
      <FeedPhotos setModal={setModal} user={user} />
    </div>
  );
};

export default Feed;
