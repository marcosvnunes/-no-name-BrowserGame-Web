import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import 'react-day-picker/lib/style.css';

import Notification, {
  NotificationsParams,
} from '../../components/Notifications';
import Header from '../../components/Header';
import GameMenu from '../../components/GameMenu';
import CharacterInfo from '../../components/CharacterInfo';
import Button from '../../components/Button';

import api from '../../services/api';
import { useCharacter, CharacterProps } from '../../hooks/Character';
import { Container, Content, DashboardContainer, SelectEnemy } from './styles';

interface Potion {
  id: string;
  name: string;
  value: number;
  price: number;
  type: string;
}

interface Result {
  character: CharacterProps;
  result: NotificationsParams;
}

const Dashboard: React.FC = () => {
  const [potions, setPotions] = useState<Potion[]>([] as Potion[]);
  const [selectedPotion, setSelectedPotion] = useState<string>('');
  const [notificationVisibility, setNotificationVisibility] = useState(false);

  const [responseBattle, setResponseBattle] = useState<Result>({} as Result);
  const { character, updateStatusCharacter } = useCharacter();
  const handleSelectEnemy = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      setSelectedPotion(value);
    },
    [],
  );

  const buyPotion = useCallback(() => {
    api
      .post<Result>(`potions/buy`, {
        potion_id: selectedPotion,
        character_id: character.id,
      })
      .then((response) => {
        const { data } = response;
        setResponseBattle(data);
        setNotificationVisibility(true);
        if (data.result.type !== 'error') {
          updateStatusCharacter(response.data.character);
        }
      });
  }, [character, updateStatusCharacter, selectedPotion]);

  useEffect(() => {
    api.get('potions').then((response) => {
      setPotions(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <GameMenu />
        <DashboardContainer>
          {responseBattle && (
            <Notification
              visible={notificationVisibility}
              result={responseBattle.result}
            />
          )}

          <SelectEnemy value={selectedPotion} onChange={handleSelectEnemy}>
            <option value="0">Selecione uma poção</option>
            {potions.map((potion) => (
              <option key={potion.id} value={potion.id}>
                {`${potion.name} Price: ${potion.price}`}
              </option>
            ))}
          </SelectEnemy>
          <Button onClick={buyPotion}>Comprar Potion</Button>
        </DashboardContainer>
        <CharacterInfo />
      </Content>
    </Container>
  );
};

export default Dashboard;
