// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import H1 from "../../Components/H1";
import Input from "../../Components/Input";
import Label from "../../Components/Label";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, NavLink, useNavigate } from "react-router-dom";
import apiDogs from "../../Services/Api";
import { useUser } from "../../hooks/UserContext";
import Head from "../../Components/Head";

const Login = () => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const { putUserData, getUser } = useUser();
  const navigate = useNavigate();

  const schema = yup.object({
    username: yup.string().required("Usúario é Obrigatorio!"),
    password: yup.string().required("Senha é Obrigatoria!"),
  });

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (ClientData) => {
    try {
      setLoad(true);
      const { data } = await apiDogs.post("/jwt-auth/v1/token", {
        username: ClientData.username,
        password: ClientData.password,
      });
      putUserData(data);
      getUser(data.token);
      setLoad(false);
      navigate("/user");
    } catch (error) {
      console.log(error);
      setError(error);
      setLoad(false);
    }
  };

  return (
    <div>
      <div className="flex-1">
        <div className="md:grid grid-cols-2 gap-8 before:block before:bg-cover before:bg-center before:bg-auth">
          <div className="max-w-md p-4 mt-48">
            <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
              <div>
                <Head title="Login" />
                <H1>Login</H1>
                <Label>Usuário </Label>
                <Input {...register("username")} />
                <p className="text-red-600 block">{errors.username?.message}</p>
                <Label>Senha </Label>
                <Input type="password" {...register("password")} />
                <p className="text-red-600">{errors.password?.message}</p>
                <p className="text-red-600">{error && "Usuário Inválido!"}</p>
                <Button type="submit">
                  {" "}
                  {load ? "Carregando..." : "Entrar"}{" "}
                </Button>
              </div>
            </form>
            <Link to="/lostpassword">
              {" "}
              <p className="inline-block text-gray-600 py-2	leading-none">
                Perdeu a Senha?
              </p>{" "}
            </Link>
            <div className="my-16">
              <h2 className="text-3xl font-serif leading-none ">Cadastre-se</h2>
              <p className="my-8">
                Ainda não possui conta? Cadastre-se no site.
              </p>
              <NavLink to="/register">
                {" "}
                <Button>Cadastro</Button>{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
