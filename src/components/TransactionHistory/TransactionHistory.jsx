import PropTypes from 'prop-types';
import { Table, Head, Cell } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
