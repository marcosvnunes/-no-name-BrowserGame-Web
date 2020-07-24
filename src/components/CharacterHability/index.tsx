import React, { useCallback } from 'react';

import { FiPlus } from 'react-icons/fi';
import {
  Container,
  Hability,
  HabilityPoints,
  ButtonAddHabilityPoints,
} from './styles';
import api from '../../services/api';
import { useCharacter, CharacterProps } from '../../hooks/Character';

interface CharacterHabilityProps {
  character: CharacterProps;
}

interface ResponseAddPoint {
  character?: CharacterProps;
  type: string;
  message: string;
}

const CharacterHability: React.FC<CharacterHabilityProps> = ({ character }) => {
  const { updateCharacter } = useCharacter();
  const handleAddPointHability = useCallback(
    (hability: string) => {
      api
        .post<ResponseAddPoint>(`add_point_character/?hability=${hability}`, {
          character_id: character.id,
        })
        .then((response) => {
          if (response.data.type === 'success' && response.data.character) {
            updateCharacter(response.data.character);
          }
        });
    },
    [character.id, updateCharacter],
  );
  return (
    <Container>
      <Hability>
        Inteligencia:
        <HabilityPoints>{character.inteligence}</HabilityPoints>
        {character.hability_points >= 1 && (
          <ButtonAddHabilityPoints
            type="button"
            onClick={() => handleAddPointHability('inteligence')}
          >
            <FiPlus size={20} />
          </ButtonAddHabilityPoints>
        )}
      </Hability>

      <Hability>
        Força
        <HabilityPoints>{character.strength}</HabilityPoints>
        {character.hability_points >= 1 && (
          <ButtonAddHabilityPoints
            type="button"
            onClick={() => handleAddPointHability('strength')}
          >
            <FiPlus size={20} />
          </ButtonAddHabilityPoints>
        )}
      </Hability>
      <Hability>
        Agilidade
        <HabilityPoints>{character.agility}</HabilityPoints>
        {character.hability_points >= 1 && (
          <ButtonAddHabilityPoints
            type="button"
            onClick={() => handleAddPointHability('agility')}
          >
            <FiPlus size={20} />
          </ButtonAddHabilityPoints>
        )}
      </Hability>
      <Hability>
        Energia
        <HabilityPoints>{character.energy}</HabilityPoints>
        {character.hability_points >= 1 && (
          <ButtonAddHabilityPoints
            type="button"
            onClick={() => handleAddPointHability('energy')}
          >
            <FiPlus size={20} />
          </ButtonAddHabilityPoints>
        )}
      </Hability>
    </Container>
  );
};

export default CharacterHability;
