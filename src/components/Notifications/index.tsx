import React from 'react';
import { Container } from './styles';

export interface NotificationsParams {
  goldGained?: number;
  experienceGained?: number;
  message: string;
  type: 'success' | 'fail' | 'error';
}

interface NotificationsProps {
  result: NotificationsParams;
  visible: boolean;
}

const Notifications: React.FC<NotificationsProps> = ({ result, visible }) => {
  if (!visible) {
    return <div />;
  }
  return (
    <Container type={result.type} visible={!!visible}>
      <>
        <span>{result.message}</span>
        {result.experienceGained && (
          <span>{`voce ganhou ${result.experienceGained} pontos de experiência`}</span>
        )}
        {result.goldGained && (
          <span>{`voce ganhou ${result.goldGained} moedas de ouro `}</span>
        )}
      </>
    </Container>
  );
};

export default Notifications;
