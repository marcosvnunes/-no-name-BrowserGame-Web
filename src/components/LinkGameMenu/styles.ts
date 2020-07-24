import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-image: linear-gradient(to bottom, #4b4352, #48374a);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  transition: background-color 0.2s;

  a {
    text-decoration: none;
    color: #fff;

    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 8px;
    width: 28px;
    height: 28px;
  }

  & + div {
    margin-top: 8px;
  }

  &:hover {
    background: ${shade(0.3, '#cba780')};
  }
`;
