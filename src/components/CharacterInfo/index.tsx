import React, { useMemo } from 'react';

import {
  Container,
  Header,
  ContainerStatus,
  Avatar,
  Level,
  ProgressbarContainer,
  Progressbar,
  HabilityPoints,
} from './styles';
import { useCharacter } from '../../hooks/Character';
import CharacterHability from '../CharacterHability';

const CharacterInfo: React.FC = () => {
  const { character, logoutCharacter } = useCharacter();
  const staminaPercent = useMemo(() => {
    return (character.stamina / character.max_stamina) * 100;
  }, [character.stamina, character.max_stamina]);

  const experiencePercent = useMemo(() => {
    const { experience, xp_current_level, xp_level_up } = character;
    const percent = Math.floor(
      ((experience - xp_current_level) / (xp_level_up - xp_current_level)) *
        100,
    );
    return percent;
  }, [character]);

  return (
    <Container>
      <Header>
        <Avatar src="https://cdn1.iconfinder.com/data/icons/zeshio-s-fantasy-avatars/200/Fantasy_avatar_people-06-512.png" />
        <Level>{character.level}</Level>
        <ContainerStatus>
          <strong>{character.name}</strong>
          <ProgressbarContainer>
            <span>{`${character.stamina}/${character.max_stamina}`}</span>
            <Progressbar colorBG="#AAF5A3" percent={staminaPercent} />
          </ProgressbarContainer>
          <ProgressbarContainer>
            <span>
              {`${Number(character.experience)}/${character.xp_level_up}`}
            </span>
            <Progressbar colorBG="#ABEAF5" percent={experiencePercent} />
          </ProgressbarContainer>
        </ContainerStatus>
      </Header>
      <CharacterHability character={character} />
      gold
      <HabilityPoints>{character.gold}</HabilityPoints>
      <br />
      <button type="button" onClick={logoutCharacter}>
        alterar usuario
      </button>
    </Container>
  );
};

export default CharacterInfo;
