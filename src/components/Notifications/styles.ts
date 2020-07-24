import styled from 'styled-components';

interface ContainerProps {
  type?: 'success' | 'fail' | 'error';
  visible: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 24px 0;
  padding: 16px;
  background: ${({ type }) => {
    if (type === 'success') return '#9bc7a7';
    if (type === 'fail') return '#c7a29b';
    return '#a5d6e8';
  }};
  border-radius: 10px;
  border: 0;
  color: #312838;
  width: 100%;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  span {
    display: block;
  }
`;
