import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';

import ReactJson from 'react-json-view';

const Display = ({ display }) => {
  return (
    <pre className={styles.Display}>
      <ReactJson src={display} displayDataTypes={false} />
    </pre>
  );
};

Display.propTypes = {
  display: PropTypes.string.isRequired
};

export default Display;
