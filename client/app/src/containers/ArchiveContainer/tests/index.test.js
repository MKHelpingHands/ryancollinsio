import Archive from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as archive } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Archive />', () => {
  it('should render with default props', () => {
    const store = mockStore({ archive });
    const wrapper = shallow(
      <Archive store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});