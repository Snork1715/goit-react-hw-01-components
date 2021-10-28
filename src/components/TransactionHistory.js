import PropTypes from "prop-types";

export default function TransactionHistory(props) {
const {history} = props;
  return (
    <div className="transition_container">
    <table className="transaction-history">
      <thead className="transition_head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className="transition_body">
        {history.map((item) => (
          <tr className="transition_row" key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

TransactionHistory.propTypes = {
    history: PropTypes.arrayOf(PropTypes.shape()
    ),
  };