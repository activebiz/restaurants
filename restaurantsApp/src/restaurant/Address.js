import React from 'react';
import {View, Text} from 'react-native';

const Address = props => {
  const {streetAddress, addressLocality, postalCode} = props;
  return (
    <View>
      <Text>{streetAddress}</Text>
      <Text>{addressLocality}</Text>
      <Text>{postalCode}</Text>
    </View>
  );
};

export default Address;
