import React, { useCallback } from 'react';
import {} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, HeaderContent, Profile } from './styles';
import { useAuth } from '../../hooks/Auth';
import { useCharacter } from '../../hooks/Character';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  const { logoutCharacter } = useCharacter();

  const logout = useCallback(() => {
    logoutCharacter();
    signOut();
  }, [logoutCharacter, signOut]);

  return (
    <Container>
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
        <button type="button" onClick={logout}>
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
