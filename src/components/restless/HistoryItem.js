import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url }) => {
  return (
    <article>
      <p>{method}</p>
      <span>{url}</span>
    </article>
  );
};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default HistoryItem;
