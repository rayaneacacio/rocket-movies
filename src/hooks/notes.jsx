import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const NotesContext = createContext({});

function NotesProvider({ children }) {
  const [ notes, setNotes ] = useState([]);
  const [ movieData, setMovieData ] = useState([]);

  async function createNote({ title, description, scoring, tags }) {
    await api.post("/notes", { title, description, scoring, tags });
    alert("salvo com sucesso");
  }

  async function getNotes(){
    const response = await api.get("/notes/index");
    setNotes(response.data);

    localStorage.setItem("@rocketmovies:allMovies", JSON.stringify(response.data));
  }

  async function searchNotes({ title }) {
    const response = await api.post("/notes/show", { title });
    setNotes(response.data);
  }

  async function viewNote({ movieTitle }) {
    const data = notes.filter(note => note.title === movieTitle);
    const singleNote = data[0];
    setMovieData(singleNote);

    localStorage.setItem("@rocketmovies:movieData", JSON.stringify(singleNote));
  }

  async function updateNote({ note_id, title, description, scoring, tags }) {
    await api.put("/notes", { note_id, title, description, scoring, tags });
    alert("nota atualizada");
  }

  async function removeNote({ title, description }) {
    await api.post("/notes/delete", { title, description });
  }

  useEffect(() => {
    const allMovies = JSON.parse(localStorage.getItem("@rocketmovies:allMovies"));
    const movie = JSON.parse(localStorage.getItem("@rocketmovies:movieData"));

    if(allMovies) {
      setNotes(allMovies);
    }

    if(movie) {
      setMovieData(movie);
    }

  }, [])

  return (
    <NotesContext.Provider value={{ notes, movieData, createNote, getNotes, searchNotes, viewNote, updateNote, removeNote }}>
      { children }
    </NotesContext.Provider>
  )
}

function useNotes(){
  const context = useContext(NotesContext);
  return context;
}

export { NotesProvider, useNotes };