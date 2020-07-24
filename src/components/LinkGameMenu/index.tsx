import React from 'react';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';
import { Container } from './styles';

interface LinkProps {
  Icon: IconType;
  name: string;
  url: string;
}

const Input: React.FC<LinkProps> = ({ Icon, name, url }) => {
  return (
    <Container>
      <Link to={url}>
        <Icon />
        <strong>{name}</strong>
      </Link>
    </Container>
  );
};

export default Input;
