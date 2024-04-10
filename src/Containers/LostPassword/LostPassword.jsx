import { useState } from "react";
import H1 from "../../Components/H1";
import Label from "../../Components/Label";
import Button from "../../Components/Button";
import apiDogs from "../../Services/Api";

const LostPassword = () => {
  const [input, setInput] = useState("");
  console.log(input);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const api = await apiDogs.post("/api/password/lost", {
      input: input,
      url: "http://localhost:3000/login/perdeu",
    });
    console.log(api);
  };

  return (
    <>
      <div className="flex-1">
        <div className="">
          <div className="min-h-screen md:grid grid-cols-2 gap-8 before:block before:bg-auth before:bg-cover before:bg-center">
            <div className="max-w-full  p-4 mt-48 md:max-w-lg">
              <form onSubmit={handleSubmit}>
                <H1>Perdeu a Senha?</H1>
                <Label>Email / Usuário </Label>
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
                  focus:outline-none focus:yellow-200"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button>Enviar Email</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LostPassword;
