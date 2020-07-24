import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import 'react-day-picker/lib/style.css';

import { Container, Content, DashboardContainer, SelectEnemy } from './styles';

import Notification, {
  NotificationsParams,
} from '../../components/Notifications';

import GameMenu from '../../components/GameMenu';
import CharacterInfo from '../../components/CharacterInfo';
import api from '../../services/api';
import Button from '../../components/Button';
import { useCharacter, CharacterProps } from '../../hooks/Character';
import Header from '../../components/Header';

interface Enemy {
  id: string;
  name: string;
  level: number;
}

interface Result {
  character: CharacterProps;
  result: NotificationsParams;
}

const Dashboard: React.FC = () => {
  const [enemys, setEnemys] = useState<Enemy[]>([] as Enemy[]);
  const [selectedEnemy, setSelectedEnemy] = useState<string>('');
  const [responseBattle, setResponseBattle] = useState<Result>({} as Result);
  const { character, updateStatusCharacter } = useCharacter();
  const [notificationVisibility, setNotificationVisibility] = useState(false);

  const handleSelectEnemy = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      setSelectedEnemy(value);
    },
    [],
  );

  const attackEnemy = useCallback(() => {
    api
      .post<Result>(
        `single-enermy/combat?character_id=${character.id}&enemy_id=${selectedEnemy}`,
      )
      .then((response) => {
        const { data } = response;
        setResponseBattle(data);
        setNotificationVisibility(true);
        if (data.result.type !== 'error') {
          updateStatusCharacter(response.data.character);
        }
      });
  }, [selectedEnemy, character, updateStatusCharacter]);

  useEffect(() => {
    api.get('single-enermy').then((response) => {
      setEnemys(response.data);
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

          <SelectEnemy value={selectedEnemy} onChange={handleSelectEnemy}>
            <option value="0">Selecione um inimigo</option>
            {enemys.map((enemy) => (
              <option key={enemy.id} value={enemy.id}>
                {`${enemy.name} level: ${enemy.level}`}
              </option>
            ))}
          </SelectEnemy>
          <Button onClick={attackEnemy}>Atacar</Button>
        </DashboardContainer>
        <CharacterInfo />
      </Content>
    </Container>
  );
};

export default Dashboard;
