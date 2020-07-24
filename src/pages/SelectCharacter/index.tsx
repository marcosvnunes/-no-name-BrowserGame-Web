import React, { useState, useEffect, useCallback } from 'react';
import 'react-day-picker/lib/style.css';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  DashboardContainer,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';
import Button from '../../components/Button';
import { useCharacter, CharacterProps } from '../../hooks/Character';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const { loginCharacter } = useCharacter();
  const [characters, setCharacters] = useState<CharacterProps[]>(
    [] as CharacterProps[],
  );

  const handleLoginCharacter = useCallback(
    (char: CharacterProps) => {
      loginCharacter(char);
    },
    [loginCharacter],
  );

  useEffect(() => {
    api.get('/characters-me/all').then((response) => {
      setCharacters(response.data);
    });
  }, [setCharacters]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Gobarber" />
          <Profile>
            <div>
              <span>Bem vindo</span>
              <Link to="profile">
                <strong>user</strong>
              </Link>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <DashboardContainer>
          Selecione um Heroi
          {characters.map((character) => (
            <div>
              <div>
                <strong>{character.name}</strong>
                <span>
                  level:
                  {character.level}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleLoginCharacter(character)}
              >
                Logar
              </button>
            </div>
          ))}
          <Button onClick={() => {}}>Criar Heroi</Button>
        </DashboardContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
