import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Hability = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #65483c;
  width: 190px;
  margin: 8px;
  padding: 4px 12px;
  color: #f4e8e8;
  font-weight: bold;
  background-image: linear-gradient(to bottom, #4b4352, #48374a);
`;

export const HabilityPoints = styled.strong`
  text-align: center;
  border-radius: 6px;
  border: 1px solid #65483c;
  padding: 0 12px;
  width: 50px;
  height: 25px;
  color: #65483c;
  font-weight: bold;
  background-image: linear-gradient(to bottom, #ffdaa5, #d1a971);
`;

export const ButtonAddHabilityPoints = styled.button`
  background: none;
  border: 0;
  color: #fff;

  transition: background-color 0.2s;

  &:hover {
    color: ${shade(0.2, '#AAF5A3')};
  }
`;
