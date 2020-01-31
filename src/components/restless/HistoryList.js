import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ history, onClick }) => {
  const historyElements = history.map((item, i) => {
    return (
      <li key={i} onClick={onClick}>
        <HistoryItem method={item.method} url={item.url} id={i} />
      </li>
    );
  });

  return (
    <ul>
      {historyElements}
    </ul>
  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryList;
