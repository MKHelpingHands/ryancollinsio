import Search from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as Search } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Search />', () => {
  it('should render with default props', () => {
    const store = mockStore({ Search });
    const wrapper = shallow(
      <Search store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
