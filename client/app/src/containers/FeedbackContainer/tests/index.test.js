import Feedback from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as Feedback } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Feedback />', () => {
  it('should render with default props', () => {
    const store = mockStore({ Feedback });
    const wrapper = shallow(
      <Feedback store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
