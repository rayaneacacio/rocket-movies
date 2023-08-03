import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useNotes } from "../../hooks/notes";
import { useTags } from '../../hooks/tags';

import { BiArrowBack } from 'react-icons/bi'
import { LuClock3, LuEdit } from 'react-icons/lu';

import { Header } from '../../components/header';
import { ButtonText } from '../../components/button-text';
import { Stars } from '../../components/stars';
import { Marker } from '../../components/marker';

import { Container, Main, Div, SectionMarkers } from './style';

export function MoviePreview(){
  const { user } = useAuth();
  const { movieData, viewNote } = useNotes();
  const { tags, getTags, removeAllTags } = useTags();
  const { movie } = useParams();

  const navigate = useNavigate();

  async function navigateBack() {
    await removeAllTags();
    navigate(-1);
  }

  function navigateEditMovie() {
    navigate(`/createmovie/${movieData.title}`);
  }

  useEffect(() => {
    viewNote({ movieTitle: movie });
    getTags({ note_id: movieData.id });

    if(movieData || movieData != undefined) {
      document.querySelector("#date").innerHTML = `${movieData.created_at.slice(0, 10)} às ${movieData.created_at.slice(11, 19)}`;
    }

  }, [ movieData ]);

  return (
    <Container>
      <Header />

      <div>      
        
        <Main>
          <Div>
            <span>
              <ButtonText icon={ <BiArrowBack /> } title="Voltar" onClick={ navigateBack } />
              <ButtonText icon={ <LuEdit /> } title="Editar" onClick={ navigateEditMovie } />
            </span>

            <span> 
              <h1> { movieData.title } </h1> 
              <Stars scoring={ movieData.scoring } width="2rem" height="2rem" /> 
            </span>

            <span>
              <img src={`${api.defaults.baseURL}/files/${user.avatar}`} alt="" />
              <p>Por { user.name } </p>
              <LuClock3 />
              <p id="date"></p>
            </span>
          </Div>
          
          <SectionMarkers>
            {
              tags &&
              tags.map(tag => (
                <Marker key={ String(tag.id) } title={ tag.name } />
              ))
            }
          </SectionMarkers>

          <p> { movieData.description } </p>
        </Main>

      </div>
    </Container>
  )
}