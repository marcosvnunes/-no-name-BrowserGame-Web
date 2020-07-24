import React from 'react';
import {
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/Auth';
import { useCharacter } from '../hooks/Character';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  isSelectChar?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Compoment,
  isPrivate = false,
  isSelectChar = false,
  ...rest
}) => {
  const { user } = useAuth();
  const { character } = useCharacter();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === !!user && isSelectChar === !!character.id)
          return <Compoment />;

        if (isSelectChar) {
          return (
            <Redirect
              to={{
                pathname: '/select-character',
                state: { from: location },
              }}
            />
          );
        }

        if (isPrivate) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          );
        }

        return (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
