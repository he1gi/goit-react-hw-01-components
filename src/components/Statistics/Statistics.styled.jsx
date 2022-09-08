import styled from '@emotion/styled';
import { getRandomHexColor } from './randomColor';

export const Container = styled.section`
  text-align: center;
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getRandomHexColor()};
  font-size: 25px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
