import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const TagsContext = createContext({});

function TagsProvider({ children }) {
  const [ tags, setTags ] = useState([]);

  async function getTags({ note_id }) {
    const response = await api.post("/tags", { note_id });
    setTags(response.data);

    localStorage.setItem("@rocketmovies:tags", JSON.stringify(response.data));
  }

  function removeAllTags() {
    localStorage.removeItem("@rocketmovies:tags");
    setTags([]);
  }

  useEffect(() => {
    const allTags = JSON.parse(localStorage.getItem("@rocketmovies:tags"));

    if(allTags) {
      setTags(allTags);
    }
    
  }, []);

  return (
    <TagsContext.Provider value={{ tags, getTags, removeAllTags }}>
      { children }
    </TagsContext.Provider>
  )
}

function useTags() {
  const context = useContext(TagsContext);
  return context;
}

export { TagsProvider, useTags };