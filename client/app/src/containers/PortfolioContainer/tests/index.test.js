import Portfolio from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as portfolio } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Portfolio />', () => {
  it('should render with default props', () => {
    const store = mockStore({ portfolio });
    const wrapper = shallow(
      <Portfolio store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
