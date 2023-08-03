import { useNavigate } from 'react-router-dom';

import { useNotes } from "../../hooks/notes";

import { AiOutlinePlus } from 'react-icons/ai';

import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Section } from '../../components/section';

import { Container, Head, Notes } from './style';
import { useEffect } from 'react';

export function Home(){ 
  const { getNotes, notes } = useNotes();

  const navigate = useNavigate();

  function navigateToCreateMovie() {
    navigate("/createmovie/new");
  }

  function navigateNotes(title) {
    navigate(`moviepreview/${title}`);
  }

  useEffect(() => {
    getNotes();
  }, [])

  return (
    <Container>
      <Header />

      <main>
        <Head>
          <h1>Meus filmes</h1>
          <Button icon={ <AiOutlinePlus /> } title="Adicionar filme" onClick={ navigateToCreateMovie } />
        </Head>

        <Notes>
          {
            notes &&
            notes.map(note => (
              <Section className="movies" key={ String(note.id) } title={ note.title } scoring={ note.scoring } description={ note.description } onClick={() => navigateNotes(note.title) } />
            ))
          }
        </Notes>

      </main>
    </Container>
  )
}