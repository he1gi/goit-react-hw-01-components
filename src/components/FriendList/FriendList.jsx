import PropTypes from 'prop-types';
import { List, Item, Img, Chip } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <Chip isOnline={isOnline}>{isOnline}</Chip>
          <Img src={avatar} alt={name}></Img>
          <p>{name}</p>
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
