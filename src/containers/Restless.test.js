import React from 'react';
import { shallow } from 'enzyme';
import Restless from './Restless';

jest.mock('../services/fetchApi.js');

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

  it('can change method in state', () => {
    restLess.handleChange({
      target: {
        name: 'method',
        value: 'GETEM'
      }
    });

    expect(wrapper.state('method')).toEqual('GETEM');
  });

  it('can change body in state', () => {
    restLess.handleChange({
      target: {
        name: 'body',
        value: 'i am a good body'
      }
    });

    expect(wrapper.state('body')).toEqual('i am a good body');
  });

  it('can update history and display on fetch', () => {

    return restLess.fetch()
      .then(() => {
        expect(JSON.parse(wrapper.state('display'))).toEqual([
          { text: 'i am a response' },
          { text: 'i too can respond' }
        ]);
      });
  });
});
