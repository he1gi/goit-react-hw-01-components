import PropTypes from 'prop-types';
import { List, Container, Title, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title ? <Title>{title}</Title> : null}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </Item>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.node,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
