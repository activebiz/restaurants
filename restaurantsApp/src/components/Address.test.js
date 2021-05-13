import 'react-native';
import React from 'react';
import Address from './Address';
import renderer from 'react-test-renderer';

describe('Address', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Address />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
