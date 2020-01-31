import React from 'react';
import PropTypes from 'prop-types';

import ReactJson from 'react-json-view';

const Display = ({ display }) => {
  return (
    <pre>
      <ReactJson src={display} displayDataTypes={false} />
    </pre>
  );
};

Display.propTypes = {
  display: PropTypes.string.isRequired
};

export default Display;
