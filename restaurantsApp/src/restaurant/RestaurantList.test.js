import 'react-native';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import RestaurantList from './RestaurantList';
import { getRestaurants } from '../service';

jest.mock('../service');

describe('RestaurantList', () => {
  it('renders correctly', async () => {
    getRestaurants.mockResolvedValue([]);
    let component;
    await act(async () => {
      component = renderer.create(<RestaurantList />);
    });    
    expect(component.toJSON()).toMatchSnapshot();
   });
});
