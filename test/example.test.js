import { expect } from 'chai';
import { shallow } from 'enzyme';

import React from 'react';
import App from '../app/javascripts/App.jsx';

describe('App', () => {
  it('should should render a h1', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
