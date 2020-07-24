import styled from 'styled-components';
import { shade } from 'polished';

interface ProgressbarProps {
  percent: number;
  colorBG: string;
}

export const Container = styled.div`
  right: 0;
  width: 270px;
  background-image: linear-gradient(#f29d63, #ffdaa5, #fed7a2, #fbc28d);
  border: 2px solid #994217;

  border-radius: 10px;
  padding: 16px;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 235px;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-radius: 6px;
  background-image: linear-gradient(#4b4352, #4b4352, #53465a, #48374a);
`;
export const ContainerStatus = styled.div`
  padding: 3px;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border: 3px solid #382c23;
  border-radius: 50%;
  margin-right: 4px;
`;

export const Level = styled.span`
  background: #4b4352;
  position: absolute;
  border: 2px solid #382c23;
  bottom: 0;
  left: 50px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const ProgressbarContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 2px 0;
  color: #000;
  width: 100%;
  background: #767575;
  border-radius: 6px;
  padding: 1px;

  border: 1px solid #000;
  display: flex;
  position: relative;
  span {
    position: absolute;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
  }
`;

export const Progressbar = styled.div<ProgressbarProps>`
  width: ${(props) => props.percent}%;
  border-radius: 6px;
  height: 20px;
  background-image: linear-gradient(
    to bottom,
    ${({ colorBG }) => colorBG},
    ${({ colorBG }) => shade(0.3, colorBG)}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const HabilityContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Hability = styled.div`
  display: flex;
  justify-content: space-between;
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
