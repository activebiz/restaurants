import 'react-native';
import React from 'react';
import RestaurantCard from './RestaurantCard';
import renderer from 'react-test-renderer';

describe('RestaurantCard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RestaurantCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
