import React, { useState } from "react";
import FeedModal from "../Containers/Home/FeedModal";
import FeedPhotos from "../Containers/Home/FeedPhotos";

const Feed = () => {
  const [modal, setModal] = useState(null);

  return (
    <div>
      {modal && <FeedModal photo={modal} setModal={setModal} />}
      <FeedPhotos setModal={setModal} />
    </div>
  );
};

export default Feed;
