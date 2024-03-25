import { useState } from "react";
import Label from "../../Components/Label";

import Button from "../../Components/Button";
import apiDogs from "../../Services/Api";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const [name, setName] = useState("");
  const [peso, setPeso] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState({});
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  function onChangeImg({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  function uploadImg(event) {
    event.preventDefault();
    console.log(peso, age, name, img);
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("peso", peso);
    formData.append("idade", age);
    formData.append("nome", name);

    const fetchData = async () => {
      try {
        setLoad(true);
        const token = JSON.parse(localStorage.getItem("apiDogs"));

        const response = await apiDogs.post("/api/photo", formData, {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
        console.log(response.data);
        setLoad(false);
        navigate("/user/feed");
      } catch (error) {
        console.log("Ocorreu um erro:", error);
        setLoad(false);
      }
    };
    fetchData();
  }

  return (
    <section className="grid grid-cols-1 gap-8 mb-8 h-screen md:grid md:grid-cols-2 md:gap-8">
      <form onSubmit={uploadImg}>
        <div>
          <Label>Nome</Label>
          <input
            className="
      block
      w-full  
     p-3 
     mb-2
     rounded-lg
     text-base
     outline-none
     bg-gray-200
      border-solid
       border-2
       border-gray-100
       duration-200
       hover:bg-slate-50
       hover:outline-none
        hover:border-yellow-400
        hover:shadow
        hover:shadow-yellow-300
        focus:shadow-yellow-100
        focus:outline-none
        focus:outline-none focus:yellow-200"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Label>Peso</Label>
          <input
            className="
      block
      w-full  
     p-3 
     mb-2
     rounded-lg
     text-base
     outline-none
     bg-gray-200
      border-solid
       border-2
       border-gray-100
       duration-200
       hover:bg-slate-50
       hover:outline-none
        hover:border-yellow-400
        hover:shadow
        hover:shadow-yellow-300
        focus:shadow-yellow-100
        focus:outline-none
        focus:outline-none focus:yellow-200"
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div>
          <Label>Idade</Label>
          <input
            className="
      block
      w-full  
     p-3 
     mb-2
     rounded-lg
     text-base
     outline-none
     bg-gray-200
      border-solid
       border-2
       border-gray-100
       duration-200
       hover:bg-slate-50
       hover:outline-none
        hover:border-yellow-400
        hover:shadow
        hover:shadow-yellow-300
        focus:shadow-yellow-100
        focus:outline-none
        focus:outline-none focus:yellow-200"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <input
          onChange={onChangeImg}
          className="mt-4"
          type="file"
          name=""
          id=""
        />
        {load ? <Button>Enviando...</Button> : <Button>Enviar</Button>}
      </form>
      <div>
        {img.preview && (
          <div
            style={{ backgroundImage: `url('${img.preview}')` }}
            className="rounded-2xl bg-cover bg-center after:block after:h-0 after:pb-[100%]"
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
