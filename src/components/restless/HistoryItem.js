import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url, id }) => {
  return (
    <article id={id}>
      <p id={id}>{method}</p>
      <span id={id}>{url}</span>
    </article>
  );
};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default HistoryItem;
