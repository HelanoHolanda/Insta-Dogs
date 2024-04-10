import { createContext, useContext, useEffect, useState } from "react";
import apiDogs, { TOKEN_VALIDATE_POST } from "../Services/Api";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false); // estados dos usuarios
  const [data, setData] = useState(false);

  const getUser = async (token) => {
    try {
      const api = await apiDogs.get("/api/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(api.data);
    } catch (error) {
      // Trate o erro, se necessário
      console.error("Erro ao obter usuário:", error);
    }
  };

  // funcao que recebe e seta os dados no localStorage
  const putUserData = async (infoUser) => {
    await localStorage.setItem("apiDogs", JSON.stringify(infoUser));
    setUser(infoUser);
    console.log(infoUser);
  };

  const logout = async () => {
    await window.localStorage.removeItem("apiDogs");
    setData(false);
  };

  // funcao que pega os dados no localStorage
  useEffect(() => {
    const LoadUserData = async () => {
      const infoUser = await localStorage.getItem("apiDogs");

      if (infoUser) {
        setUser(JSON.parse(infoUser));
      }
    };
    LoadUserData();
  }, []);

  useEffect(() => {
    async function autoLogin() {
      const tokenString = window.localStorage.getItem("apiDogs");
      if (tokenString) {
        const token = JSON.parse(tokenString);
        try {
          const { url, options } = TOKEN_VALIDATE_POST(token.token);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error("Token inválido");
          }
          await getUser(token.token);
        } catch (err) {
          console.error("Erro durante o auto login:", err);
          // Trate o erro conforme necessário, como redirecionar para a página de login.
        }
      }
    }
    autoLogin();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, logout, getUser, data, user }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);
