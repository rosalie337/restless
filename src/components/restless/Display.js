import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ display }) => {
  return (
    <pre>
      {display}
    </pre>
  );
};

Display.propTypes = {
  display: PropTypes.string.isRequired
};

export default Display;
