import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useNotes } from '../../hooks/notes';
import { useTags } from '../../hooks/tags';

import { BiArrowBack } from 'react-icons/bi'

import { Header } from '../../components/header';
import { ButtonText } from '../../components/button-text';
import { BoxText } from '../../components/box-text';
import { Marker } from '../../components/marker';
import { Button } from '../../components/button';

import { Container, Main, SectionMarkers } from './style';

export function CreateMovie(){
  const { movieData, createNote, viewNote, updateNote, removeNote } = useNotes();
  const { tags, getTags } = useTags();

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ scoring, setScoring ] = useState("");
  const [ markers, setMarkers ] = useState([]);
  const [ draftMarker, setDraftMarker ] = useState("");

  const { edit } = useParams();

  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  async function saveMovie() {
    if(title === "") {
      alert("preencha os campos");
      return;
    }

    await createNote({ title, description, scoring, tags: markers });
    clearPage();
  }

  function clearPage() {
    setTitle("");
    setDescription("");
    setScoring("");
    setMarkers([]);
    setDraftMarker("");
  }

  function addTag() {
    const markerExists = markers.filter(marker => marker === draftMarker);
    if(markerExists.length > 0) {
      return
    }

    setMarkers([...markers, draftMarker]);
    setDraftMarker("");
    document.querySelector("#newMarker").value = "";
  }

  function removeTag(name) {
    const newArrayMarkers = markers.filter(marker => marker != name);
    setMarkers(newArrayMarkers);
  }

  async function updateMovie() {
    await updateNote({ note_id: movieData.id, title, description, scoring, tags: markers });
    await getTags({ note_id: movieData.id });
  }

  function removeMovie() {
    if(confirm("remover filme?")) {
      removeNote({ title, description });
      navigate("/");
    }
  }

  useEffect(() => {
    const inputScoring = document.querySelector(".inputScoring");
    inputScoring.addEventListener("input", function() {
      if(this.value < 0 || this.value > 5) {
        this.value = "";
      }
    });

    inputScoring.style.textDecoration = "none";

    if(edit != "new") {
      viewNote({ movieTitle: edit });

      const arrayTags = [];
      tags.map(tag => {
        if(!arrayTags.includes(tag)) {
          arrayTags.push(tag.name);
        }
      })

      setMarkers(arrayTags);

      document.querySelector("#titlePage").innerHTML = "Editar filme";
    }

  }, []);

  useEffect(() => {
    if(edit != "new") {
      setTitle(movieData.title);
      setDescription(movieData.description);
      setScoring(movieData.scoring);
    }

  }, [ movieData ]);

  return (
    <Container>
      <Header />

      <div>
        <Main>
          <div>
            <ButtonText icon={ <BiArrowBack /> } title="Voltar" onClick={ navigateBack } />

            <h1 id="titlePage"> Novo filme </h1>
          </div>
          
          <div>
            <BoxText $text placeholder="Título" value={ title } onChange={e => setTitle(e.target.value)} />
            <BoxText className="inputScoring" type="number" $text placeholder="Sua nota (de 0 a 5)" value={ scoring } onChange={e => setScoring(e.target.value)} />
          </div>

          <BoxText $textarea placeholder="Observações" value={ description } onChange={e => setDescription(e.target.value)} />

          <SectionMarkers>
            <h2>Marcadores</h2>

            <div id="markersDiv">
              {
                markers &&
                markers.map(marker => (
                  <Marker key={ String(markers.indexOf(marker)) } title={ marker } $edit onClick={() => removeTag(marker)} />
                ))
              }
              <Marker id="newMarker" title="Novo Marcador" $new value={ draftMarker } onChange={e => setDraftMarker(e.target.value)} onClick={ addTag } />
            </div>
          </SectionMarkers>

          <div>
            <Button id="removeButton" title="Excluir filme" className="buttonRemove" onClick={ edit !== "new" ? removeMovie : clearPage } />
            <Button id="saveButton" title="Salvar alterações" onClick={ edit !== "new" ? updateMovie : saveMovie } />
          </div>
        </Main>
      </div>
    </Container>
  )
}