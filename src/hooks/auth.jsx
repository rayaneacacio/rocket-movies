import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState("");

  async function signIn({ email, password }){

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token }); 

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", JSON.stringify(token));

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("nao foi possível entrar");
      }
    }
  }

  function signOut(){
    setData({});

    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");
    localStorage.removeItem("@rocketmovies:allMovies");
    localStorage.removeItem("@rocketmovies:movieData");
    localStorage.removeItem("@rocketmovies:tags");
  } 

  async function updateUser({ userDataUpdated, avatarFile }){
    try {
      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users", fileUploadForm);

        userDataUpdated.avatar = response.data.avatar;
      }

      await api.put("/users", userDataUpdated);

      localStorage.setItem("@rocketmovies:user", JSON.stringify(userDataUpdated));
      setData({ user: userDataUpdated, token: data.token });
      
      alert("Perfil atualizado");

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("nao foi possível atualizar");
      }
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@rocketmovies:user"));
    const token = JSON.parse(localStorage.getItem("@rocketmovies:token"));

    if(user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    }

  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, updateUser, user: data.user }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };