import React from 'react';
import { shallow } from 'enzyme';
import Restless from './Restless';

describe('Restless container', () => {
  let wrapper;
  let restLess;
  beforeEach(() => {
    wrapper = shallow(<Restless />);
    restLess = wrapper.instance();
  });

  it('can change url in state', () => {
    restLess.handleChange({
      target: {
        name: 'url',
        value: 'www.spacejam.com'
      }
    });

    expect(wrapper.state('url')).toEqual('www.spacejam.com');
  });
});
