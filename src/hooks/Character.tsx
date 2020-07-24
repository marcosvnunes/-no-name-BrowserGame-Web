import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  id: string;
}

export interface CharacterProps {
  id: string;
  name: string;
  avatar: string;
  level: number;
  gold: number;
  experience: number;
  inteligence: number;
  agility: number;
  strength: number;
  energy: number;
  stamina: number;
  max_stamina: number;
  xp_level_up: number;
  xp_current_level: number;
  hability_points: number;
}

interface AuthState {
  character: CharacterProps;
}

interface CharacterContextProps {
  character: CharacterProps;
  loginCharacter(char: CharacterProps): Promise<void>;
  logoutCharacter(): void;
  updateCharacter(character: CharacterProps): void;
  updateStatusCharacter(character: CharacterProps): void;
}
const AuthContext = createContext<CharacterContextProps>(
  {} as CharacterContextProps,
);

const CharacterProvider: React.FC = ({ children }) => {
  const [character, setCharacter] = useState<CharacterProps>(() => {
    const characterSaved = localStorage.getItem('@Warrior:character');

    if (characterSaved) {
      return JSON.parse(characterSaved);
    }
    return {} as CharacterProps;
  });

  const loginCharacter = useCallback(async (char: CharacterProps) => {
    localStorage.setItem('@Warrior:character', JSON.stringify(char));

    setCharacter(char);
  }, []);

  const logoutCharacter = useCallback(() => {
    localStorage.removeItem('@Warrior:character');

    setCharacter({} as CharacterProps);
  }, []);

  const updateCharacter = useCallback((newCharacter: CharacterProps) => {
    localStorage.setItem('@Warrior:character', JSON.stringify(newCharacter));

    setCharacter(newCharacter);
  }, []);

  const updateStatusCharacter = useCallback(
    (newStatusCharacter: CharacterProps) => {
      localStorage.setItem(
        '@Warrior:character',
        JSON.stringify(newStatusCharacter),
      );

      setCharacter(newStatusCharacter);
    },
    [],
  );

  return (
    <AuthContext.Provider
      value={{
        character,
        loginCharacter,
        logoutCharacter,
        updateCharacter,
        updateStatusCharacter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useCharacter(): CharacterContextProps {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { CharacterProvider, useCharacter };
