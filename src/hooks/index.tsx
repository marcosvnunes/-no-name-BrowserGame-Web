import React from 'react';

import { AuthProvider } from './Auth';
import { CharacterProvider } from './Character';
import { ToastProvider } from './Toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <CharacterProvider>
      <ToastProvider>{children}</ToastProvider>
    </CharacterProvider>
  </AuthProvider>
);

export default AppProvider;
