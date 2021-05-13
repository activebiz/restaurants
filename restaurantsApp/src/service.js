import axios from 'axios';
import {API_URL} from '@env';

const getRestaurants = () => {
  return axios.get(API_URL).then(({data}) => {
    console.log(JSON.stringify(data, null, 4));
    return data;
  });
};

export {getRestaurants};
