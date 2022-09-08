import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Item = styled.li`
  padding: 10px;
  margin-bottom: 100px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 400px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;

export const Img = styled.img`
  width: 100px;
  margin-right: 20px;
`;

export const Chip = styled.span`
  margin-right: 20px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
    }
  }};
  ${props => {
    console.log(props.isOnline);
  }};
`;
