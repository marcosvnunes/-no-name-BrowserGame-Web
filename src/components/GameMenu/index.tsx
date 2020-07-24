import React from 'react';
import {
  GiNewspaper,
  GiMagicPortal,
  GiPotionBall,
  GiSwitchWeapon,
} from 'react-icons/gi';
import { Container } from './styles';

import LinkGameMenu from '../LinkGameMenu';

const GameMenu: React.FC = () => {
  return (
    <Container>
      <LinkGameMenu Icon={GiNewspaper} name="Noticías" url="" />
      <LinkGameMenu Icon={GiMagicPortal} name="Caçada" url="/dashboard" />
      <LinkGameMenu Icon={GiPotionBall} name="Poções" url="/potions" />
      <LinkGameMenu Icon={GiSwitchWeapon} name="Armas" url="" />
    </Container>
  );
};

export default GameMenu;
