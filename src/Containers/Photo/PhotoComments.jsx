import { useState } from "react";
import { useUser } from "../../hooks/UserContext";
import PhotoComentsForm from "./PhotoComentsForm";
import PropTypes from "prop-types";

const PhotoComments = (props) => {
  const { user } = useUser();
  // eslint-disable-next-line react/prop-types
  const [commentario, setCommentario] = useState(() => props.comments);
  // eslint-disable-next-line react/prop-types

  return (
    <>
      <ul className="overflow-y-auto px-8">
        {commentario.map((comment) => (
          <li className="mb-1 leading-5" key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoComentsForm id={props.id} setCommentario={setCommentario} />
      )}
    </>
  );
};

PhotoComments.propTypes = {
  id: PropTypes.number.isRequired, // Validate id prop as a required string
  // Other prop validations can be added here
};

export default PhotoComments;
