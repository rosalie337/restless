import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ url, method, body, onSubmit, onChange }) => {
  return (
    <section>
      <form onSubmit={onSubmit}>
        <input type="text" name="url" placeholder="URL" value={url} onChange={onChange} />
        <section>
          <div>
            <label>
              <input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange} />
              GET
            </label>
            <label>
              <input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange} />
              POST
            </label>
            <label>
              <input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange}/ >
              PUT
            </label> 
            <label>
              <input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange} /> 
              PATCH
            </label>
            <label>
              <input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange} />
              DELETE
            </label>
          </div>
          <button>Go!</button>
        </section>
        <textarea placeholder="Raw JSON Body" name="body" value={body} onChange={onChange}></textarea>
      </form>
    </section>
  );
};

Form.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
