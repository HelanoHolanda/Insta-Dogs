import React from "react";
import apiDogs from "../../Services/Api";

// eslint-disable-next-line react/prop-types
const PhotoDelete = ({ id }) => {
  async function handleclick() {
    const token = JSON.parse(localStorage.getItem("apiDogs"));
    try {
      const response = await apiDogs.delete(`/api/photo/${id}`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return <button onClick={handleclick}>deletar</button>;
};

export default PhotoDelete;
