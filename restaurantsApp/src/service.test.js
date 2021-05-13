import mockAxios from 'jest-mock-axios';
import {getRestaurants} from './service';

describe('getRestaurants called', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('url gets called and returns response', async () => {
    const promise = getRestaurants();

    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json',
    );

    // simulating a server response
    let responseObj = {data: 'restaurant data'};
    mockAxios.mockResponse(responseObj);

    const result = await promise;
    expect(result).toBe('restaurant data');
  });
});
