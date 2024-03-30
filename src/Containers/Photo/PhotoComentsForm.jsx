import { useState } from "react";
import apiDogs from "../../Services/Api";
import ButtonDogs from "../../Public/enviar.svg";
// eslint-disable-next-line react/prop-types
const PhotoComentsForm = ({ id, setCommentario }) => {
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("apiDogs"));
    try {
      const response = await apiDogs.post(
        `/api/comment/${id}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      if (response) {
        setCommentario((comments) => [...comments, response.data]);
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      className="grid grid-cols-twocolumns items-stretch m-4 px-4"
      onSubmit={handleSubmit}
    >
      <textarea
        placeholder="Comente..."
        className="py-6 px-2 bg-gray-200 text-start overflow-hidden block w-full size-4 resize-none rounded-sm border-none border-ee1 hover:outline-none hover:border-bg-footer hover:bg-white hover:shadow-hoverandfocus"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        name=""
        id=""
      ></textarea>
      <button className="border-none cursor-pointer px-4 overflow-hidden">
        <img src={ButtonDogs} alt="" />
      </button>
    </form>
  );
};

export default PhotoComentsForm;
